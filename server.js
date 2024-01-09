import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import 'dotenv/config';
import cors from 'cors';

// Importing files
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';
import studentListRouter from './routes/studentRoute.js';


// Connect to MongoDB
connectDB();

// Enable all CORS request
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Using the routes
app.use('/api/students', studentListRouter);

// Using error handler to display error in development
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app is listening on port ${PORT}`)
});