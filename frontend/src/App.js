import React from "react";
import Home from "./components/home/Home";
import Result from "./components/results/Result";
import "./App.css";
import "./components/results/Tabs.css";
import "./components/home/Home.css";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LogIn from './components/log-in/login';
import Register from "./components/register/register";
import AboutUs from './components/about-us/aboutus'
import Contact from './components/contact/contact'


function App(){
  return(
  <>
      <Router>
        <div className="app">
          <div class="top-nav">
            <nav>
              <ul>
                <Link to ="/home"> <li><a>Review Insight </a></li>  </Link>
              </ul>
              
              <ul class="nav-links">
                <Link to="/home">     <li><a> Home </a></li>      </Link>
                <Link to="/contact">  <li><a> Contact </a></li>   </Link>
                <Link to="/aboutus">  <li><a> About Us </a></li>  </Link>
                <Link to="/login">    <li><a> Log In / Register </a></li>  </Link>        
              </ul>
            </nav>
          </div>

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/result" exact component={Result}/>
            <Route path="/login" exact component={LogIn}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/aboutus" exact component={AboutUs}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>

        </div> 
      </Router>
  </>
  );
}

export default App;