import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createApp() {
  const app = express();
  const port = process.env.PORT || 5000;

  // Enable CORS
  app.use(cors());
  app.use(express.json());

  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
  });

  if (process.env.NODE_ENV === 'production') {
    // Serve static files in production
    app.use(express.static(join(__dirname, '../dist')));
    app.get('*', (req, res) => {
      res.sendFile(join(__dirname, '../dist/index.html'));
    });
  } else {
    // Development: Use Vite dev server
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
      root: join(__dirname, '../client'),
    });
    
    app.use(vite.ssrFixStacktrace);
    app.use(vite.middlewares);
  }

  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

createApp().catch(console.error);