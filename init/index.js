const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const Mongo_Url = "mongodb+srv://shreyasspatil23:ZZ8PSyggWpjOXD0m@cluster0.dbplhay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

main()
.then(() => {
    console.log("connected to database");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(Mongo_Url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "68028a5d369425c9195e1d0c" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
