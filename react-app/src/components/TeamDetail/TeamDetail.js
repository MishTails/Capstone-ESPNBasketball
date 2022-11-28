import React, { useEffect } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './TeamDetail.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkGetOneLeague} from '../../store/league';
import { thunkGetAllTeams, thunkGetOneTeam } from '../../store/team'

function TeamDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {teamId} = useParams()
  const  myLeague = useSelector(state => state?.leagues)

  let oneLeague
  let allTeams
  let count = 0

  const user = useSelector(state => state?.session?.user?.id);
  const teams = useSelector(state => state?.teams?.allTeams)
  const myTeam = useSelector(state => state?.teams?.oneTeam)
  // const players = useSelector(state => state.players);
  // let allPlayers

  useEffect(() => {
    dispatch(thunkGetOneTeam(teamId))
  },[dispatch])



  if(myLeague.oneLeague) {
    oneLeague = myLeague.oneLeague
  }

  if(teams) {
    allTeams = Object.values(teams)
  }

  return (
    <div>
      <NavBar/>
      <div className='team-detail-page'>
        {myTeam && <div className='team-detail-top'>
          <div className='team-detail-name'>
            {myTeam.name}
          </div>
          <img src={myTeam.logo}/>
          <NavLink to={`/teams/${teamId}/update`}>
            <button>Edit Team</button>
          </NavLink>
          <NavLink to={`/teams/${teamId}/players`}>
            <button>Add Players</button>
          </NavLink>
        </div>}
        <div className='team-detail-roster'>
          <div className='team-detail-player'>
            Player 1
          </div>
          <div className='team-detail-player'>
            Player 2
          </div>
          <div className='team-detail-player'>
            Player 3
          </div>
          <div className='team-detail-player'>
            Player 4
          </div>
          <div className='team-detail-player'>
            Player 5
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default TeamDetail
