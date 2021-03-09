import React from "react";
import "../about-us/aboutus.css";
import uwin from "../image/members/uwin.jpeg"
//import{TextField,Button} from '@material-ui/core';

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
                    <p class = "fontType">uwin</p>
                </div>

                <div class = "navod">
                    <img src = "images/members/navod.jpg"   alt="Navod"/>
                    <p class = "fontType">navod</p>
				</div>

				<div class = "shanthosh">
                    <img src = "images/members/shanthosh.jpg"   alt="Shanthosh"/>
                    <p class = "fontType">shanthosh</p>
                </div>

        
            </div>
            

        </div>

    );
}

export default AboutUs;