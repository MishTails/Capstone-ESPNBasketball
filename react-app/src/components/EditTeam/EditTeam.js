import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './EditTeam.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkUpdateTeam } from '../../store/team';

function EditTeam() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [teamName, setTeamName] = useState('')
  const [teamLogo, setTeamLogo] = useState('')
  const teamId = useParams()

  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state.leagues.allLeagues)

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
  };

  const updateTeamLogo = (e) => {
    setTeamLogo(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    let teamData = {
      id: parseInt(teamId.teamId),
      name: teamName


    }
    await dispatch(thunkUpdatTeam(teamData))
    history.push(`/teams/${parseInt(teamId.teamId)}`)
  }
  return (
    <div>
      <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <NavBar/>
      <form className='update-league-form-full' onSubmit={onSubmit}>
        <div className='update-league-heading'>
          Edit Team
        </div>

        <div className='update-league-form-instructions-bubble'>
          <div className='update-league-form-lightbulb'>
            <i class="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='update-league-form-instructions'>
            Change the settings of your Team!
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
        </div>
        <div className='update-league-form-submit-holder'>
          <button className='update-league-form-submit' type='submit'>SUBMIT</button>
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default EditTeam
