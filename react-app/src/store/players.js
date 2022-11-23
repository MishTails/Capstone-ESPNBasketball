const GET_ALL_PLAYERS = "players/GET_ALL_PLAYERS"
const GET_ONE_PLAYER = "players/GET_ONE_PLAYERS"
// const GET_PLAYERS_BY_TEAM = "players/GET_PLAYERS_BY_TEAM"

const getAllPlayers = (payload) => ({
  type: GET_ALL_PLAYERS,
  payload
})

const getOnePlayer = (payload) => ({
  type: GET_ONE_PLAYER,
  payload
})

// const getPlayersByTeam = (payload) => ({
//   type: GET_PLAYERS_BY_TEAM,
//   payload
// })

export const thunkGetAllPlayers = () => async (dispatch) => {
  const response = await fetch(`/api/players`)
  if (response.ok) {
    const players = await response.json();
    dispatch(getAllPlayers(normalizeArr(players)))
  }
}

export const thunkGetOnePlayer = (name) => async (dispatch) => {
  const response = await fetch(`/api/players/${name}`);
  if (response.ok){
    const player = await response.json();
    dispatch(getOneLeague(player))
  }
}

const initialState = {};

export default function players(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      let newStateGetAll = {...state}
      newStateGetAll.allPlayers = {...action.payload}
    case GET_ONE_PLAYER:
      let newStateGetOne = {...state}
      newStateGetOne.onePlayer = {...action.payload}
      return newStateGetOne
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
