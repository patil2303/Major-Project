const initData = require("../init/data.js");

async function checkAll() {
  const broken = [];
  console.log(`Checking main images for all ${initData.data.length} listings...`);
  for (let i = 0; i < initData.data.length; i++) {
    const item = initData.data[i];
    try {
      const res = await fetch(item.image.url, { method: "HEAD" });
      if (res.status >= 400) {
        broken.push({ index: i, title: item.title, url: item.image.url, status: res.status });
      }
    } catch (e) {
      broken.push({ index: i, title: item.title, url: item.image.url, error: e.message });
    }
  }
  console.log(`Found ${broken.length} broken main images:`);
  console.log(JSON.stringify(broken, null, 2));
}

checkAll();
