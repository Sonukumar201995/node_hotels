import express from 'express';
const app = express();

import passport from './auth.js';
import db from './db.js'; // your MongoDB connection

app.use(express.json());

// Initialize Passport
app.use(passport.initialize());

// Protected home route
app.get('/', passport.authenticate('local', { session: false }), (req, res) => {
  res.send('Welcome to my hotel....How I can help you');
});

// Routers
import menuRoutes from './routes/menuRoutes.js';
app.use('/menu', menuRoutes);

import personRoutes from './routes/personRoutes.js';
app.use('/person', personRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
