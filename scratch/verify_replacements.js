const candidates = [
  "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
];

async function verify() {
  for (const url of candidates) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      console.log(`${url.substring(0, 50)}... -> HTTP ${res.status}`);
    } catch (e) {
      console.log(`${url.substring(0, 50)}... -> ERROR: ${e.message}`);
    }
  }
}

verify();
