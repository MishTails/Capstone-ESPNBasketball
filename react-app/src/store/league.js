const GET_ALL_LEAGUES = "leagues/GET_ALL_LEAGUES"
const GET_ONE_LEAGUE = "leagues/GET_ONE_LEAGUE"
const POST_LEAGUE = "leagues/POST_LEAGUES"
const UPDATE_LEAGUE = "leagues/UPDATE_LEAGUES"
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

const deleteLeague = (id) => ({
  type: DELETE_LEAGUE,
  id
})

const cleanLeague = () => ({
  type: CLEAN_UP_LEAGUES
})

export const thunkGetAllLeagues = () => async (dispatch) => {
  const response = await fetch('/api/leagues');
  if (response.ok) {
    const leagues = await response.json();
    dispatch(getAllLeagues(normalizeArr(leagues)))
  }
}

export const thunkGetOneLeague = (id) => async (dispatch) => {
  const response = await fetch(`/api/leagues/${id}`);
  if (response.ok){
    const league = await response.json();
    dispatch(getOneLeague(league))
  }
}

export const thunkPostLeague = (data) => async (dispatch) => {
  const response = await fetch(` /api/leagues`, {
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
  }
}

export const thunkDeleteLeague = (id) => async (dispatch) => {
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
      newStateGetOne.oneTeam = {...action.payload}
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
