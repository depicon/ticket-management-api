import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import ticketRoutes from './routes/ticketRoutes';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';
import { CorsOptions } from 'cors';
import cors from 'cors'


const app = express();
const env = process.env.NODE_ENV || 'development'
// const port = process.env.PORT || 3000;
// const allowedOrigins = ['http://localhost:5173'];
// const options: CorsOptions = {
//   origin: allowedOrigins
// }

dotenv.config({
});

const port = process.env.PORT || 3000
const origins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Autorise les requêtes sans origine (comme Postman) ou les origines dans la liste
    if (!origin || origins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Non autorisé par CORS'));
    }
  }
}));
app.use(express.json());

// Routes
app.use('/api', ticketRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port} or ${process.env.PORT} and path: ${path.resolve(`.env.${env}`)}`);
});

export default app;