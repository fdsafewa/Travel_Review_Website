import React, { useState } from 'react';
import './../SunTour/css/Profile.css';

const Profile = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [avatar, setAvatar] = useState(null); // State for uploaded avatar file
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [travelPreferences, setTravelPreferences] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  // Event handler for file input change (avatar upload)
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to save changes (not implemented in this example)
    console.log('Saving changes...');
  };

  return (
    <div className="profile-page-container"> {/* 添加了 profile-page-container 类名 */}
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Personal Details</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                {/* No NavLink needed since there's only one "page" */}
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane fade active show">
                  <div className="card-body media align-items-center">
                    <img
                      src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
                      alt=""
                      className="d-block ui-w-80"
                    />
                    <div className="media-body ml-4">
                      <label className="btn btn-outline-primary">
                        Upload new photo
                        <input
                          type="file"
                          className="account-settings-fileinput"
                          onChange={handleAvatarChange}
                        />
                      </label>&nbsp;
                      <button type="button" className="btn btn-default md-btn-flat">
                        Reset
                      </button>
                      <div className="text-light small mt-1">
                        Allowed JPG, GIF or PNG. Max size of 800K
                      </div>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="alert alert-warning mt-3">
                        Your email is not confirmed. Please check your inbox.
                        <br />
                        <a href="/resend-confirmation">Resend confirmation</a>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Old Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Old Email</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        value={oldEmail}
                        onChange={(e) => setOldEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New Email</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input
                        type="date"
                        className="form-control"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Personal Travel Preferences</label>
                      <input
                        type="text"
                        className="form-control"
                        value={travelPreferences}
                        onChange={(e) => setTravelPreferences(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Contact Information</label>
                      <input
                        type="text"
                        className="form-control"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3">
          <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
            Save changes
          </button>&nbsp;
          <button type="button" className="btn btn-default">
            Cancel
          </button>
        </div>
        <div style={{ marginBottom: '50px' }}></div> {/* Add extra space at the bottom */}
      </div>
    </div>
  );
};

export default Profile;
