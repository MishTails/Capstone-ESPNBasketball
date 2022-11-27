import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './UpdateLeague.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import {thunkUpdateLeague } from '../../store/league';

function UpdateLeague() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [leagueName, setLeagueName] = useState('')
  const [leagueDesc, setLeagueDesc] = useState('')
  const [leagueSize, setLeagueSize] = useState('8')
  const [leagueDraftDate, setLeagueDraftDate] = useState('')
  const [leagueDraftTimer, setLeagueDraftTimer] = useState(30)

  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state.leagues.allLeagues)

  const updateLeagueName = (e) => {
    setLeagueName(e.target.value);
  };


  const updateLeagueDesc = (e) => {
    setLeagueDesc(e.target.value);
  };

  const updateLeagueSize = (e) => {
    setLeagueSize(e.target.value);
  };

  const updateLeagueDraftDate = (e) => {
    setLeagueDraftDate(e.target.value);
  };

  const updateLeagueDraftTimer = (e) => {
    setLeagueDraftTimer(e.target.value);
  };



  const onSubmit = async (e) => {
    e.preventDefault()
    let leagueData = {
      league_name: leagueName,
      commissioner_id: parseInt(user),
      size: leagueSize,
      description: leagueDesc,
      draft_date: leagueDraftDate,
      draft_timer: leagueDraftTimer
    }
    console.log("PIZZA")
    await dispatch(thunkUpdateLeague(leagueData))
    history.push('/leagues')
  }
  return (
    <div>
      <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <NavBar/>
      <form className='update-league-form-full' onSubmit={onSubmit}>
        <div className='update-league-heading'>
          Edit League
        </div>

        <div className='update-league-form-instructions-bubble'>
          <div className='update-league-form-lightbulb'>
            <i class="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='update-league-form-instructions'>
            Change the settings of your League!
          </div>
        </div>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='update-league-form-label-input'>
          <div className="update-league-form-league-name">
            <label className='update-league-form-label' htmlFor='email'>League Name</label>
              <input
                className='update-league-form-input'
                name='leagueName'
                type='text'
                placeholder='League Name'
                value={leagueName}
                onChange={updateLeagueName}
              />
          </div>
          <div className='update-league-form-league-desc'>
          <label className='update-league-form-label' htmlFor='email'>League Size</label>
              <input
                className='update-league-form-input'
                name='leagueSize'
                type='number'
                placeholder='League Size'
                value={leagueSize}
                onChange={updateLeagueSize}
              />
          </div>
          <div className='update-league-form-league-desc'>
          <label className='update-league-form-label' htmlFor='email'>League Draft Date</label>
              <input
                className='update-league-form-input'
                name='leagueDraftDate'
                type='date'
                value={leagueDraftDate}
                onChange={updateLeagueDraftDate}
              />
          </div>
          <div className='update-league-form-league-desc'>
          <label className='update-league-form-label' htmlFor='email'>League Draft Timer (Seconds)</label>
              <input
                className='update-league-form-input'
                name='leagueDesc'
                type='number'
                placeholder='League Description'
                value={leagueDraftTimer}
                onChange={updateLeagueDraftTimer}
              />
          </div>
          <div className='update-league-form-league-desc'>
          <label className='update-league-form-label' htmlFor='email'>League Description</label>
              <input
                className='update-league-form-input'
                name='leagueDesc'
                type='textbox'
                placeholder='League Description'
                value={leagueDesc}
                onChange={updateLeagueDesc}
              />
          </div>
        </div>
        <div className='update-league-form-submit-holder'>
          <button className='update-league-form-submit' type='submit'>SUBMIT</button>
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default UpdateLeague
