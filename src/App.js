import React from 'react'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RegisterForm from './components/Dashboard/Admins/RegisterForm';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/register" component={RegisterForm}/>
    </Router>
  );
}

export default App;
