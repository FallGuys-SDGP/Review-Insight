import React from "react";
import Result from "./components/Result";
import link1 from "./components/link1";
import "./App.css";
import "./components/Tabs.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logIn from "./components/log-in/login";
import register from "./components/register/register";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function App(){
  return(
    <Router>
      <div className="app">

        <div class="top-nav">
          
          <nav>
            <ul class="nav-links">
             
              <Link to="/register">
                <li><a>Register</a></li>
              </Link>
              <Link to="/login"> 
                <li><a>Log In</a></li>
              </Link>
              <Link to="/link1">
                <li><a>link1</a></li>
              </Link>
              <Link to="/">
                <li><a>Home</a></li>
              </Link>
              <AmplifySignOut/>
             
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Result}/>
          <Route path="/link1" exact component={link1}/>
          <Route path="/login" exact component={logIn}/>
          <Route path="/register" exact component={register}/>
        </Switch>
      </div> 
    </Router>
  );
}

export default withAuthenticator(App);
