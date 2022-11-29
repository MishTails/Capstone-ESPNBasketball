import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Leagues.css'
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
        <div className='leagues-table-data' id='ltOne'>
          <NavLink to={`/leagues/${myLeague.id}/join`}>
            <button>+</button>
          </NavLink>

        </div>
        <div className='leagues-table-data' id='ltTwo'>
          <NavLink className="leaguse-navlink" to={`/leagues/${myLeague.id}`}>
              <div className="leagues-league-name">{myLeague.league_name}</div>
            </NavLink>
        </div>
        <div className='leagues-table-data' id='ltThree'>
          {myLeague.commish}
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
