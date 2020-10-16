import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard/AdminDashboard';
import MakeAdmin from './Components/AdminDashboard/MakeAdmin/MakeAdmin';
import ServiceList from './Components/AdminDashboard/ServiceList/ServiceList';
import CustomerMainDashboard from './Components/CustomerDashboard/CustomerMainDashboard/CustomerMainDashboard';
import CustomerReview from './Components/CustomerDashboard/CustomerReview/CustomerReview';
import CustomerServiceList from './Components/CustomerDashboard/CustomerServiceList/CustomerServiceList';
import AddService from './Components/AdminDashboard/AddService/AddService';


export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/serviceList">
            <AdminDashboard />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/customer-order">
            <CustomerMainDashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/customer-review">
            <CustomerReview />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/service-list">
            <CustomerServiceList />
          </PrivateRoute>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
};

export default App;