const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const nextDir = path.join(outDir, '_next');
const assetsDir = path.join(outDir, 'assets');

// 1. Rename _next to assets for folder structure
if (fs.existsSync(nextDir)) {
  if (fs.existsSync(assetsDir)) {
    // If out/assets exists, move out/_next contents inside out/assets
    const nextSub = fs.readdirSync(nextDir);
    for (const item of nextSub) {
      const src = path.join(nextDir, item);
      const dest = path.join(assetsDir, item);
      fs.cpSync(src, dest, { recursive: true });
    }
    fs.rmSync(nextDir, { recursive: true, force: true });
  } else {
    fs.renameSync(nextDir, assetsDir);
  }
  console.log('Renamed out/_next to out/assets successfully.');
}

// 2. Find all generated CSS files and merge into root main.css
let combinedCSS = '';
const cssDir = path.join(assetsDir, 'static', 'css');
if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
  for (const file of cssFiles) {
    combinedCSS += fs.readFileSync(path.join(cssDir, file), 'utf8') + '\n';
  }
}

const rootCSSPath = path.join(outDir, 'main.css');
fs.writeFileSync(rootCSSPath, combinedCSS, 'utf8');
console.log('Created root main.css successfully (Size:', combinedCSS.length, 'bytes).');

// 3. Process all HTML, JS, JSON files: replace /assets/_next/ and /_next/ with /assets/
function processDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/\/assets\/_next\//g, '/assets/').replace(/\/_next\//g, '/assets/');
      if (!content.includes('href="/main.css"')) {
        content = content.replace('</head>', '<link rel="stylesheet" href="/main.css" /></head>');
      }
      fs.writeFileSync(fullPath, content, 'utf8');
    } else if (file.endsWith('.js') || file.endsWith('.json')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/_next/') || content.includes('/assets/_next/')) {
        content = content.replace(/\/assets\/_next\//g, '/assets/').replace(/\/_next\//g, '/assets/');
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir(outDir);
console.log('Processed all HTML, JS, and JSON files to fix asset chunk links.');

// 4. Ensure dual folder index.html for all routes so /products/ never throws 403
function createIndexFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && file !== 'assets' && file !== '_next') {
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

createIndexFiles(outDir);
console.log('Dual index.html generation completed.');
