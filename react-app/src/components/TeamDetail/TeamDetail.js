import React, { useEffect } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './TeamDetail.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import TeamRoster from './TeamRoster';
import { thunkGetOneLeague} from '../../store/league';
import { thunkGetAllTeams, thunkGetOneTeam } from '../../store/team'
import { thunkDeleteRoster } from '../../store/roster';

function TeamDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {teamId} = useParams()

  let oneLeague
  let allTeams
  let count = 0

  const user = useSelector(state => state?.session?.user);
  const teams = useSelector(state => state?.teams?.allTeams)
  const myTeam = useSelector(state => state?.teams?.oneTeam)
  const myRoster = useSelector(state => state?.teams?.oneTeam?.players)
  const myLeague = useSelector(state => state?.leagues?.oneLeague)
  // const players = useSelector(state => state.players);
  // let allPlayers

  const deleteRoster = (player) => {
    dispatch(thunkDeleteRoster({
      playerId: player.id,
      teamId: teamId
    }))
    dispatch(thunkGetOneTeam(teamId))
    history.go(0)
}

  useEffect(() => {
    dispatch(thunkGetOneTeam(teamId))
    dispatch(thunkGetOneLeague(myTeam?.league_id))
  },[dispatch])



  if(myLeague?.oneLeague) {
    oneLeague = myLeague.oneLeague
  }

  if(teams) {
    allTeams = Object.values(teams)
  }

  return (
    <div>
      <NavBar/>
      <div className='team-detail-page'>
        <div className='team-detail-title'>
          <div>
            Team Roster
          </div>
          <div className='team-detail-league'>
        {myLeague && <div className='team-detail-league-name'>
            {myLeague.league_name}
          </div>}
          <div>
            {user.username}
          </div>
        </div>
          {myTeam && <div className='team-detail-top'>
          <div className='team-detail-name'>
            {myTeam.name}
          </div>
          <div className='team-detail-logo-settings'>
            <img className='team-detail-logo' src={myTeam.logo}/>
            <div className='team-detail-settings'>
              <NavLink to={`/teams/${teamId}/update`}>
                <button>Edit Team</button>
              </NavLink>
              <NavLink to={`/teams/${teamId}/players`}>
                <button>Add Players</button>
              </NavLink>
            </div>
          </div>
        </div>}

        </div>
        <div className='team-roster'>
          <div className='team-roster-full'>
            <div className='team-roster-name'>
              Player
            </div>
            <div className='team-roster-stat'>
              Team
            </div>
            <div className='team-roster-stat'>
              MIN
            </div>
            <div className='team-roster-stat'>
              PTS
            </div>
            <div className='team-roster-stat'>
              FGP
            </div>
            <div className='team-roster-stat'>
              3PTS
            </div>
            <div className='team-roster-stat'>
              FTP
            </div>
            <div className='team-roster-stat'>
              RBS
            </div>
            <div className='team-roster-stat'>
              AST
            </div>
            <div className='team-roster-stat'>
              TO
            </div>
            <div className='team-roster-stat'>
              STL
            </div>
            <div className='team-roster-stat'>
              BLK
            </div>
          </div>
          <div className='team-detail-roster'>
            {myRoster && myRoster.map(player => {
              return <div className='team-detail-player'>
                <TeamRoster player = {player}/>
                <button onClick={() => deleteRoster(player)}>X</button>
              </div>
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default TeamDetail
