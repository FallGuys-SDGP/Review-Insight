import React from "react";
import Result from "./components/Result";
import link1 from "./components/link1";
import "./App.css";
import "./components/Tabs.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="app">

        <div class="top-nav">
          <nav>
            <ul class="nav-links">
              <Link to="/link4">
                <li><a>link 4</a></li>
              </Link>
              <Link to="/link3">
                <li><a>link 3</a></li>
              </Link>
              <Link to="/link2">
                <li><a>link 2</a></li>
              </Link>
              <Link to="/link1">
                <li><a>link 1</a></li>
              </Link>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Result}/>
          <Route path="/link1" exact component={link1}/>
          {/* <Route path="/link2" exact component={link2}/> */}
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
