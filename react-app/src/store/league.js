const GET_ALL_LEAGUES = "leagues/GET_ALL_LEAGUES"
const GET_ONE_LEAGUE = "leagues/GET_ONE_LEAGUE"
const POST_LEAGUE = "leagues/POST_LEAGUES"
const UPDATE_LEAGUE = "leagues/UPDATE_LEAGUES"
const UPDATE_OCCUPANCY = 'leagues/UPDATE_OCCUPANCY'
const LOWER_OCCUPANCY = 'league/LOWER_OCCUPANCY'
const DELETE_LEAGUE = "leagues/DELETE_LEAGUES"
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

const updateOccupancy = (payload) => ({
  type: UPDATE_OCCUPANCY,
  payload
})

const lowerOccupancy = (payload) => ({
  type: LOWER_OCCUPANCY,
  payload
})

const deleteLeague = (id) => ({
  type: DELETE_LEAGUE,
  id
})

const cleanLeague = () => ({
  type: CLEAN_UP_LEAGUES
})

export const thunkGetAllLeagues = () => async (dispatch) => {
  console.log('i got here!')
  const response = await fetch('/api/leagues');
  if (response.ok) {
    const leagues = await response.json();
    dispatch(getAllLeagues(normalizeArr(leagues.leagues)))
  }
}

export const thunkGetOneLeague = (id) => async (dispatch) => {
  console.log(id, "WIIIIINNNNN")
  const response = await fetch(`/api/leagues/${id}`);
  if (response.ok){
    const league = await response.json();
    dispatch(getOneLeague(league))
  }
}

export const thunkPostLeague = (data) => async (dispatch) => {
  const response = await fetch(`/api/leagues`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const league = await response.json();
    dispatch(postLeague(league));
    return league
  } else if (response.status < 500) {
    const league = await response.json()
      if (league.errors) {
        return league
      }
  }
}

export const thunkUpdateLeague = (data) => async (dispatch) => {

  const response = await fetch(`/api/leagues/${data.id}`, {
    method: 'put',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const league = await response.json();
    dispatch(updateLeague(league))
    return league
  } else if (response.status < 500) {
    const league = await response.json()
      if (league.errors) {
        return league
      }
  }
}

export const thunkUpdateOccupancy = (id) => async (dispatch) => {
  console.log("DATA",id)
  const response = await fetch(`/api/leagues/${id}/up`, {
    method:'put',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(id)
  })
  if (response.ok){
    const league = await response.json();
    dispatch(updateOccupancy(league))
    return league
  }
}

export const thunkLowerOccupancy = (id) => async (dispatch) => {
  console.log("DATA",id)
  const response = await fetch(`/api/leagues/${id}/down`, {
    method:'put',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(id)
  })
  if (response.ok){
    const league = await response.json();
    dispatch(lowerOccupancy(league))
    return league
  }
}

export const thunkDeleteLeague = (id) => async (dispatch) => {
  console.log("Starburst")
  const response = await fetch(`/api/leagues/${id}`, {
    method: 'delete'
  });
  if (response.ok) {
    const league = await response.json();
    dispatch(deleteLeague(id))
  }
}

export const thunkCleanLeague = () => async (dispatch) => {
  dispatch(cleanLeague())
}

const initialState = {};

export default function leagues(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_LEAGUES:
      let newStateGetAll = {...state};
      newStateGetAll.allLeagues = {...action.payload}
      return newStateGetAll
    case GET_ONE_LEAGUE:
      let newStateGetOne = {...state};
      newStateGetOne.oneLeague = {...action.payload}
      return newStateGetOne
    case POST_LEAGUE:
      let newStateCreate = {...state}
      let id = action.payload.id;
      newStateCreate.allLeagues[id] = action.payload
      return newStateCreate
    case UPDATE_LEAGUE:
      let newStateUpdate = {...state}
      newStateUpdate[action?.paylaod?.id] = action.payload
      return newStateUpdate;
    case UPDATE_OCCUPANCY:
      let newStateOccupancy = {...state}
      newStateOccupancy[action?.paylaod?.id] = action.paylaod
      return newStateOccupancy
    case DELETE_LEAGUE:
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
