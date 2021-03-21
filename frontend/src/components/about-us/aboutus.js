import React from "react";


import "../../components/about-us/aboutus.css";
import uwin from "../../images/members/uwin.jpg";
import navod from "../../images/members/navod.jpg";
import shanthosh from "../../images/members/shanthosh.jpg";
import linkedIn from "../../images/linksIcons/linkedIn.jpeg";
import github from "../../images/linksIcons/github.jpeg";

//import{TextField,Button} from '@material-ui/core';

function AboutUs(){
    return(
        <div className = "about-us">
            <h1 class ="nameTeam">FallGuys......</h1>
            <div class = "backgroundAboutus"> 
               
                <div>
                    <h2 class ="nameIntro"> Introduction</h2>
                    <p> wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                </div>

                <div>
                    <h2 class = "nameMission">Mission</h2>
                    <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                </div>

                <div>
                    <h2 class = "namevission">Vision</h2>
                       <p> wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        </p>
                </div>
            </div>

            <div class = "member">
                <h2 class = "nameMembers">Team Members</h2>
                <div class = "uwin">
                    <div class = "image">
                        <img src = {uwin} alt="Uwin" width="200" height="200" />
                        <div class="overlay">
                            <div class = "text">    
                                <ul>
                                    <li>Uwin Vidanage</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>
                        </div>
                    </div>    
                    <div class= "link">
                        <a href = "https://www.linkedin.com/in/uwinvidanage" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                        <a href = "http://github.com/uwin" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                    </div>
                </div>

                <div class = "navod">
                    <div class = "image">
                        <img src = {navod}   alt="Navod" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">
                                <ul>
                                    <li>Navod Zoysa </li>                                    
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>
                        </div>
                    </div>
                   
                    <a href = "" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                  
                    
				</div>

				<div class = "shanthosh">
                    <div class = "image">
                        <img src = {shanthosh}   alt="Shanthosh" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">    
                                <ul>
                                    <li>Shanthosh Srikantha</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>    
                        </div>
                    </div>
                   
                    <a href = "https://www.linkedin.com/in/shanthosh-srikantha-49ba94167/" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "https://github.com/shanthosh-srikan" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                   
                </div>

                <div class = "viraj">
                    <div class = "image">
                        <img src = {shanthosh}   alt="Shanthosh" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">    
                                <ul>
                                    <li>Shanthosh Srikantha</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>    
                        </div>
                    </div>
                   
                    <a href = "https://www.linkedin.com/in/shanthosh-srikantha-49ba94167/" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "https://github.com/shanthosh-srikan" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                   
                </div>

                <div class = "dinuvi">
                    <div class = "image">
                        <img src = {shanthosh}   alt="Shanthosh" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">    
                                <ul>
                                    <li>Shanthosh Srikantha</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>    
                        </div>
                    </div>
                   
                    <a href = "https://www.linkedin.com/in/shanthosh-srikantha-49ba94167/" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "https://github.com/shanthosh-srikan" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                   
                </div>

                <div class = "udari">
                    <div class = "image">
                        <img src = {shanthosh}   alt="Shanthosh" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">    
                                <ul>
                                    <li>Shanthosh Srikantha</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>    
                        </div>
                    </div>
                   
                    <a href = "https://www.linkedin.com/in/shanthosh-srikantha-49ba94167/" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "https://github.com/shanthosh-srikan" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                   
                </div>

        
            </div>

             <div class ="teamTheam"> One Team One Goal......!
                {/* <path id="myPath" d="M90,400 90,50 "/>        
                <textpath href="#myPath">
                            One Team One Goal......!
                            
                            
                </textpath> */}
            </div>            

        </div>

    );
}

export default AboutUs;