import React from 'react';
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import NavBar from '../NavBar/NavBar';


function Footer() {

  return (
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
  )
}


export default Footer
