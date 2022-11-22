const GET_ALL_LEAGUES = "leagues/GET_ALL_LEAGUES"
const GET_ONE_LEAGUE = "leagues/GET_ONE_LEAGUE"
const POST_LEAGUE = "leagues/POST_LEAGUES"
const UPDATE_LEAGUE = "leagues/UPDATE_LEAGUES"
const DELETE_WATCHLIST = "leagues/DELETE_LEAGUES"
const CLEAN_UP_LEAGUES = "leagues/CLEAN_UP_LEAGUES"

const getAllLeagues = (payload) => ({
  type: GET_ALL_LEAGUES,
  payload
})

const getOneLeague = (payload) => ({
  type: GET_ONE_LEAGUE,
  payload
})

const postLeague = (payload) => ({
  type: POST_LEAGUE,
  payload
})

const updateLeague = (payload) => ({
  type: UPDATE_LEAGUE,
  payload
})

const deleteLeague = (id) => ({
  type: DELETE_WATCHLIST,
  id
})

const cleanLeague = () => ({
  type: CLEAN_UP_LEAGUES
})



const initialState = {};

export default function leagues(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_LEAGUES:
      let newStateGetAll = {...state};
      newStateGetAll.allLeagues = {...action.payload}
      return newStateGetAll
    case GET_ONE_LEAGUE:
      let newStateGetOne = {...state};
      newStateGetOne.oneWatchlist = {...action.payload}
      return newStateGetOne
    case POST_LEAGUE:
      let newStateCreate = {...state}
      let id = action.payload.id;
      newStateCreate.allLeagues[id] = action.payload
      return newStateCreate
    case UPDATE_LEAGUE:
      let newStateUpdate = {...state}
      newStateUpdate[action.paylaod.id] = action.payload
      return newStateUpdate;
    case DELETE_WATCHLIST:
      let newStateDelete = {...state}
      delete newStateDelete[action.id]
      return newStateDelete
    case CLEAN_UP_LEAGUES:
      let emptyState = {};
      return emptyState
    default:
      return state
  }
}

const normalizeArr = (arr) => {
	if (!(arr instanceof Array))
		throw new Error('Invalid Data Type: Not an Array');
	let obj = {};
	arr.forEach((el) => {
		obj[el.id] = el;
	});
	return obj;
};
