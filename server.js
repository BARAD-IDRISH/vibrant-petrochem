// ====================================================================
// Vibrant Petrochem FZE - A2 Hosting cPanel Node.js Entry Server (server.js)
// ====================================================================

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

// Initialize Next.js app handler
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling request:', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Vibrant Petrochem Server ready on http://${hostname}:${port}`);
  });
}).catch((err) => {
  console.error('Failed to start Vibrant Petrochem server:', err);
  process.exit(1);
});
