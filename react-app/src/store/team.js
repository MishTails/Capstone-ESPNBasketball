const GET_ALL_TEAMS = "teams/GET_ALL_TEAMS"
const GET_ONE_TEAM = "teams/GET_ONE_TEAMS"
const POST_TEAM = "teams/POST_TEAM"
const UPDATE_TEAM = "teams/UPDATE_TEAM"
const DELETE_TEAM = "teams/DELETE_TEAM"
const CLEAN_UP_TEAMS = "teams/CLEAN_UP_TEAMS"

const getAllTeams = (payload) => ({
  type: GET_ALL_TEAMS,
  payload
})

const getOneTeam = (payload) => ({
  type: GET_ONE_TEAM,
  payload
})

const postTeam = (payload) => ({
  type: POST_TEAM,
  payload
})

const updateTeam = (payload) => ({
  type: UPDATE_TEAM,
  payload
})

const deleteTeam = (payload) => ({
  type: DELETE_TEAM,
  payload
})

const cleanTeams = () => ({
  type: CLEAN_UP_TEAMS
})

export const thunkGetAllTeams = () => async (dispatch) => {
  const response = await fetch(`/api/teams`);
  if (response.ok) {
    const teams= await response.json();
    dispatch(getAllTeams(normalizeArr(teams.teams)))
  }
}

export const thunkGetOneTeam = (teamId) => async (dispatch) => {
  const response = await fetch(`/api/teams/${teamId}`);
  if (response.ok) {
    const team = await response.json();
    dispatch(getOneTeam(team))
  }
}

export const thunkPostTeam = (data) => async (dispatch) => {
  console.log('hi')
  const response = await fetch(`/api/teams`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    console.log('hi2')
    const team = await response.json();
    dispatch(postTeam(team));
    return team
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data
    }
  }
}

export const thunkUpdateTeam = (data) => async (dispatch) => {
  console.log(data, "THE DATA")
  const response = await fetch(`/api/teams/${data.id}`, {
    method: 'put',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const team = await response.json();
    dispatch(updateTeam(team))
    return team
  }  else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      console.log("HERE!!!", data)
      return data
    }
  }
}

export const thunkDeleteTeam = (team) => async (dispatch) => {
  console.log('TEAM', team)
  const response = await fetch(`/api/teams/${team}`, {
    method: 'delete'
  });
  if (response.ok) {
    const delTeam = await response.json();
    dispatch(deleteTeam(delTeam))
    return delTeam
  }
}

export const thunkCleanTeam = () => async (dispatch) => {
  dispatch(cleanTeams())
}

const initialState = {};

export default function teams(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TEAMS:
      let newStateGetAll = {...state};
      newStateGetAll.allTeams = {...action.payload}
      return newStateGetAll
    case GET_ONE_TEAM:
      let newStateGetOne = {...state};
      newStateGetOne.oneTeam = {...action.payload}
      return newStateGetOne
    case POST_TEAM:
      let newStateCreate = {...state}
      let id = action.payload.id;
      newStateCreate.allTeams[id] = action.payload
      return newStateCreate
    case UPDATE_TEAM:
      let newStateUpdate = {...state}
      console.log(action.payload)
      newStateUpdate[action?.paylaod?.id] = action.payload
      return newStateUpdate;
    case DELETE_TEAM:
      let newStateDelete = {...state}
      delete newStateDelete[action.id]
      return newStateDelete
    case CLEAN_UP_TEAMS:
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
