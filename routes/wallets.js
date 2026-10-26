const express = require("express");
const router = express.Router();
const wallets = require("../controllers/wallets");

const { isLoggedIn } = require("../Middleware");

router.get("/wallet", isLoggedIn, wallets.getWallet);
router.post("/wallet/withdraw", isLoggedIn, wallets.withdraw);

module.exports = router;
