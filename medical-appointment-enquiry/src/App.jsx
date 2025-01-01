import React, { useState, useEffect } from 'react';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    time: '',
    doctor: ''
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://backend-service:5000/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://backend-service:5000/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const newAppointment = await response.json();
      setAppointments([...appointments, newAppointment]);
      setFormData({
        patientName: '',
        date: '',
        time: '',
        doctor: ''
      });
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Medical Appointment App</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Doctor:</label>
          <input
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Appointment</button>
      </form>
      
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.patientName} - {appointment.date} - {appointment.time} - {appointment.doctor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
