import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Players.css';
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkGetAllLeagues, thunkPostLeague } from '../../store/league';
// import {thunkGetAllPlayers} from '../../store/players'
import thunkPostTeam from '../../store/team'

function PlayersBody(player) {
  const dispatch = useDispatch()
  const history = useHistory()
  const id = useParams()
  const [errors, setErrors] = useState([]);

  const [teamName, setTeamName] = useState('')
  const [teamLogo, setTeamLogo] = useState('')


  const user = useSelector(state => state?.session?.user?.id);
  const players = useSelector(state => state.players?.allPlayers);
  let allPlayers

  // useEffect(() => {
  //   dispatch(thunkGetAllPlayers())
  // },[dispatch])


  if (players?.allPlayers) {
    allPlayers = Object.values(players.allPlayers)
  }


  const onSubmit = async (e) => {
    e.preventDefault()
    let leagueData = {
      name: teamName,
      logo: teamLogo,
      user_id: user,
      league_id: id.leagueId

    }
    await dispatch(thunkPostTeam(leagueData))
    history.push('/leagues')
  }
  return (
    <div className='players-body-full'>
      <div className='players-body-name'>
        <NavLink className="players-navlink" to={`/player_info/${player.player.id}`}>
          {player.player.name}
        </NavLink>
      </div>
      <div className='players-body-stat'>
        {player.player.team}
      </div>
      <div className='players-body-stat'>
        {player.player.id}
      </div>
      <div className='players-body-stat'>
        {player.player.minutes}
      </div>
      <div className='players-body-stat'>
        {player.player.points}
      </div>
      <div className='players-body-stat'>
        {player.player.field_goal_percent}
      </div>
      <div className='players-body-stat'>
        {player.player.threes}
      </div>
      <div className='players-body-stat'>
        {player.player.free_throw_percent}
      </div>
      <div className='players-body-stat'>
        {player.player.rebounds}
      </div>
      <div className='players-body-stat'>
        {player.player.assists}
      </div>
      <div className='players-body-stat'>
        {player.player.turnovers}
      </div>
      <div className='players-body-stat'>
        {player.player.steals}
      </div>
      <div className='players-body-stat'>
        {player.player.blocks}
      </div>
    </div>

  )

}


export default PlayersBody
