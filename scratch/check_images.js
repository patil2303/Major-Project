const initData = require("../init/data.js");

async function checkImages() {
  console.log("Checking first 10 listings images...");
  for (let i = 0; i < 10; i++) {
    const item = initData.data[i];
    try {
      const res = await fetch(item.image.url, { method: "HEAD" });
      console.log(`[${i+1}] ${item.title}: HTTP ${res.status}`);
    } catch (e) {
      console.log(`[${i+1}] ${item.title}: ERROR ${e.message}`);
    }
  }
}

checkImages();
