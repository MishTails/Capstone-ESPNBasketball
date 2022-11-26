
import {React, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginForm from '../auth/LoginForm';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import "./NavBar.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllLeagues } from '../../store/league';

const NavBar = () => {
  const dispatch = useDispatch()
  const [loginOpen, setLoginOpen] = useState(false)
  const [leagueOpen, setLeagueOpen] = useState(false)
  const user = useSelector((state) => state?.session?.user?.id)

  useEffect(
		() => {
      dispatch(thunkGetAllLeagues(user))
		},
		[dispatch],
	);
  return (
      <div className='nav-bar'>
        <div className='nav-bar-left'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className='nav-logo' src={logo}></img>
          </NavLink>
          <div>
            <button className='nav-my-leagues' onClick={() => leagueOpen == false ? setLeagueOpen(true): setLeagueOpen(false)}>
               My Leagues
            </button>
            {leagueOpen && <div className='my-leagues-bubble'>
                <div className='my-leagues-heading'>
                  <div className='my-leagues-title'>
                    NBA Commissioner
                  </div>
                  <div>
                    <i class="fas fa-basketball-ball"></i>
                  </div>
                </div>
                <div className='my-leagues-card'>
                  <div className='my-leagues-logo'>
                    Logo
                  </div>
                  <div className='my-leagues-card-text'>
                    <div className='my-leagues-card-team'>
                      Team Name
                    </div>
                    <div className='my-leagues-card-league'>
                      League Name
                    </div>
                  </div>
                </div>

              </div>}
          </div>
          <div>
              <NavLink to={'/leagues'}>
                <button className='nav-leagues'>Fantasy Leagues</button>
              </NavLink>
          </div>
          <div>
              <NavLink to={'/players'}>
                <button className='nav-players'>Players</button>
              </NavLink>
          </div>
        </div>
        <div className='nav-bar-right'>
          {user &&<div>
            <NavLink to={`/users/${user}`} exact={true} activeClassName='active'>
              <button className='nav-profile'> Profile</button>
            </NavLink>
          </div>}
          {!user && <div className='nav-bar-login-holder'>

             <button className='nav-login' onClick={() => loginOpen==false? setLoginOpen(true): setLoginOpen(false)} > LOGIN </button>
            {loginOpen && <div className='nav-bar-login-form-bubble'>
              <LoginForm/>
            </div>}
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
