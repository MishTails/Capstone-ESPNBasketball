import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='nav-logout' onClick={() => {
    onLogout()
    history.push('/')
  }}>Logout</button>;
};

export default LogoutButton;
