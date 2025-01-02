import React from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My App</h1>
        <button className="logout-btn" onClick={() => alert("Logout clicked!")}>
          Logout
        </button>
      </header>
      <main className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome to your Dashboard!</h2>
          <div className="profile-card">
            <img
              src={user.picture || "https://via.placeholder.com/96"}
              alt={user.name}
              className="profile-picture"
            />
            <h3>{user.given_name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="features-section">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Coming soon...</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
