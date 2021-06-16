// import logo from './logo.svg';
import React, { Component, Components } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navibar from "./components/Navbar/Navbar";
import './App.css';
import { Button } from 'reactstrap';
import Home from './components/Home/Home';
import User from './components/User/User';
import Login from './components/Login/Login';
import NotFound from './components/404/NotFound';





function App() {





  return (
    <div className="App">
      <Router>
        <Navibar></Navibar>
        <Switch>
          
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/home" component={Home}>
          </Route>
          <Route exact path="/user" component={User}>
          </Route>
          <Route exact path="/auth" component={Login}>          
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
