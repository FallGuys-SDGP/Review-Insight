import React from "react";
// import Result from "./components/Result";
import Home from "./components/home/Home";
import link1 from "./components/link1";
import "./App.css";
import "./components/Tabs.css";
import "./components/home/Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="app">
        <div class="top-nav">
          <nav>
            <ul class="nav-links">
              <Link to="/link4">
                <li><a>Log In</a></li>
              </Link>
              <Link to="/link3">
                <li><a>Contact</a></li>
              </Link>
              <Link to="/link2">
                <li><a>About Us</a></li>
              </Link>
              <Link to="/link1">
                <li><a>Home</a></li>
              </Link>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/link1" exact component={link1}/>
          {/* <Route path="/link2" exact component={link2}/> */}
        </Switch>

      </div> 
    </Router>
  );
}

export default App;
