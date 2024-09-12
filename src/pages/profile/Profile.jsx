import React, { useState } from 'react'
import '../steam/steam.css'
import '../../components/content/content.css'
import './profile.css'
import ContentHeader from '../../components/contentHeader/ContentHeader'



const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Dahami Nethsarani ',
        email: 'dahami@example.com',
        id: 'iot1234',
        position: 'Software Enginner - Intern',
        contact: '(+94)76 1234567',
        // Add more fields as needed
    });

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSave = () => {
        // Add save logic here (e.g., API call to update profile)
        setEditMode(false);
    };

    return (
        <div className='content'>
            <ContentHeader />
            <div className='dashboard--content'>
                <div className='steamtab'>
                    <div className='steamtab--title'>Profile</div>

                    <div className='profile-section'>
                        <div className='profile-info'>
                            <h5>Name:</h5>
                            {editMode ? (
                                <input
                                    type='text'
                                    name='name'
                                    value={profileData.name}
                                    onChange={handleInputChange}
                                    placeholder="name@example.com"
                                />
                            ) : (
                                <p>{profileData.name}</p>
                            )}
                        </div>

                        <div className='profile-info'>
                            <h5>ID:</h5>
                            {editMode ? (
                                <input
                                    type='id'
                                    name='id'
                                    value={profileData.id}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <p>{profileData.id}</p>
                            )}
                            
                        </div>

                        <div className='profile-info'>
                            <h5>Email:</h5>
                            {editMode ? (
                                <input
                                    type='email'
                                    name='email'
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <p>{profileData.email}</p>
                            )}
                            
                        </div>

                        <div className='profile-info'>
                            <h5>Contact No:</h5>
                            {editMode ? (
                                <input
                                    type='text'
                                    name='contact'
                                    value={profileData.contact}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <p>{profileData.contact}</p>
                            )}
                            
                        </div>

                        <div className='profile-info'>
                            <h5>Position:</h5>
                            {editMode ? (
                                <textarea
                                    name='position'
                                    value={profileData.position}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <p>{profileData.position}</p>
                            )}
                        </div>

                        {editMode ? (
                            <button className='btn btn-primary' onClick={handleSave}>
                                Save
                            </button>
                        ) : (
                            <button className='btn btn-secondary' onClick={handleEditToggle}>
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile
