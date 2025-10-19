const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

// simple auth guard - replace with your app's middleware if present
function ensureLoggedIn(req, res, next) {
  if (req.user) return next();
  req.flash("error", "You must be signed in to access that page.");
  return res.redirect("/login");
}

router.get("/profile", ensureLoggedIn, users.getProfile);

module.exports = router;