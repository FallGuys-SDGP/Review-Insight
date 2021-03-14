import React from "react";
import "../about-us/aboutus.css";
import uwin from "../images/members/uwin.jpg"
import navod from "../images/members/navod.jpg"
import shanthosh from "../images/members/shanthosh.jpg"

function AboutUs(){
    return(
        <div className = "about-us">
            <div>
                <h1 class ="nameIntro"> Introduction</h1>
            </div>
            
            <div>
                <h1 class = "nameMission">Mission</h1>
            </div>

            <div>
                <h1 class = "namevission">vission</h1>
            </div>
            
            <div class = "member">
                <h1 class = "nameMembers">Team Members</h1>
                <div class = "uwin">
                    <img src = {uwin} alt="Uwin" />
                    <p class = "fontType">Uwin</p>
                </div>

                <div class = "navod">
                    <img src = {navod}  alt="Navod"/>
                    <p class = "fontType">Navod</p>
				</div>

				<div class = "shanthosh">
                    <img src = {shanthosh}   alt="Shanthosh"/>
                    <p class = "fontType">Shanthosh</p>
                </div>

        
            </div>
            

        </div>

    );
}

export default AboutUs;