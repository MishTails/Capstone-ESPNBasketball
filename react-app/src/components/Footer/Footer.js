import React from 'react';
import './Footer.css';
import github from '../../assets/gitLogo.png'
import linkedin from '../../assets/linkedinLogo.png'


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
           <a href="https://github.com/MishTails">
            <img className='git' src={github}></img>
            </a>
            <a href="https://www.linkedin.com/in/jarrod-mishima-50abb0172/">
            <img className='linkedin' src={linkedin}></img>
            </a>
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
