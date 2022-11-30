import React, { useEffect } from 'react';
import { useHistory, NavLink , useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './LeagueDetail.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkGetOneLeague} from '../../store/league';
import { thunkGetAllTeams } from '../../store/team'

function LeagueDetail() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {leagueId} = useParams()
  const  myLeague = useSelector(state => state?.leagues)

  let oneLeague
  let allTeams
  let count = 0

  const user = useSelector(state => state?.session?.user?.id);
  const teams = useSelector(state => state?.teams?.allTeams)
  // const players = useSelector(state => state.players);
  // let allPlayers

  useEffect(() => {
    dispatch(thunkGetOneLeague(leagueId))
    dispatch(thunkGetAllTeams(leagueId))
  },[dispatch])



  if(myLeague.oneLeague) {
    oneLeague = myLeague.oneLeague
  }

  if(teams) {
    allTeams = Object.values(teams)
  }
  // if (players?.allPlayers) {
  //   allPlayers = Object.values(players.allPlayers)
  // }

  return (
    <div>
      <NavBar/>
      {console.log(allTeams)}
      <div className='league-detail-page'>
        <div className='league-detail-home'>
          Home
        </div>
        {oneLeague && <div className='league-detail-league-name'>
            {oneLeague.league_name}
        </div>}
        <div className='league-detail-standings-rules'>
          <div className='league-detail-standings-full'>
            <div className='league-detail-standings-title'>
              Standings
            </div>
            <div className='league-detail-standings-header'>
              <div className='league-detail-standings-rank'>
                Rank
              </div>
              <div className='league-detail-standings-team'>
                Team
              </div>
            </div>
            {allTeams && allTeams.map(team => {
              if(team.league_id ==leagueId) {
                count++
                return <div className='league-detail-standings-row'>
                  <div className='league-detail-standings-rank'>
                    {count}
                  </div>
                  <div className='league-detail-standings-team'>
                    <NavLink to={`/teams/${team.id}`}>
                      <button className='league-detail-button'>{team.name}</button>
                    </NavLink>
                  </div>
                 { user ==team.user_id &&
                 <NavLink to={`/teams/${team.id}/delete`}>
                  <button className='league-detail-delete-button'> X </button>
                 </NavLink>

                 }
                </div>
              }
            })}
          </div>

          <div className='league-detail-rules-full'>
            <div className='league-detail-rules-header'>
              Rules
            {oneLeague && user == oneLeague.commissioner_id && <NavLink to={`/leagues/${leagueId}/update`}>
              <button className='league-detail-rules-button'>Update League Rules</button>
            </NavLink>}
            {oneLeague && user == oneLeague.commissioner_id && <NavLink to={`/leagues/${leagueId}/delete`}>
              <button className='league-detail-rules-button'>Delete League</button>
            </NavLink>}

            </div>

          { oneLeague && <div className='league-detail-rules-body'>
              <div className='league-detail-rules-text'>
                League Name: {oneLeague.league_name}
              </div>
              <div className='league-detail-rules-text'>
                Size: {oneLeague.size}
              </div>
              <div className='league-detail-rules-text'>
                Draft Date: {oneLeague.draft_date}
              </div>
              <div className='league-detail-rules-text'>
                Draft Timer: {oneLeague.draft_timer} seconds
              </div>
              <div className='league-detail-description'>
                <div className='league-detail-description-heading'>
                  Description: {oneLeague.description}
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default LeagueDetail
