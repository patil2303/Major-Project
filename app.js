if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user.js");
const { connectDB } = require("./config/db.js");

const listingRouter = require("./routes/listing.js");
const bookingRouter = require("./routes/booking.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingsRootRouter = require("./routes/bookingsRoot.js");
const walletRouter = require("./routes/wallets.js");

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

const secret = process.env.SECRET || "homigo_super_secret_session_key_2026";

async function startServer() {
    try {
        const mongoUri = await connectDB();

        // Create Mongo session store with the connected DB
        const store = MongoStore.create({
            mongoUrl: mongoUri,
            crypto: {
                secret: secret,
            },
            touchAfter: 24 * 3600,
        });

        store.on("error", (err) => {
            console.error("Session store error:", err);
        });

        const sessionOptions = {
            store,
            secret,
            resave: false,
            saveUninitialized: true,
            cookie: {
                expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
                maxAge: 7 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            },
        };

        app.use(session(sessionOptions));
        app.use(flash());

        // Passport auth
        app.use(passport.initialize());
        app.use(passport.session());
        passport.use(new LocalStrategy(User.authenticate()));

        passport.serializeUser(User.serializeUser());
        passport.deserializeUser(User.deserializeUser());

        // Global template variables
        app.use((req, res, next) => {
            res.locals.success = req.flash("success");
            res.locals.error = req.flash("error");
            res.locals.info = req.flash("info");
            res.locals.currUser = req.user;
            next();
        });

        // Welcome / Landing page
        app.get("/", (req, res) => {
            res.render("welcome.ejs");
        });

        app.use("/listings", listingRouter);
        app.use("/listings/:id/bookings", bookingRouter);
        app.use("/listings/:id/reviews", reviewRouter);
        app.use("/bookings", bookingsRootRouter);
        app.use("/", walletRouter);
        app.use("/", userRouter);

        // 404 handler
        app.all("*", (req, res, next) => {
            next(new ExpressError(404, "Page not found!"));
        });

        // Error handler
        app.use((err, req, res, next) => {
            let { statusCode = 500, message = "Something went Wrong" } = err;
            res.status(statusCode).render("error.ejs", { message });
        });

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`🚀 Homigo server is running at: http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Fatal startup error:", err);
        process.exit(1);
    }
}

startServer();
