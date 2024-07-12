import React, {useEffect, useState} from 'react';
import './../SunTour/css/Profile.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showBaseInfo, setShowBaseInfo] = useState(true);
  
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3001/getUser', {params: {userId: user && user.user_id}});
        console.log(result, '--------');
        if (result.data.message === "Success") {
          localStorage.removeItem('user')
          localStorage.setItem('user', JSON.stringify(result.data.data));
          setUserInfo(result.data.data)
        } else {
          alert("Non Existent!")
          navigate('/');
          window.location.reload();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  const [avatar, setAvatar] = useState(null); // State for uploaded avatar file
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
  
  const updateUserInfo = () => {
    setShowBaseInfo(false)
  }
  
  const saveUserInfo = async () => {
    const result = await axios.post('http://localhost:3001/updateUser', {userInfo})
    if (result.data.message === "Success") {
      if (userInfo.newEmail || userInfo.newPassword) {
        userInfo.newEmail && setShowEmail(false)
        userInfo.newPassword && setShowPassword(false)
        alert("Please login again with your new email and password")
        localStorage.removeItem('user')
        navigate('/login');
      } else {
        console.log(result.data.data, '----ssss-----')
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(result.data.data));
        setUserInfo(result.data.data)
      }
      setShowBaseInfo(true)
    } else {
      alert(result.data)
    }
  }
  
  const cancelUserInfo = () => {
    setShowBaseInfo(true)
  }
  
  const goBack = () => {
    window.history.back()
  }
  return (
    <div className="profile-page-container"> {/* 添加了 profile-page-container 类名 */}
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Personal Details</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            {/*<div className="col-md-3 pt-0">*/}
            {/*  <div className="list-group list-group-flush account-settings-links">*/}
            {/*    /!* No NavLink needed since there's only one "page" *!/*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="col-md-6 m-auto">
              <div className="tab-content">
                <div className="tab-pane fade active show">
                  <div className="card-body media align-items-center">
                    <img
                      src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
                      alt=""
                      className="d-block ui-w-80"
                    />
                    <div className="media-body ml-4">
                      {/*<label className="btn btn-outline-primary">*/}
                      {/*Upload new photo*/}
                      {/*<input*/}
                      {/*  type="file"*/}
                      {/*  className="account-settings-fileinput"*/}
                      {/*  onChange={handleAvatarChange}*/}
                      {/*/>*/}
                      {/*</label>&nbsp;*/}
                      {showBaseInfo ? (
                        <button type="button" className="btn btn-outline-info" onClick={updateUserInfo}>
                          update
                        </button>
                      
                      ) : (
                        <div>
                          <button type="button" className="btn btn-outline-info mr-2" onClick={saveUserInfo}>
                            save
                          </button>
                          {!showPassword ? (
                            <button type="button" className="btn btn-outline-info mr-2"
                                    onClick={() => setShowPassword(true)}>
                              reset password
                            </button>
                          ): (
                            <button type="button" className="btn btn-outline-info mr-2"
                                    onClick={() => setShowPassword(false)}>
                              cancel reset password
                            </button>
                          )}
                          
                          {!showEmail ? (
                            <button type="button" className="btn btn-outline-info mr-2"
                                    onClick={() => setShowEmail(true)}>
                              reset email
                            </button>
                          ) : (
                            <button type="button" className="btn btn-outline-info mr-2"
                                    onClick={() => setShowEmail(false)}>
                              cancel reset email
                            </button>
                          )}
                   
                          <button type="button" className="btn btn-outline-info mr-2" onClick={cancelUserInfo}>
                            cancel
                          </button>
                        </div>
                      )}
                      {/*<div className="text-light small mt-1">*/}
                      {/*  Allowed JPG, GIF or PNG. Max size of 800K*/}
                      {/*</div>*/}
                    </div>
                  </div>
                  <hr className="border-light m-0"/>
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled={showBaseInfo}
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        disabled={true}
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      />
                    </div>
                    {showPassword && (
                      <div>
                        <div className="form-group">
                          <label className="form-label">Old Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={userInfo.oldPassword}
                            onChange={(e) => setUserInfo({...userInfo, oldPassword: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={userInfo.newPassword}
                            onChange={(e) => setUserInfo({...userInfo, newPassword: e.target.value})}
                          />
                        </div>
                      </div>
                    )}
                    {showEmail && (
                      <div>
                        <div className="form-group">
                          <label className="form-label">Old Email</label>
                          <input
                            type="text"
                            className="form-control mb-1"
                            value={userInfo.oldEmail}
                            onChange={(e) => setUserInfo({...userInfo, oldEmail: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">New Email</label>
                          <input
                            type="text"
                            className="form-control mb-1"
                            value={userInfo.newEmail}
                            onChange={(e) => setUserInfo({...userInfo, newEmail: e.target.value})}
                          />
                        </div>
                      </div>
                    )}
                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input
                        type="date"
                        className="form-control"
                        disabled={showBaseInfo}
                        value={userInfo.birthday && userInfo.birthday.substring(0, 10)}
                        onChange={(e) => setUserInfo({...userInfo, birthday: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled={showBaseInfo}
                        value={userInfo.country}
                        onChange={(e) => setUserInfo({...userInfo, country: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        disabled={showBaseInfo}
                        value={userInfo.bio}
                        onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Personal Travel Preferences</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled={showBaseInfo}
                        value={userInfo.travelPreferences}
                        onChange={(e) => setUserInfo({...userInfo, travelPreferences: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Contact Information</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled={showBaseInfo}
                        value={userInfo.contactInfo}
                        onChange={(e) => setUserInfo({...userInfo, contactInfo: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-2">
              <button type="button" className="btn btn-outline-info" onClick={goBack}>
                Back
              </button>
            </div>
          </div>
        </div>
        {/*<div className="text-right mt-3">*/}
        {/*  <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>*/}
        {/*    Save changes*/}
        {/*  </button>*/}
        {/*  &nbsp;*/}
        {/*  <button type="button" className="btn btn-default">*/}
        {/*    Cancel*/}
        {/*  </button>*/}
        {/*</div>*/}
        <div style={{marginBottom: '50px'}}></div>
        {/* Add extra space at the bottom */}
      </div>
    </div>
  );
};

export default Profile;
