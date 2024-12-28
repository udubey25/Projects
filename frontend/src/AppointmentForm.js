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
    addAppointment(appointment);
    setAppointment({ patientName: '', date: '', time: '', doctor: '' });
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
