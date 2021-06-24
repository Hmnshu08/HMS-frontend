import logo from './logo.svg';
import './App.css';
import React, { Component, Components } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navibar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import './App.css';
import { Button } from 'reactstrap';
import Home from './components/Home/Home';
import User from './components/User/User';
import Login from './components/Login/Login';
import NotFound from './components/404/NotFound';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';
import ViewUser from './components/User/ViewUser';
import Guest from './components/Guest/Guest';
import Reservation from './components/Reservation/Reservation';
import Staff from './components/Staff/Staff';
import AddStaff from './components/Staff/AddStaff';
import AddGuest from './components/Guest/AddGuest';
import EditGuest from './components/Guest/EditGuest';
import ViewGuest from './components/Guest/ViewGuest';
import ViewStaff from './components/Staff/ViewStaff';
import EditStaff from './components/Staff/EditStaff';
import ViewRoom from './components/Room/ViewRoom';
import EditRoom from './components/Room/EditRoom';
import AddRoom from './components/Room/AddRoom';
import Room from './components/Room/Room';
import AddReservation from './components/Reservation/AddReservation';
import EditReservation from './components/Reservation/EditReservation';
import ViewReservation from './components/Reservation/ViewReservation';

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
          <Route exact path="/guest" component={Guest}>
          </Route>
          <Route exact path="/guest/add" component={AddGuest}>
          </Route>
          <Route exact path="/guest/EditGuest/:id" component={EditGuest}>
          </Route>
          <Route exact path="/guest/ViewGuest/:id" component={ViewGuest}>
          </Route>
          <Route exact path="/reservation" component={Reservation}>
          </Route>
          <Route exact path="/reservation/add" component={AddReservation}>
          </Route>
          <Route exact path="/reservation/EditReservation/:id" component={EditReservation}>
          </Route>
          <Route exact path="/reservation/ViewReservation/:id" component={ViewReservation}>
          </Route>
          <Route exact path="/staff" component={Staff}>
          </Route>
          <Route exact path="/staff/add" component={AddStaff}>
          </Route>
          <Route exact path="/staff/ViewStaff/:id" component={ViewStaff}>
          </Route>
          <Route exact path="/staff/EditStaff/:id" component={EditStaff}>
          </Route>
          <Route exact path="/auth" component={Login}>
          </Route>
          <Route exact path="/user/add" component={AddUser}>
          </Route>
          <Route exact path="/user/EditUser/:id" component={EditUser}>
          </Route>
          <Route exact path="/user/ViewUser/:id" component={ViewUser}>
          </Route>
          <Route exact path="/room" component={Room}>
          </Route>
          <Route exact path="/room/add" component={AddRoom}>
          </Route>
          <Route exact path="/room/EditRoom/:id" component={EditRoom}>
          </Route>
          <Route exact path="/room/ViewRoom/:id" component={ViewRoom}>
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      
        {/* <Footer></Footer> */}
      </Router>

      
    </div>
  );
}

export default App;
