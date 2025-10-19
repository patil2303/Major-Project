const express = require("express");
const router = express.Router();
const wallets = require("../controllers/wallets");

// Simple ensureLoggedIn; replace with your app's auth middleware if available
function ensureLoggedIn(req, res, next) {
  if (req.user) return next();
  req.flash("error", "You must be signed in to access that page.");
  return res.redirect("/login");
}

router.get("/wallet", ensureLoggedIn, wallets.getWallet);
router.post("/wallet/withdraw", ensureLoggedIn, wallets.withdraw); // placeholder

module.exports = router;
