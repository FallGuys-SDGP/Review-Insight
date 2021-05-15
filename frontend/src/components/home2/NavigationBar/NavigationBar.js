import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./NavigationBar.css"



function NavigationBar() {
    return (
        <div className='nav'>
            <ul className="nav-links">
                
                <li> <a><Link to="/"> Review Insight </Link> </a> </li>
            </ul>

            <ul className="nav-links" >
                <li> <a> <Link to="/"> Home         </Link> </a> </li>
                <li> <a> <Link to="/explore"> Explore   </Link> </a> </li>
                <li> <a> <Link to="/aboutus"> About Us  </Link> </a> </li>
                <li> <a> <Link to="/contact"> Contact   </Link> </a> </li>
                <li> <a> <Link to="/help"> Help         </Link> </a> </li>
                <li id= "nav-btn"> <a> <Link to="/login"> Login       </Link> </a> </li>
                <li id = "nav-btn"> <a> <Link to="/signup"> Sign-Up    </Link> </a> </li>
            </ul>

        </div>
    );


}
export default NavigationBar;