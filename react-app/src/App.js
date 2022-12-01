import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import AddPlayer from './components/AddPlayer/AddPlayer';
import CreateLeague from './components/CreateLeague/CreateLeague';
import CreateTeam from './components/CreateTeam/CreateTeam';
import DeleteLeague from './components/DeleteLeague/DeleteLeague';
import DeleteTeam from './components/DeleteTeam/DeleteTeam';
import EditTeam from './components/EditTeam/EditTeam';
import Leagues from './components/Leagues/Leagues';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import Players from './components/Players/Players';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Splash from './components/Splash/Splash';
import TeamDetail from './components/TeamDetail/TeamDetail';
import UpdateLeague from './components/UpdateLeague/UpdateLeague';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/teams/:teamId/players/page/:pageId'>
          <Players/>
        </Route>
        <Route path='/teams/:teamId/players/:playerId'>
          <AddPlayer/>
        </Route>
        <Route path='/teams/:teamId/update'>
          <EditTeam/>
        </Route>
        <Route path='/teams/:teamId/delete'>
          <DeleteTeam/>
        </Route>
        <Route path='/teams/:teamId'>
          <TeamDetail/>
        </Route>
        <Route path="/leagues" exact={true}>
          <Leagues/>
        </Route>
        <Route path='/leagues/create' exact={true}>
          <CreateLeague/>
        </Route>
        <Route path='/leagues/:leagueId/update'>
          <UpdateLeague/>
        </Route>
        <Route path='/leagues/:leagueId/delete'>
          <DeleteLeague/>
        </Route>
        <Route path='/leagues/:leagueId/join'>
          <CreateTeam/>
        </Route>
        <Route path='/leagues/:leagueId'>
          <LeagueDetail/>
        </Route>
        <Route path='/player_info/:playerId'>
          <PlayerInfo/>
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User/>
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Splash/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
