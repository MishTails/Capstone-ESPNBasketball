import React from 'react';
import { useState, useDispatch } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CreateLeague.css';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import NavBar from '../NavBar/NavBar';

function CreateLeague() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  // const dispatch = useDispatch();

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {

  }
  return (
    <div>
      <NavBar/>
      <form className='create-league-form-full' onSubmit={onSubmit}>
        <div>
          Create League
        </div>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='login-form-email'>
          <label className='login-form-label' htmlFor='email'>Email</label>
          <input
            className='login-form-input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login-form-password'>
          <label className='login-form-label' htmlFor='password'>Password</label>
          <input
          className='login-form-input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='login-form-submit-holder'>
          <button className='login-form-submit' type='submit'>LOG IN</button>
        </div>
      </form>
    </div>

  )

}


export default CreateLeague
