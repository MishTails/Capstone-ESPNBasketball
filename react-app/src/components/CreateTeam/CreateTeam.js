import React from 'react';
import { useState } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CreateTeam.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkPostTeam } from '../../store/team';
import { thunkUpdateOccupancy } from '../../store/league';

function CreateTeam() {
  const dispatch = useDispatch()
  const history = useHistory()
  const id = useParams()
  const [errors, setErrors] = useState([]);

  const [teamName, setTeamName] = useState('')
  const [teamLogo, setTeamLogo] = useState('')


  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state.leagues.allLeagues)
  // const dispatch = useDispatch();

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
  };
  const updateTeamLogo = (e) => {
    setTeamLogo(e.target.value);
  };


  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(teamName, teamLogo, user, parseInt(id.leagueId))
    let teamData = {
      name: teamName,
      logo: teamLogo,
      user_id: user,
      league_id: parseInt(id.leagueId)
    }
    await dispatch(thunkPostTeam(teamData))
    await dispatch(thunkUpdateOccupancy(id.leagueId))
    history.push('/leagues')
  }
  return (
    <div>
      <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <NavBar/>
      <form className='create-team-form-full' onSubmit={onSubmit}>
        {<div className='create-team-heading'>
          Join a League!
        </div>}

        <div className='create-team-form-instructions-bubble'>
          <div className='create-team-form-lightbulb'>
            <i class="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='create-team-form-instructions'>
            Create Your Team!
          </div>
        </div>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='create-team-form-label-input'>
          <div className="create-team-form-league-name">
            <label className='create-team-form-label' htmlFor='email'>Team Name</label>
              <input
                className='create-team-form-input'
                name='teamName'
                type='text'
                placeholder='Team Name'
                value={teamName}
                onChange={updateTeamName}
              />
          </div>
          <div className='create-team-form-league-desc'>
          <label className='create-team-form-label' htmlFor='email'>Team Logo</label>
              <input
                className='create-team-form-input'
                name='teamLogo'
                type='text'
                placeholder='Team Logo'
                value={teamLogo}
                onChange={updateTeamLogo}
              />
          </div>
        </div>
        <div className='create-team-form-submit-holder'>
          <button className='create-team-form-submit' type='submit'>SUBMIT</button>
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default CreateTeam
