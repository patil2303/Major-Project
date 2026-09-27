const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../init/data.js');
let content = fs.readFileSync(filePath, 'utf8');

const target = 'url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80"';
const replacement = 'url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"';

const count = content.split(target).length - 1;
console.log(`Found ${count} occurrences of target`);
content = content.replaceAll(target, replacement);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced all occurrences!');
