import React, { useEffect } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './PlayerInfo.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import PlayerTeamname from '../Players/PlayerTeamNameFull';
import playerImage from '../../assets/placeholder.jpg'
import { thunkGetOnePlayer } from '../../store/players';

function PlayerInfo() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {playerId} = useParams()
  // const  myLeague = useSelector(state => state?.leagues)

  // let oneLeague
  // let allTeams


  // const user = useSelector(state => state?.session?.user?.id);
  const myPlayer = useSelector(state => state?.players?.onePlayer)

  useEffect(() => {
    dispatch(thunkGetOnePlayer(playerId))
  },[dispatch])



  // if(myLeague.oneLeague) {
  //   oneLeague = myLeague.oneLeague
  // }

  // if(teams) {
  //   allTeams = Object.values(teams)
  // }

  return(
  <div>
    {myPlayer && <div className='player-info-body'>
      <div className='player-info-header-row'>
        <img className='player-info-image' src={playerImage}></img>
        <div className='player-info-name-team'>
          <div className='player-info-name'>
            {myPlayer.name}
          </div>
          <div>
            {PlayerTeamname(myPlayer.team)}
          </div>
        </div>
      </div>
      {/* Rank Starts */}
      <div className='player-info-rank-row'>
        <div className='player-info-rank-title'>
          <div className='player-info-title'>
            Rank Overall
          </div>
          <div className='player-info-rank'>
            {myPlayer.id}/476
          </div>
        </div>
      </div>
      {/* Stats Start */}
      <div className='player-info-stats'>
          <div className='player-info-stats-title'>
            2022-2023 Stats
          </div>
          <div className='player-info-stats-headings'>
            <div className='players-heading-stat'>
            Team
            </div>
            <div className='players-heading-stat'>
            MIN
            </div>
            <div className='players-heading-stat'>
            PTS
            </div>
            <div className='players-heading-stat'>
            FGP
            </div>
            <div className='players-heading-stat'>
            3PTS
            </div>
            <div className='players-heading-stat'>
            FTP
            </div>
            <div className='players-heading-stat'>
            REB
            </div>
            <div className='players-heading-stat'>
            AST
            </div>
            <div className='players-heading-stat'>
            TO
            </div>
            <div className='players-heading-stat'>
            STL
            </div>
            <div className='players-heading-stat'>
            BLK
            </div>
          </div>
          <div className='players-info-stats-body'>
            <div className='players-heading-stat'>
              {myPlayer.team}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.minutes}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.points}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.field_goal_percent}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.threes}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.free_throw_percent}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.rebounds}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.assists}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.turnovers}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.steals}
              </div>
              <div className='players-heading-stat'>
              {myPlayer.blocks}
              </div>
            </div>
      </div>

    </div>}

  </div>
  )
}


export default PlayerInfo
