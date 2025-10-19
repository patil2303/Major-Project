const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  type: { type: String, enum: ["credit", "debit"], required: true },
  amount: { type: Number, required: true, min: 0 },
  description: String,
  date: { type: Date, default: Date.now }
});

const WalletSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  coins: { type: Number, default: 0 },
  transactions: [TransactionSchema]
}, { timestamps: true });

module.exports = mongoose.model("Wallet", WalletSchema);
