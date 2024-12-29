const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (replace with your MongoDB URI)
const mongoURI = 'mongodb://mongo:27017/medical-appointment-app';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define schema and model
const appointmentSchema = new mongoose.Schema({
  patientName: String,
  date: String,
  time: String,
  doctor: String
});
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Routes
app.get('/appointments', async (req, res) => {
  try {
    const appointment = await Appointment.find();
    res.json(appointment);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/appointment', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).send(newAppointment);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
