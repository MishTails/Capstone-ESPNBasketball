const GET_ALL_TEAMS = "leagues/GET_ALL_TEAMS"
const GET_ONE_TEAM = "leagues/GET_ONE_TEAMS"
const POST_TEAM = "leagues/POST_TEAM"
const UPDATE_TEAM = "leagues/UPDATE_TEAM"
const DELETE_TEAM = "leagues/DELETE_TEAM"
const CLEAN_UP_TEAM = "leagues/CLEAN_UP_TEAMS"

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
