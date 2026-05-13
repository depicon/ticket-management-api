import express from 'express';
import dotenv from 'dotenv';
import ticketRoutes from './routes/ticketRoutes';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';
import { CorsOptions } from 'cors';
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:5173'];
const options: CorsOptions = {
  origin: allowedOrigins
}

// Middleware
app.use(cors(options));
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
  console.log(`🚀 Server running on http://localhost:${port}`);
});

export default app;