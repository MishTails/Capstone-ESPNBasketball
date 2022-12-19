import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CreateTeam.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkGetAllTeams, thunkPostTeam } from '../../store/team';
import { thunkUpdateOccupancy } from '../../store/league';

function CreateTeam() {
  const dispatch = useDispatch()
  const history = useHistory()
  const id = useParams()
  const [errors, setErrors] = useState([]);

  const [teamName, setTeamName] = useState('')
  const [teamLogo, setTeamLogo] = useState(null)
  const [imageLoading, setImageLoading] = useState(false);


  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state.leagues.allLeagues)
  // const dispatch = useDispatch();

  const updateTeamName = (e) => {
    setTeamName(e.target.value);
    console.log(teamName)
  };
  const updateTeamLogo = (e) => {
    const file = e.target.files[0]
    setTeamLogo(file);
    // console.log("TEAMLOGO",teamLogo)
  };

  useEffect(() => {
    dispatch(thunkGetAllTeams())
  }, [dispatch])

  const logoValidator = (teamLogo) => {
    let name = teamLogo?.name
    let lastChars3 = name?.slice(name.length-3)
    let lastChars4 = name?.slice(name.length-4)
    if (lastChars3 !== 'jpg' && lastChars3 !== "JPG" && lastChars3 !== "png" && lastChars3 !== 'PNG' && lastChars4 !== "jpeg" ) {
      return true
    }
    return false
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = document.getElementById('form')
    console.log(form,"Pizza")
    const formData = new FormData(form)
    // formData.append("name", teamName)
    formData.append("teamLogo", teamLogo)
    // let teamData = {
    //   name: teamName,
    //   logo: formData,
    //   user_id: user,
    //   league_id: parseInt(id.leagueId)
    // }
    const res = await fetch(`/api/teams/${id.leagueId}`, {
      method: "POST",
      body: formData,
  });
    if (res.ok) {
      await res.json();
      setImageLoading(false);
      history.push("/leagues");
  }
    else {
      setImageLoading(false);
      // a real app would probably use more advanced
      // error handling
      console.log(res);
      console.log(teamLogo)
  }
    // const newTeam = await dispatch(thunkPostTeam(formData, id))
    // if (newTeam.errors) {
    //   setErrors(newTeam.errors)
    // } else {
    //   await dispatch(thunkUpdateOccupancy(id.leagueId))
    //   history.push('/leagues')
    // }
  }
  return (
    <div>
      <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <NavBar/>
      <form className='create-team-form-full' id='form' onSubmit={onSubmit}>
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
        {errors.name && <div>{errors.name}</div>}
        <div className='create-team-form-label-input'>
          <div className="create-team-form-league-name">
            <label className='create-team-form-label' htmlFor='teamName'>Team Name</label>
              <input
                className='create-team-form-input'
                name='teamName'
                type='text'
                placeholder='Team Name'
                value={teamName}
                onChange={updateTeamName}
              />
          </div>
          {logoValidator(teamLogo) && teamLogo !== null &&<div>Your Logo must be a jpg, jpeg, or png.</div>}
          <div className='create-team-form-league-desc'>
          <label className='create-team-form-label' htmlFor='logo'>Team Logo</label>
              <input
                className='create-team-form-input'
                name='teamLogo'
                type='file'
                accept="image/*"
                placeholder='Team Logo'
                // value={teamLogo}
                onChange={updateTeamLogo}
              />
          </div>
        </div>
        <div className='create-team-form-submit-holder'>
          <button className='create-team-form-submit' type='submit'>SUBMIT</button>
          {/* {(imageLoading)&& <p>Loading...</p>} */}
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default CreateTeam
