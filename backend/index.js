const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToMongoDB = require('./db/connectToMongoDB');
const User = require('./model/user.model'); // Import the User model

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

app.post('/', async (req, res) => {
  try {
    // Extract data from the request body
    const {
      firstName,
      surName,
      department,
      email,
      position,
      grade,
      mobileNo,
      justification,
      signature,
      date,
      checkedNames,
      checkedRole,
      unitHead,
      headInternal,
      HeadIt,
      ED,
      userId,
      dateCreated,
      dateLast,
      signature: signature2,
    } = req.body;

    // Validate required fields
    if (!firstName) {
      return res.status(400).json({ error: 'Please enter your First Name' });
    }
    if (!surName) {
      return res.status(400).json({ error: 'Please enter your Surname' });
    }
    if (!department) {
      return res.status(400).json({ error: 'Please enter your Department' });
    }
    if (!email) {
      return res.status(400).json({ error: 'Please enter your Email' });
    }
    if (!position) {
      return res.status(400).json({ error: 'Please enter your Position' });
    }
    if (!grade) {
      return res.status(400).json({ error: 'Please enter your Grade' });
    }
    if (!mobileNo) {
      return res.status(400).json({ error: 'Please enter your Mobile Number' });
    }
    if (!justification) {
      return res.status(400).json({ error: 'Justification is missing' });
    }
    if (!signature) {
      return res.status(400).json({ error: 'Signature is missing' });
    }
    if (!date) {
      return res.status(400).json({ error: 'Date is required' });
    }

    // Create a new user document
    const newUser = new User({
      firstName,
      surName,
      department,
      email,
      position,
      grade,
      mobileNo,
      justification,
      signature,
      date,
      checkedNames,
      checkedRole,
      unitHead,
      headInternal,
      HeadIt,
      ED,
      userId,
      dateCreated,
      dateLast,
      signature2,
    });

    // Save the document to the database
    await newUser.save();

    // Send a success response
    res.status(201).json(newUser);
  } catch (error) {
    // Handle errors
    console.error('Error creating user:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        error: error.message,
      });
    }

    // Handle other errors
    res.status(500).json({
      message: 'An error occurred while creating the user.',
      error: error.message,
    });
  }
});


app.get('/users', async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from the database
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
  });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log('Server running on PORT:', PORT);
});