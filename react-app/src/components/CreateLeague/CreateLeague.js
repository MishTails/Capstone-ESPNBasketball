import React from 'react';
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CreateLeague.css';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkGetAllLeagues, thunkPostLeague } from '../../store/league';
import thunkPostTeam from '../../store/team'
<link
  href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
  rel="stylesheet"  type='text/css'></link>

function CreateLeague() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [leagueName, setLeagueName] = useState('')
  const [leagueDesc, setLeagueDesc] = useState('')
  const [leagueSize, setLeagueSize] = useState('8')
  const [leagueDraftDate, setLeagueDraftDate] = useState('')
  const [leagueDraftTimer, setLeagueDraftTimer] = useState(30)
  const [teamName, setTeamName] = useState('')
  const [teamLogo, setTeamLogo] = useState('')


  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state.leagues.allLeagues)
  // const dispatch = useDispatch();

  const updateLeagueName = (e) => {
    setLeagueName(e.target.value);
  };

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
  };
  const updateTeamLogo = (e) => {
    setTeamLogo(e.target.value);
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
      commissioner_id: 1,
      size: leagueSize,
      description: leagueDesc,
      draft_date: leagueDraftDate,
      draft_timer: leagueDraftTimer
    }
    await dispatch(thunkPostLeague(leagueData))
    history.push('/leagues')
  }
  return (
    <div>
      <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <NavBar/>
      <form className='create-league-form-full' onSubmit={onSubmit}>
        <div className='create-league-heading'>
          Create League
        </div>

        <div className='create-league-form-instructions-bubble'>
          <div className='create-league-form-lightbulb'>
            <i class="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='create-league-form-instructions'>
            Fill out this form for simple and easy league creation!
          </div>
        </div>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
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
          <div className='create-league-form-league-desc'>
          <label className='create-league-form-label' htmlFor='email'>League Draft Date</label>
              <input
                className='create-league-form-input'
                name='leagueDraftDate'
                type='date'
                value={leagueDraftDate}
                onChange={updateLeagueDraftDate}
              />
          </div>
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
          <button className='create-league-form-submit' type='submit'>LOG IN</button>
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default CreateLeague
