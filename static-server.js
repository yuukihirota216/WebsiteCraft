import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, 'dist/public')));

// Handle client-side routing - serve index.html for all non-static routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 静的サイトが http://localhost:${PORT} で配信中`);
  console.log(`📁 配信ディレクトリ: ${path.join(__dirname, 'dist/public')}`);
});