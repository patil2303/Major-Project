const initData = require("../init/data.js");
console.log("Total listings in init/data.js:", initData.data.length);
console.log("First 5 titles:", initData.data.slice(0, 5).map(l => l.title));
