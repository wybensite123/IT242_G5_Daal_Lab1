import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="user-info">
      <h2>Profile Information</h2>
      
      <div className="info-group">
        <label>Full Name:</label>
        <span>{user.firstName} {user.lastName}</span>
      </div>
      
      <div className="info-group">
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      
      <div className="info-group">
        <label>User ID:</label>
        <span>{user.id}</span>
      </div>
    </div>
  );
};

export default Profile;