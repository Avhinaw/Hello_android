import express from 'express';
import chatRoutes from './routes/chatRoute';
import { connectDb } from './config/db';
import cors from 'cors';
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
const allowedOrigins = [
    'https://helloandroid.netlify.app',
    'http://localhost:3000'
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like curl or Postman)
      if (!origin) return callback(null, true);
  
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true
  }));
app.use(express.json());
connectDb();
app.use('/api', chatRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});