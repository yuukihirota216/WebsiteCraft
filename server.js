const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.txt': 'text/plain'
};

// Create the server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Default to index.html for root requests
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  // Build the file path
  const filePath = path.join(__dirname, pathname);
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found - serve index.html for SPA routing
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else {
      // File exists - serve it
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
        
        // Set cache control headers for static assets
        if (ext !== '.html') {
          res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
        } else {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
          res.setHeader('Expires', '0');
        }
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    }
  });
});

// Start the server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`サクッと賃貸 静的サイト起動中 - http://0.0.0.0:${PORT}`);
});