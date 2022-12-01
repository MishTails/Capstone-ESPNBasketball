import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './UpdateLeague.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import {thunkUpdateLeague } from '../../store/league';
import { thunkGetOneLeague } from '../../store/league';

function UpdateLeague() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state?.leagues?.oneLeague)
  const [errors, setErrors] = useState([]);
  const [leagueName, setLeagueName] = useState(league?.league_name)
  const [leagueDesc, setLeagueDesc] = useState(league?.description)
  const [leagueSize, setLeagueSize] = useState(league?.size)
  const [leagueDraftDate, setLeagueDraftDate] = useState(league?.draft_date)
  const [leagueDraftTimer, setLeagueDraftTimer] = useState(league?.draft_timer)
  const leagueId = useParams()

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
      id: parseInt(leagueId.leagueId),
      league_name: leagueName,
      commissioner_id: parseInt(user),
      size: leagueSize,
      description: leagueDesc,
      draft_date: leagueDraftDate,
      draft_timer: leagueDraftTimer
    }
    const updatedLeague = await dispatch(thunkUpdateLeague(leagueData))
    if (updatedLeague.errors) {
      setErrors(updatedLeague.errors)
    } else {
      history.push(`/leagues/${parseInt(leagueId.leagueId)}`)
    }

  }

  useEffect(() => {
    dispatch(thunkGetOneLeague(leagueId.leagueId))
  },[dispatch])

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
        {errors.league_name && <div>{errors.league_name}</div>}
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
          {errors.size && <div>{errors.size}</div>}
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
          {errors.draft_date && <div>{errors.draft_date}</div>}
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
          {errors.draft_timer && <div>{errors.draft_timer}</div>}
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
          {errors.description && <div>{errors.description}</div>}
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
