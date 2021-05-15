import React from "react";
import Home2 from "./components/home2/Home2";
import Result from "./components/results/Result";
import "./App.css";
import "./components/results/Tabs.css";
import "./components/home/Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUs from './components/about-us/aboutus'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'
import NavigationBar from "./components/home2/NavigationBar/NavigationBar";
import Explore from "./components/Explore/Explore";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";


function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path="/" component={Home2} />
        <Route exact path="/home" component={Home2} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
       

      </Switch>

      <Footer />
    </Router>

  );
}


export default App;
