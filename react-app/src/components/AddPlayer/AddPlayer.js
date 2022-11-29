import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './AddPlayer.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import {thunkPostRoster } from '../../store/roster';
import { thunkGetAllPlayers, thunkGetOnePlayer } from '../../store/players';

function AddPlayer() {
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams()

  const user = useSelector(state => state?.session?.user?.id);
  const player = useSelector(state => state?.players?.onePlayer)

  useEffect(() => {
    dispatch(thunkGetAllPlayers())
    dispatch(thunkGetOnePlayer(params.playerId))
  },[dispatch])


  const onSubmit = async (e) => {
    e.preventDefault()
    let rosterData = {
    playerId: parseInt(params.playerId),
    teamId: params.teamId
  }

    await dispatch(thunkPostRoster(rosterData))
    history.push(`/teams/${params.teamId}`)
  }
  return (
    <div>
      {console.log('params',params)}
      <NavBar/>
      <form className='update-league-form-full' onSubmit={onSubmit}>
       {player&& <div className='update-league-heading'>
          Add {player.name}?
        </div>}

        <div className='update-league-form-instructions-bubble'>
          <div className='update-league-form-lightbulb'>
            <i className="fa fa-solid fa-lightbulb"></i>
          </div>
          <div className='update-league-form-instructions'>
            Are you sure you want to add this player?
          </div>
        </div>
        <div className='update-league-form-submit-holder'>
          <button className='update-league-form-submit' type='submit'>ADD TO TEAM</button>
        </div>
      </form>
      <Footer/>
    </div>

  )

}


export default AddPlayer
