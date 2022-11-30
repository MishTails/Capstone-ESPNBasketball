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
      name: teamName,
      logo: teamLogo

    }
    await dispatch(thunkUpdateTeam(teamData))
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
            <label className='update-league-form-label' htmlFor='email'>Team Name</label>
              <input
                className='update-league-form-input'
                name='teameName'
                type='text'
                placeholder='team Name'
                value={teamName}
                onChange={updateTeamName}
              />
          </div>
          <div className='update-league-form-league-desc'>
          <label className='update-league-form-label' htmlFor='email'>Team Logo</label>
              <input
                className='update-league-form-input'
                name='teamLogo'
                type='TEXT'
                placeholder='Team Logo'
                value={teamLogo}
                onChange={updateTeamLogo}
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
