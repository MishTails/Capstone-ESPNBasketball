import React, { useEffect } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './TeamDetail.css';
import PlayerLogo from '../Players/PlayerLogoSwitch';

function TeamRoster(player) {
  const myPlayer = player.player
  return (
  <div className='team-roster-full'>
    <div className='team-roster-name'>
      {myPlayer.name}
    </div>
    <div className='team-roster-stat'>
      {PlayerLogo(myPlayer.team)}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.minutes}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.points}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.field_goal_percent}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.threes}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.free_throw_percent}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.rebounds}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.assists}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.turnovers}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.steals}
    </div>
    <div className='team-roster-stat'>
      {myPlayer.blocks}
    </div>
  </div>
  )
}



export default TeamRoster
