import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './DeleteLeague.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import {thunkDeleteLeague } from '../../store/league';

function DeleteLeague() {
  const dispatch = useDispatch()
  const history = useHistory()
  const leagueId = useParams()

  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state.leagues.allLeagues)



  const onSubmit = async (e) => {
    e.preventDefault()

    await dispatch(thunkDeleteLeague(parseInt(leagueId.leagueId)))
    history.push('/leagues')
  }
  return (
    <div>
      <NavBar/>
      <form className='update-league-form-full' onSubmit={onSubmit}>
        <div className='update-league-heading'>
          Delete League
        </div>

        <div className='update-league-form-instructions-bubble'>
          <div className='update-league-form-lightbulb'>
            <i class="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='update-league-form-instructions'>
            Are you sure you want to delete this league?
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


export default DeleteLeague
