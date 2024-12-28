import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Patient Name:</strong> {appointment.patientName} | 
            <strong> Date:</strong> {appointment.date} | 
            <strong> Time:</strong> {appointment.time} | 
            <strong> Doctor:</strong> {appointment.doctor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
