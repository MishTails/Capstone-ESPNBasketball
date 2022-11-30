import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Players.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import PlayersBody from './PlayersBody';
import {thunkGetAllPlayers} from '../../store/players'
import {thunkGetAllTeams} from '../../store/team'
import { thunkGetOneTeam } from '../../store/team';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Players() {
  const dispatch = useDispatch()
  const teamId= useParams()
  const user = useSelector(state => state?.session?.user?.id);
  const players = useSelector(state => state?.players);
  const myTeam = useSelector(state => state?.teams?.oneTeam)
  const allTeams = useSelector(state => state?.teams?.allTeams)
  let playerArr = []
  let pagecount = teamId.pageId
  let count = 0
  let emptyCount = 0
  let max = parseInt(pagecount)*10
  let min = parseInt(pagecount-1)*10

  if(allTeams) {
    {Object.values(allTeams).forEach(teams => {
      console.log('PIZZA', teams)
        Object.values(teams.players).forEach(player => {

          playerArr.push(player.id)
        })
      })
    }
  }

let allPlayers
  useEffect(() => {
    dispatch(thunkGetAllPlayers())
    dispatch(thunkGetOneTeam(teamId?.teamId))
    dispatch(thunkGetAllTeams(myTeam?.league_id))
  },[dispatch])


  if (players?.allPlayers) {
    allPlayers = Object.values(players.allPlayers)
  }
  return (
    <div>
      {console.log(teamId, "USEPARAM")}
      <NavBar/>
      <div className='players-title-arrows'>
        <div className='players-title'>
          Players
        </div>
        <div className='players-arrows'>
          {pagecount && pagecount !== '1' &&<NavLink to={`/teams/${teamId.teamId}/players/page/${parseInt(teamId.pageId)-1}`}>
            <i className="fa-solid fa-arrow-left"></i>
          </NavLink>}
          {pagecount && pagecount !== '46' && <NavLink to={`/teams/${teamId.teamId}/players/page/${parseInt(teamId.pageId)+1}`}>
            <i className="fa-solid fa-arrow-right"></i>
          </NavLink>}
        </div>
      </div>

      <div className='players-table-full'>
        <div className='players-table-headings-full'>
          <div className='players-heading-stat'>

          </div>
          <div className='players-heading-name'>
          Name
          </div>
          <div className='players-heading-stat'>
          Team
          </div>
          <div className='players-heading-stat'>
          Rank
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

        {allPlayers && allPlayers.map(player => {
          if (!(playerArr.includes(player.id))) {
            count++
            if(count < max) {
              if (count < min) {
                return
              }
              emptyCount++
              return <PlayersBody player ={player}/>
            }
          }
        })}
        {emptyCount === 0 && <div>No Players Here </div>}
      </div>

      {/* <Footer/> */}
    </div>

  )

}


export default Players
