import React, { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    time: '',
    doctor: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(formData);
    setFormData({
      patientName: '',
      date: '',
      time: '',
      doctor: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Patient Name:
        <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Doctor:
        <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
