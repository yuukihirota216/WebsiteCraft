const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// CORS and JSON middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Static file serving for development
app.use(express.static('client/dist'));
app.use('/images', express.static('images'));

// For React development, serve the client HTML
app.get('/', (req, res) => {
  // Check if client/index.html exists for React dev
  const clientIndexPath = path.join(__dirname, 'client', 'index.html');
  const fs = require('fs');
  
  if (fs.existsSync(clientIndexPath)) {
    res.sendFile(clientIndexPath);
  } else {
    // Fallback to root index.html (static site)
    const rootIndexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(rootIndexPath)) {
      res.sendFile(rootIndexPath);
    } else {
      res.status(404).send('Page not found');
    }
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`サクッと賃貸 開発サーバー起動中 - http://0.0.0.0:${port}`);
});