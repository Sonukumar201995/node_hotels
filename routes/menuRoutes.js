import express from 'express';
const router = express.Router();

import MenuItem from '../models/menu.js';

// GET Menu Items
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('Menu data fetched');
    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST Menu Item
router.post('/', async (req, res) => {
  try {
    const newMenu = new MenuItem(req.body);
    const response = await newMenu.save();

    console.log('Menu item saved');
    res.status(201).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
