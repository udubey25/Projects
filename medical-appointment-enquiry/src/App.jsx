import React, { useState, useEffect } from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentsList from './AppointmentList';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5000/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const addAppointment = async (appointment) => {
    try {
      const response = await fetch('http://localhost:5000/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointment),
      });
      const newAppointment = await response.json();
      setAppointments([...appointments, newAppointment]);
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <div>
      <h1>Medical Appointment App</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentsList appointments={appointments} />
    </div>
  );
};

export default App;
