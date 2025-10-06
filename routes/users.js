const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

// ...existing code...

router.post("/signup", wrapAsync(async (req, res, next) => {
    try {
        console.log("Form Data Received:", req.body); // ✅ Add this line

        let { username, email, password, phoneNumber } = req.body;

        let user = new User({
            username,
            email,
            phoneNumber
        });

        let registeredUser = await User.register(user, password);
        console.log("User created:", registeredUser);

        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Homigo!");
            res.redirect("/listings");
        });
    } catch (e) {
        console.error("Error during signup:", e);
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));


// ...existing code...