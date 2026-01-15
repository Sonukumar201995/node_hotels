import express from 'express';
const router = express.Router();

import Person from '../models/person.js';

// POST Person
router.post('/', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const response = await newPerson.save();

    console.log('Data saved');
    res.status(201).json(response);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET All Persons
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('Data fetched');
    res.status(200).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET Person by workType (Parameterized API)
router.get('/work/:workType', async (req, res) => {
  try {
    const workType = req.params.workType.toLowerCase();
    const allowedWorkTypes = ['chef', 'manager', 'waiter'];

    if (!allowedWorkTypes.includes(workType)) {
      return res.status(400).json({ error: 'Invalid work type' });
    }

    const response = await Person.find({ work: workType });
    console.log('Response fetched');
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// UPDATE Person by ID
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedData,
      {
        new: true,        // return updated document
        runValidators: true // apply schema validation
      }
    );

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log('Person updated');
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE Person by ID
router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log('Person deleted');
    res.status(200).json({
      message: 'Person deleted successfully',
      deletedPerson: response
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;
