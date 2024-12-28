import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Medical Appointment App</h1>
      </header>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default App;
