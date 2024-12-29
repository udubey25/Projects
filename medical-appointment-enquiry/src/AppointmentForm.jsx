import React, { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
  const [appointment, setAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    doctor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting appointment:', appointment); // Log the appointment data
    fetch('http://backend-service:5000/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data); // Log the response data
        addAppointment(data); // Update the parent component with new appointment
        setAppointment({ patientName: '', date: '', time: '', doctor: '' }); // Clear form
      })
      .catch(error => console.error('Error adding appointment:', error)); // Log any errors
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={appointment.patientName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={appointment.time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Doctor:</label>
        <input
          type="text"
          name="doctor"
          value={appointment.doctor}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
