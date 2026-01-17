import express from 'express';
const app = express();

import db from './db.js';

// body-parser (middle ware)...
app.use(express.json());


// middleware
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`
  );
  next();
};

app.use(logRequest);

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to my hotel....How i can help you');
});

// Import Menu Router
import menuRoutes from './routes/menuRoutes.js';
app.use('/menu', menuRoutes);

// Import Person Router
import personRoutes from './routes/personRoutes.js';
app.use('/person', personRoutes);

// Server Start
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


// comment added for testing purpose