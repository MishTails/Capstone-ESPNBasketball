import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './DeleteTeam.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkDeleteTeam } from '../../store/team';
import { thunkLowerOccupancy } from '../../store/league';

// THIS ONE IS NOT DONE


function DeleteTeam() {
  const dispatch = useDispatch()
  const history = useHistory()
  const teamId = useParams()

  const user = useSelector(state => state?.session?.user?.id);
  const league = useSelector(state => state.leagues.allLeagues)
  const oneLeague = useSelector(state => state.leagues.oneLeague)



  const onSubmit = async (e) => {
    e.preventDefault()

    await dispatch(thunkDeleteTeam(parseInt(teamId.teamId)))
    await dispatch(thunkLowerOccupancy(oneLeague.id))
    history.push('/leagues')
  }
  return (
    <div>
      <NavBar/>
      {console.log(teamId.teamId)}
      <form className='update-league-form-full' onSubmit={onSubmit}>
        <div className='update-league-heading'>
          Delete Team
        </div>

        <div className='update-league-form-instructions-bubble'>
          <div className='update-league-form-lightbulb'>
            <i class="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='update-league-form-instructions'>
            Are you sure you want to leave this league?
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


export default DeleteTeam
