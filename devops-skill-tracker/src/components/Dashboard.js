import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Navbar from './Navbar';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract query parameters from URL
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const email = queryParams.get('email');
  const photo = queryParams.get('photo');

  const handleLogout = () => {
    // Optional: Clear user session if stored
    navigate('/');
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar onLogout={handleLogout} />

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <h1>Welcome to your Dashboard!</h1>

        {/* User Profile Section */}
        <ProfileCard name={name} email={email} photo={photo} />

        {/* Placeholder Sections */}
        <div className="dashboard-sections">
          <section>
            <h2>Feature 1</h2>
            <p>Coming soon...</p>
          </section>
          <section>
            <h2>Feature 2</h2>
            <p>Coming soon...</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
