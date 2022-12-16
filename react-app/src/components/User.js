import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import './User.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const userInfo = useSelector(state => state.session.user)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className='user-page'>
      <NavBar/>
      <div className='user-profile'>
        <div className='user-profile-title'>
          User Profile
        </div>
        {/* <div className='user-profile-smaller-title'>
          Profile Picture
        </div> */}
        <div className='user-profile-picture-holder'>
          <img></img>
        </div>
        <div className='user-profile-smaller-title'>
          User Information
        </div>
        <div className='user-profile-information-holder'>
          <div className='user-profile-label'>
            Username
          </div>
          <div className='user-profile-information'>
            {userInfo.username}
          </div>
        </div>
        <div className='user-profile-information-holder'>
          <div className='user-profile-label'>
            Email
          </div>
          <div className='user-profile-information' id='bottom-info'>
            {userInfo.email}
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default User;
