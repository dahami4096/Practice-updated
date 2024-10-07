import React, { useState } from 'react';
import profileImage from '../../assets/Profile.jpg'; // Update the path to the actual image file
import './mypage.css'
import { PiEye, PiEyeClosed } from "react-icons/pi";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Dahami",
    lastName: "Nethsarani",
    position: "Control Engineer",
    username: "dahami_iot",
    password: "iot1234#",
    profileImage: profileImage
  });

  const [showPassword, setShowPassword] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEdit = () => {
    if (isEditing && newProfileImage) {
      setProfileData({ ...profileData, profileImage: newProfileImage });
      setNewProfileImage(null); // Reset the temporary image once saved
    }

    setIsEditing(!isEditing);
  };

  return (
    <div className='profile-wrapper'>
      <div className="profile-container">
        <div className="profile-left">
          <img
            src={newProfileImage || profileData.profileImage}
            alt="Profile"
            className="profile-image"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
          )}
          <h2>{profileData.firstName}'s Profile</h2>
        </div>
        <div className="profile-right">
          <div className="profile-details">
            <div className="field-group">
              <div className="profile-field">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="profile-field">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="profile-field">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={profileData.position}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="profile-field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={profileData.username}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="profile-field ">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={profileData.password}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <button className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? <PiEyeClosed /> : <PiEye />}
              </button>
            </div>
          </div>
          <button className="edit-button" onClick={handleEdit}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <a href="/" className="dashboard-link">Dashboard</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;