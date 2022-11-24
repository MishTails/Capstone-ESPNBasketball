
import {React, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginForm from '../auth/LoginForm';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import "./NavBar.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch()
  const [loginOpen, setLoginOpen] = useState(false)
  const user = useSelector((state) => state?.session?.user?.id)

  useEffect(
		() => {
		},
		[dispatch, loginOpen],
	);
  return (
      <div className='nav-bar'>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className='nav-logo' src={logo}></img>
          </NavLink>
        </div>
        <div className='nav-bar-tools'>
          {!user && <div className='nav-bar-login-holder'>
          {/* onClick={loginOpen==false? setLoginOpen(true): setLoginOpen(false)} */}
             <button className='nav-login' > LOGIN </button>
            <div className='nav-bar-login-form-bubble'>
              <LoginForm/>
            </div>
          </div>}
          {!user && <div>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              <button className='nav-signup'> SIGN UP </button>
            </NavLink>
          </div>}
          {user && <div>
            <LogoutButton />
          </div>}
        </div>


      </div>

  );
}

export default NavBar;
