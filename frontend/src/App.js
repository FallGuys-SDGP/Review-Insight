import React from "react";
import Home from "./components/home/Home";
import Result from "./components/results/Result";
import "./App.css";
import "./components/results/Tabs.css";
import "./components/home/Home.css";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AboutUs from './components/about-us/aboutus'
import Contact from './components/contact/contact'


function App(){
  return(
    <Router>
      <div className="app">
        <div class="top-nav">
          <dic className="title">
            <b>Review Insight</b>
          </dic>
          <nav>
            <ul class="nav-links">
              <Link to="/contact">
                <li><a>Contact</a></li>
              </Link>
              <Link to="/aboutus">
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
          <Route path="/aboutus" exact component={AboutUs}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>

      </div> 
    </Router>
  );
}


export default App;
