import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import CreateLeague from './components/CreateLeague/CreateLeague';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Leagues from './components/Leagues/Leagues';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import Players from './components/Players/Players';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Splash from './components/Splash/Splash';
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
          Delete Page
        </Route>
        <Route path='/leagues/:leagueId/join'>
          <CreateTeam/>
        </Route>
        <Route path='/leagues/:leagueId'>
          <LeagueDetail/>
        </Route>
        <Route path='/players/:playerId'>
          Player Detail Page
        </Route>
        <Route path='/players'>
          <Players/>
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
