import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CreateLeague.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkPostLeague } from '../../store/league';

function CreateLeague() {
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
  // const dispatch = useDispatch();

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
    const newLeague = await dispatch(thunkPostLeague(leagueData))
    console.log(newLeague.errors, "NEWLEAGUE")
    if(newLeague.errors) {
      setErrors(newLeague.errors)
    } else {
      history.push('/leagues')
    }
  }
  return (
    <div>
      <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <NavBar/>
      <form className='create-league-form-full' onSubmit={onSubmit}>
        <div className='create-league-heading'>
          Create League
        </div>
        {/* {errors &&<div className='create-league-form-instructions-bubble'>
          <div className='create-league-form-lightbulb'>
            <i class="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='create-league-form-instructions'>
            Fill out this form for simple and easy league creation!
          </div>
        </div>} */}
        <div>
        </div>
        {errors.league_name && <div className='error-message'>{errors.league_name}</div>}
        <div className='create-league-form-label-input'>
          <div className="create-league-form-league-name">
            <label className='create-league-form-label' htmlFor='email'>League Name</label>
              <input
                className='create-league-form-input'
                name='leagueName'
                type='text'
                placeholder='League Name'
                value={leagueName}
                onChange={updateLeagueName}
              />
          </div>
          {errors.size && <div className='error-message'>{errors.size}</div>}
          <div className='create-league-form-league-desc'>
          <label className='create-league-form-label' htmlFor='email'>League Size</label>
              <input
                className='create-league-form-input'
                name='leagueSize'
                type='number'
                placeholder='League Size'
                value={leagueSize}
                onChange={updateLeagueSize}
              />
          </div>
          {errors.draft_date && <div className='error-message'>{errors.draft_date}</div>}
          <div className='create-league-form-league-desc'>
          <label className='create-league-form-label' htmlFor='email'>League Draft Date</label>
              <input
                className='create-league-form-input'
                name='leagueDraftDate'
                type='text'
                placeholder='Format: dd/mm/yy'
                maxLength={8}
                minLength={8}
                value={leagueDraftDate}
                onChange={updateLeagueDraftDate}
              />
          </div>
          {errors.draft_timer && <div className='error-message'>{errors.draft_timer}</div>}
          <div className='create-league-form-league-desc'>
          <label className='create-league-form-label' htmlFor='email'>League Draft Timer (Seconds)</label>
              <input
                className='create-league-form-input'
                name='leagueDesc'
                type='number'
                placeholder='League Description'
                value={leagueDraftTimer}
                onChange={updateLeagueDraftTimer}
              />
          </div>
          {errors.description && <div className='error-message'>{errors.description}</div>}
          <div className='create-league-form-league-desc'>
          <label className='create-league-form-label' htmlFor='email'>League Description</label>
              <input
                className='create-league-form-input'
                name='leagueDesc'
                type='textbox'
                placeholder='League Description'
                value={leagueDesc}
                onChange={updateLeagueDesc}
              />
          </div>
        </div>
        <div className='create-league-form-submit-holder'>
          <button className='create-league-form-submit' type='submit'>SUBMIT</button>
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default CreateLeague
