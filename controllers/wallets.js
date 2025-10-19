const Wallet = require("../models/wallet");
const wrapAsync = require("../utils/wrapAsync");

module.exports.getWallet = wrapAsync(async (req, res) => {
  if (!req.user) {
    req.flash("error", "You must be signed in to view your wallet.");
    return res.redirect("/login");
  }

  const wallet = await Wallet.findOne({ owner: req.user._id });
  res.render("users/wallet", { wallet });
});

// Placeholder withdraw - create debit transaction in future
module.exports.withdraw = wrapAsync(async (req, res) => {
  req.flash("info", "Withdraw feature coming soon.");
  res.redirect("/wallet");
});
