import React, { Component } from "react";
import Home from "./components/home/Home";
import Result from "./components/results/Result";
import "./App.css";
import "./components/results/Tabs.css";
import "./components/home/Home.css";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Register from "./components/Register/Register";
import BackendTest from './BackendTest';
import AboutUs from './components/about-us/aboutus';


class  App extends Component{
  constructor(){
    super();
  }

  //   this.state = {
  //     currentUser: null
  //     }
  // }

  // unsubscribeFromAuth = null;

  // componentDidMount(){
  //   this.unsubscribeFromAuth =  WebAuthentication.onAuthStateChanged( user => {
  //     this.setState({ currentUser : user});
  //     console.log(user);
  //   });
  // }

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth();
  // }


  
 
 render(){
    return(
      <Router>
        <div className="app">
          <div class="top-nav">
            <div className="title">
              <b>Review Insight</b>
            </div>
            <nav>
              <ul class="nav-links">
                <Link to="/login">
                  <li><a>Log In / Register </a></li>
                </Link>
                {/* { currentUser ?  
                  <div onClick= {() => auth.signOut()}> Sign Out</div>
                  :
                  <Link to= "/login" > Log In / Register </Link> 
                } */}

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
            <Route path="/login" exact component={LogIn}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/aboutus" exact component={AboutUs}/>

          </Switch>

        </div> 
      </Router>
    );
  }
}

export default App;
