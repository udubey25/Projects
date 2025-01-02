import React from 'react';

const ProfileCard = ({ name, email, photo }) => {
  return (
    <div className="profile-card">
      <img src={photo} alt="User Avatar" className="profile-avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default ProfileCard;
