import React from "react";
import Home from "./components/home/Home";
import Result from "./components/results/Result";
import "./App.css";
import "./components/results/Tabs.css";
import "./components/home/Home.css";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LogIn from './components/log-in/login';

function App(){
  return(
    <Router>
      <div className="app">
        <div class="top-nav">
          <nav>
            <ul class="nav-links">
              <Link to="/login">
                <li><a>Log In</a></li>
              </Link>
              <Link to="/link3">
                <li><a>Contact</a></li>
              </Link>
              <Link to="/link2">
                <li><a>About Us</a></li>
              </Link>
              <Link to="/home">
                <li><a>Home</a></li>
              </Link>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/result" exact component={Result}/>
          <Route path="/login" exact component={LogIn}/>

        </Switch>

      </div> 
    </Router>
  );
}

export default App;
