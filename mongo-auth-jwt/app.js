import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';
import connectDB from './connectDB/index.js';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3250;

// interpret incoming requests as json
app.use(express.json());

// only allow access from certain clients:
app.use(cors({
  origin: [
    `${process.env.FRONTEND_URL}`,
    'http://localhost:3000'
  ],
  credentials: true // allow credentials (e.g. cookies to be sent)
}))

// parse any incoming cookies and make them available on req.cookies
app.use(cookieParser())

app.listen(PORT, () => {
  console.log('listening on the port', PORT);
});

routes(app);

connectDB();

mongoose.connection.once('open', () => {
  console.log('connection has been opened');
});
