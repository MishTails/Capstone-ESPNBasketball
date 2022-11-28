const GET_ALL_ROSTERS = "teams/GET_ALL_ROSTERS"
const GET_ONE_ROSTER = "teams/GET_ONE_ROSTER"
const POST_ROSTER = "teams/POST_ROSTER"
const DELETE_ROSTER = "teams/DELETE_ROSTER"
const CLEAN_UP_ROSTERS = "teams/CLEAN_UP_ROSTER"

const getAllRosters = (payload) => ({
  type: GET_ALL_ROSTERS,
  payload
})

const getOneRoster = (payload) => ({
  type: GET_ONE_ROSTER,
  payload
})

const postRoster = (payload) => ({
  type: POST_ROSTER,
  payload
})

const deleteRoster = (payload) => ({
  type: DELETE_ROSTER,
  payload
})

const cleanRosters = () => ({
  type: CLEAN_UP_ROSTERS
})

export const thunkGetAllRosters = () => async (dispatch) => {
  const response = await fetch(`/api/rosters`);
  if (response.ok) {
    const rosters= await response.json();
    dispatch(getAllRosters(normalizeArr(rosters.rosters)))
  }
}

export const thunkGetOneRoster = (rosterId) => async (dispatch) => {
  const response = await fetch(`/api/rosters/${rosterId}`);
  if (response.ok) {
    const roster = await response.json();
    dispatch(getOneRoster(roster))
  }
}

export const thunkPostRoster = (data) => async (dispatch) => {
  const response = await fetch(`/api/rosters`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const roster = await response.json();
    dispatch(postRoster(roster));
    return roster
  }
}

export const thunkDeleteTeam = (roster) => async (dispatch) => {
  const response = await fetch(`/api/rosters/${roster.id}`, {
    method: 'delete'
  });
  if (response.ok) {
    const delRoster = await response.json();
    dispatch(deleteRoster(delRoster))
    return delRoster
  }
}

export const thunkCleanRoster = () => async (dispatch) => {
  dispatch(cleanRosters())
}


const initialState = {};

export default function rosters(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ROSTERS:
      let newStateGetAll = {...state};
      newStateGetAll.allRosters = {...action.payload}
      return newStateGetAll
    case GET_ONE_ROSTER:
      let newStateGetOne = {...state};
      newStateGetOne.oneRoster = {...action.payload}
      return newStateGetOne
    case POST_ROSTER:
      let newStateCreate = {...state}
      let id = action.payload.id;
      newStateCreate.allRosters[id] = action.payload
      return newStateCreate
    case DELETE_ROSTER:
      let newStateDelete = {...state}
      delete newStateDelete[action.id]
      return newStateDelete
    case CLEAN_UP_ROSTERS:
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
