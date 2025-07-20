import express from 'express';
import chatRoutes from './routes/chatRoute';
import { connectDb } from './config/db';
import cors from 'cors';
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(cors ({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
connectDb();
app.use('/api', chatRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});