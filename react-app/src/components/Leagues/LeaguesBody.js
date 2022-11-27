import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Leagues.css'
import logo from '../../assets/halfcourtLogo-PhotoRoom.png'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { thunkGetAllLeagues, thunkPostLeague } from '../../store/league';
import { useDispatch, useSelector } from 'react-redux';


function LeagueBody(single) {
  const dispatch = useDispatch()
  const user_id = useSelector((state) => state?.session?.user?.id)
  const leagues = useSelector((state) => state.leagues)
  let allLeagues
  let myLeague = single.single


  useEffect(() => {
    dispatch(thunkGetAllLeagues())
  }, [dispatch])

  if(leagues.allLeagues) {
    allLeagues = Object.values(leagues.allLeagues)
  }

  return (
      <div className='leagues-table-body'>
        {/* {console.log('id',id)} */}
        <div className='leagues-table-data' id='ltOne'>
          <NavLink to={`/leagues/${myLeague.id}/join`}>
            <button>+</button>
          </NavLink>

        </div>
        <div className='leagues-table-data' id='ltTwo'>
          <NavLink to={`/leagues/${myLeague.id}`}>
              <button>{myLeague.league_name}</button>
            </NavLink>
        </div>
        <div className='leagues-table-data' id='ltThree'>
          temp commish
        </div>
        <div className='leagues-table-data' id='ltFour'>
        {`${myLeague.occupancy}/${myLeague.size}`}
        </div>
        <div className='leagues-table-data' id="ltSeven">
        {myLeague.draft_date}
        </div>
        <div className='leagues-table-data' id="ltEight">
        {myLeague.description}
        </div>
      </div>

  )
}


export default LeagueBody
