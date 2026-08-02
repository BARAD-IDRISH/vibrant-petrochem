const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

// Ensure dual folder index.html for all routes so /products/ resolves to /products/index.html
function createIndexFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && file !== '_next' && file !== 'assets') {
      const htmlSibling = path.join(dirPath, `${file}.html`);
      const targetIndex = path.join(fullPath, 'index.html');
      if (fs.existsSync(htmlSibling) && !fs.existsSync(targetIndex)) {
        fs.copyFileSync(htmlSibling, targetIndex);
        console.log(`Created dual fallback: ${targetIndex}`);
      }
      createIndexFiles(fullPath);
    }
  }
}

if (fs.existsSync(outDir)) {
  createIndexFiles(outDir);
  console.log('Postbuild completed cleanly with standard _next directory preserved.');
}
