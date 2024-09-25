const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const services = [
  {
    id: 1,
    name: "Facial Treatment",
    description: "Rejuvenating facial for all skin types",
    price: 100,
  },
  {
    id: 2,
    name: "Botox",
    description: "Reduce fine lines and wrinkles",
    price: 300,
  },
  {
    id: 3,
    name: "Laser Hair Removal",
    description: "Permanent hair reduction",
    price: 200,
  },
];
app.post("/api/bookings", (req, res) => {
  const { service, date, time } = req.body;
  // Here you would typically save this to a database
  console.log("New booking:", { service, date, time });
  res.json({
    message: "Booking received",
    bookingDetails: { service, date, time },
  });
});

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Create a schema for messages
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const cors = require('cors');
app.use(cors());
const Message = mongoose.model('Message', messageSchema);

// API endpoint to receive messages
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });

  try {
    await newMessage.save();
    res.status(200).json({ message: 'Message received successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error });
  }
});
app.get("/api/services", (req, res) => {
  res.json(services);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
