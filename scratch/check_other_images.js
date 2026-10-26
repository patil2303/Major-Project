const initData = require("../init/data.js");

async function checkOtherImages() {
  const broken = [];
  console.log(`Checking gallery otherImages for all ${initData.data.length} listings...`);
  for (let i = 0; i < initData.data.length; i++) {
    const item = initData.data[i];
    if (Array.isArray(item.otherImages)) {
      for (let j = 0; j < item.otherImages.length; j++) {
        const img = item.otherImages[j];
        if (img && img.url) {
          try {
            const res = await fetch(img.url, { method: "HEAD" });
            if (res.status >= 400) {
              broken.push({ listingIndex: i, title: item.title, imgIndex: j, url: img.url, status: res.status });
            }
          } catch (e) {
            broken.push({ listingIndex: i, title: item.title, imgIndex: j, url: img.url, error: e.message });
          }
        }
      }
    }
  }
  console.log(`Found ${broken.length} broken otherImages:`);
  console.log(JSON.stringify(broken, null, 2));
}

checkOtherImages();
