import React from 'react';
import { useState, useDispatch } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CreateLeague.css';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function CreateLeague() {
  const [errors, setErrors] = useState([]);
  const [leagueName, setLeagueName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamLogo, setTeamLogo] = useState('')
  const [leagueType, setLeagueType] = useState('')
  const [draftType, setDraftType] = useState('')
  const [leagueDesc, setLeagueDesc] = useState('')


  const user = useSelector(state => state.session.user);
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

  const updateLeagueType = (e) => {
    setLeagueType(e.target.value);
  };

  const updateDraftType = (e) => {
    setDraftType(e.target.value);
  };

  const updateLeagueDesc = (e) => {
    setLeagueDesc(e.target.value);
  };


  const onSubmit = async (e) => {

  }
  return (
    <div>
      <NavBar/>
      <form className='create-league-form-full' onSubmit={onSubmit}>
        <div>
          Create League
        </div>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
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
        <div className='create-league-form-team-name'>
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
        <div className='create-league-form-team-logo'>
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
        <div className='create-league-form-league-type'>
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
        <div className='create-league-form-draft-type'>
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
        <div className='create-league-form-submit-holder'>
          <button className='create-league-form-submit' type='submit'>LOG IN</button>
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default CreateLeague
