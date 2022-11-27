import React, { useEffect } from 'react';
import './Leagues.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LeagueBody from './LeaguesBody';
import { thunkGetAllLeagues} from '../../store/league';
import { useDispatch, useSelector } from 'react-redux';


function Leagues() {
  const dispatch = useDispatch()
  const user_id = useSelector((state) => state?.session?.user?.id)
  const leagues = useSelector((state) => state.leagues)
  let allLeagues


  useEffect(() => {
    dispatch(thunkGetAllLeagues())
  }, [dispatch])

  if(leagues.allLeagues) {
    allLeagues = Object.values(leagues.allLeagues)
  }

  return (
    <div>
      <NavBar/>
      <div className='leagues-full-body'>
        <div className='leagues-title'>
          NBA Basketball - Listed Commissioner Leagues
          </div>
          <div className='leagues-full-table'>
            <div className='leagues-listed-leagues'>
              Listed Leagues
            </div>
            <div className='leagues-table-headings'>
              <div className='leagues-table-head' id='ltOne'>
                Join
              </div>
              <div className='leagues-table-head' id='ltTwo'>
                League Name
              </div>
              <div className='leagues-table-head' id='ltThree'>
                Commissioner
              </div>
              <div className='leagues-table-head' id="ltFour">
                Spots
              </div>
              <div className='leagues-table-head' id="ltSeven">
                Draft Date
              </div>
              <div className='leagues-table-head' id="ltEight">
                Description
              </div>
            </div>
            <div>
              {allLeagues && allLeagues.map(single => {
                console.log("single", single.id)
                return <LeagueBody single = {single} />
              })
            }
            </div>

          </div>
        </div>
      <Footer/>
    </div>
  )
}


export default Leagues
