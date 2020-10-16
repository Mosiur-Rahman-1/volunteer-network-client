import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import './App.css';
import Admin from './Componants/Admin/Admin';
import Event from './Componants/Event/Event';
import EventAdd from './Componants/EventAdd/EventAdd';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import LogIn from './Componants/LogIn/LogIn';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import Register from './Componants/Register/Register';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/registration">
            <Register />
          </PrivateRoute>
          <PrivateRoute path="/event">
            <Event />
          </PrivateRoute>
          <Route path="/dashboard/admin">
            <Admin />
          </Route>
          <Route path="/dashboard/addEvent">
            <EventAdd />
          </Route>
          <PrivateRoute path="/task/:taskId">
            <Register />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
