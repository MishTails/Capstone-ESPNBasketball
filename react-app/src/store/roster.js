const GET_ALL_ROSTERS = "teams/GET_ALL_ROSTERS"
const GET_ONE_ROSTER = "teams/GET_ONE_ROSTER"
const POST_ROSTER = "teams/POST_ROSTER"
const DELETE_ROSTER = "teams/DELETE_ROSTER"
const CLEAN_UP_ROSTERS = "teams/CLEAN_UP_ROSTER"

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



export const thunkPostRoster = (data) => async (dispatch) => {
  console.log(data)
  const response = await fetch(`/api/rosters/${data.playerId}/teams/${data.teamId}`, {
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

export const thunkDeleteRoster = (roster) => async (dispatch) => {
  const response = await fetch(`/api/rosters/${roster.playerId}/teams/${roster.teamId}`, {
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
    case POST_ROSTER:
      let newStateCreate = {...state}
      console.log("im sleepy")
      // let id = action.payload.id;
      // newStateCreate.allRosters[id] = action.payload
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
