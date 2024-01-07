const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Importing files
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const studentListRouter = require('./routes/studentRoute');

// Connect to MongoDB
connectDB();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api/students', studentListRouter);

// Using error handler to display error in development
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app is listening on port ${PORT}`)
});