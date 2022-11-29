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

function Players() {
  const dispatch = useDispatch()
  const teamId= useParams()
  const user = useSelector(state => state?.session?.user?.id);
  const players = useSelector(state => state?.players);
  const myTeam = useSelector(state => state?.teams?.oneTeam)
  const allTeams = useSelector(state => state?.teams?.allTeams)
  let playerArr = []
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
      {console.log(playerArr)}
      <NavBar/>
      <div className='players-title'>
        Players
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
            return <PlayersBody player ={player}/>
          }

        })}
      </div>

      {/* <Footer/> */}
    </div>

  )

}


export default Players
