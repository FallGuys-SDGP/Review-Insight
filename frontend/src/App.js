import React from "react";
import Home from "./components/home/Home";
import "./App.css";
import "./components/results/Tabs.css";
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
              <Link to="/Home">
                <li><a>Home</a></li>
              </Link>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Home" exact component={Home}/>
          {/* <Route path="/link2" exact component={link2}/> */}
        </Switch>

      </div> 
    </Router>
  );
}

export default App;
