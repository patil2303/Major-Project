if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
// const Mongo_Url = "mongodb://127.0.0.1:27017/homigo";
const ejsMate = require("ejs-mate")
const ExpressError = require("./utils/ExpressError.js")
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const bookingRouter = require("./routes/booking.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingsRootRouter = require("./routes/bookingsRoot.js");

// Primary DB (Atlas). Fallback to local MongoDB when SRV/DNS fails or env not set.
const dbUrl = process.env.ATLASDB_URL;
const localDb = "mongodb://127.0.0.1:27017/homigo";

async function connectWithFallback() {
    if (dbUrl) {
        try {
            await mongoose.connect(dbUrl, { family: 4 }); // force IPv4 to avoid some DNS issues on Windows
            console.log("Connected to Atlas DB");
            return;
        } catch (err) {
            console.error("Atlas connection error:", err && err.message ? err.message : err);
            console.warn("Falling back to local MongoDB...");
        }
    } else {
        console.warn("ATLASDB_URL not set. Using local MongoDB.");
    }
    // Fallback
    try {
        await mongoose.connect(localDb);
        console.log("Connected to local MongoDB");
    } catch (err) {
        console.error("Failed to connect to any MongoDB instance:", err);
        throw err; // rethrow so process notices the failure
    }
}

// Connect now (will be awaited before creating session store)
connectWithFallback().catch(err => {
    // let the process crash with a clear error; nodemon will restart after changes
    console.error("Exiting due to DB connection error.");
    process.exit(1);
});

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

console.log("ATLASDB_URL is:", dbUrl);


// Create session store after mongoose connection is ready. Use same db as connected.
const sessionOptions = {
    // store will be attached once mongoose connection is ready
    secret: process.env.SECRET || "thisshouldbeabettersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

// After mongoose connects, create the session store that uses the connected DB.
mongoose.connection.once('open', () => {
    const effectiveMongoUrl = mongoose.connection.client.s.url || dbUrl || localDb;
    const store = MongoStore.create({
        mongoUrl: effectiveMongoUrl,
        crypto: {
            secret: process.env.SECRET,
        },
        touchAfter: 24 * 3600,
    });

    store.on("error", (err) => {
        console.error("ERROR in MONGO SESSION STORE", err);
    });

    // attach the store to the session options
    sessionOptions.store = store;
});

// app.get("/" ,(req,res) => {
//     res.send("Hello , I am root");
//  });


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// app.get("/demouser", async(req, res) => {
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student"
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });

app.use("/listings", listingRouter);
// Redirect root to listings index (gallery) so the base Render URL lands on the gallery
app.get('/', (req, res) => {
    return res.redirect('/listings');
});
app.use("/listings/:id/bookings", bookingRouter);
app.use("/listings/:id/reviews/", reviewRouter);
app.use("/", userRouter);
app.use("/bookings", bookingsRootRouter);



app.all("*", (req, res, next) => {
    next(new ExpressError(404,"Page not found!"))
})

app.use((err,req,res,next) => {
    let {statusCode = 500, message ="Something went Wrong"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", {message});
})

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})

