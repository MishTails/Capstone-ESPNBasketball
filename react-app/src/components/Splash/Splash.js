import React from 'react';
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Splash.css';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


function Splash() {

  return (
    <div className='splash-main'>
      <NavBar/>
      <div className='splash-center'>
        <div>
          <img className='splash-logo' src={logo}></img>
        </div>
        <div className='splash-logo-subtext'>
          HOME OF FANTASY BASKETBALL
        </div>
        <NavLink to="/leagues/create">
          <button> Create a League</button>
        </NavLink>
      </div>
      <Footer/>
    </div>
  )
}


export default Splash;
