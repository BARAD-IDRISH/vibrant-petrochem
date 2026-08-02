const fs = require('fs');
const path = require('path');

function replaceInDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceInDir(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.txt')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/_next/')) {
        content = content.replace(/\/_next\//g, '/assets/');
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

const outDir = path.join(__dirname, 'out');
const nextDir = path.join(outDir, '_next');
const assetsDir = path.join(outDir, 'assets');

if (fs.existsSync(nextDir)) {
  if (fs.existsSync(assetsDir)) {
    fs.rmSync(assetsDir, { recursive: true, force: true });
  }
  fs.renameSync(nextDir, assetsDir);
  console.log('Renamed out/_next to out/assets successfully.');
}

replaceInDir(outDir);
console.log('Replaced all /_next/ links with /assets/ across exported HTML and JS files.');
