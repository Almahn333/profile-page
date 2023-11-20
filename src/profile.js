import React, { useState } from 'react';
import './profile.css'; 

const UserProfile = () => {
  const initialProfileData = {
    name: 'Aayush Kumar Singh',
    email: 'anugrahtoby@gmail.com',
    age: 20,
    gender: 'Male',
    password: 'abcde',
    registerNumber: '21BCE1942',
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="profile">
      <div className="rectangle-32"></div>
      <div className="ellipse-11"></div>
      <div className="frame-38">
        <div className="aayush-kumar-singh">{profileData.name}</div>
        <div className="_21-bce-1942">{profileData.registerNumber}</div>
      </div>
      <div className="primary-button-small"onClick={isEditing ? handleSaveClick : handleEditClick}>
        <div className="edit-profile">
          {isEditing ? 'Save Profile' : 'Edit Profile'}
        </div>
      </div>
      <div className="cobalt">Cobalt.</div>
      <div className="rectangle-75"></div>
      <div className="my-profile">My Profile</div>
      <div className="personal-information">Personal Information</div>
      <div className="frame-92">
        <div className="name">Name:</div>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        ) : (
          <div className="aayush-kumar-singh2">{profileData.name}</div>
        )}
      </div>
      <div className="frame-93">
        <div className="e-mail">E-mail:</div>
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        ) : (
          <div className="anugrah-toby-gmail-com">{profileData.email}</div>
        )}
      </div>
      <div className="frame-94">
        <div className="age">Age:</div>
        {isEditing ? (
          <input
            type="number"
            name="age"
            value={profileData.age}
            onChange={handleChange}
          />
        ) : (
          <div className="_20">{profileData.age}</div>
        )}
      </div>
      <div className="frame-95">
        <div className="gender">Gender:</div>
        {isEditing ? (
          <input
            type="text"
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
          />
        ) : (
          <div className="male">{profileData.gender}</div>
        )}
      </div>
      <div className="frame-96">
  <div className="password">Password:</div>
  {isEditing ? (
    <div className="password-input-container">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={profileData.password}
        onChange={handleChange}
      />
      <button
        type="button"
        className="show-password-button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
    </div>
  ) : (
    <div className="masked-password">{'*'.repeat(profileData.password.length)}</div>
  )}
</div>


    </div>
  );
};

export default UserProfile;
