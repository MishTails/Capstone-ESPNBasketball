import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
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
        <div className='user-profile-smaller-title'>
          Profile Picture
        </div>
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
      <div className='splash-footer'>
        <div className='splash-footer-company'>
          <div className='splash-footer-bold'>
            Company
          </div>
          <div className='splash-footer-light'>
            App Academy
          </div>
        </div>
        <div className='splash-footer-developer'>
          <div className='splash-footer-bold'>
            Developer
          </div>
          <div className='splash-footer-light'>
            Jarrod Mishima
          </div>
        </div>
        <div className='splash-footer-features'>
          <div className='splash-footer-bold'>
            Features
          </div>
          <div className='splash-footer-light'>
            Fantasy Basketball
          </div>
        </div>
        <div className='splash-footer-other'>
          <div className='splash-footer-language'>
            <div className='splash-footer-bold'>
              Language
            </div>
            <div className='splash-footer-light'>
              English
           </div>
          </div>
          <div className='splash-footer-country'>
            <div className='splash-footer-bold'>
              Country
            </div>
            <div className='splash-footer-light'>
              United States
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default User;
