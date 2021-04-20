import React from "react";
import "../../components/about-us/aboutus.css";
import uwin from "../../images/members/uwin.jpg";
import navod from "../../images/members/navod.jpg";
import shanthosh from "../../images/members/shanthosh.jpg";
import viraj from "../../images/members/viraj.png";
import udari from "../../images/members/udari.png";
import dinuvi from "../../images/members/dinuvi.png";
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
                    <p> 
                    Our open-source, API-first, and decentralized approach helps developers and architects to be more productive and rapidly build digital 
                    products to meet demand. The company’s open-source products for developing, reusing, and managing APIs and integration flows are built on proven technology. 
                    </p>
                </div>

                <div>
                    <h2 class = "nameMission">Mission</h2>
                    <p>our mission is to enable businesses to do what they want to do, and (to) give them the absolutely minimum amount of technology we can create,
                         to make them maximally productive
                    </p>
                </div>

                <div>
                    <h2 class = "namevission">Vision</h2>
                       <p> The journey is your destination
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
                        <img src = {viraj}   alt="Shanthosh" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">    
                                <ul>
                                    <li>Viraj Sammera</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>    
                        </div>
                    </div>
                   
                    <a href = "https://www.linkedin.com/in/virajprofile/" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "https://github.com/virajprofile" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                   
                </div>

                <div class = "dinuvi">
                    <div class = "image">
                        <img src = {dinuvi}   alt="dinuvi" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">    
                                <ul>
                                    <li>Dinuvi Munasinghe</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>    
                        </div>
                    </div>
                   
                    <a href = "https://www.linkedin.com/in/dinuvi-munasinghe-65a014194/" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "https://github.com/dinuviMunasinghe" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                   
                </div>

                <div class = "udari">
                    <div class = "image">
                        <img src = {udari}   alt="udari" width="200" height="200"/>
                        <div class="overlay">
                            <div class ="text">    
                                <ul>
                                    <li> Udari welipitiya</li>
                                </ul>
                                <p class ="coFounder">Co Founder</p>
                            </div>    
                        </div>
                    </div>
                   
                    <a href = "https://www.linkedin.com/in/w-m-udari-priyanvada-welipitiya-bb221b196/" target ="blank"><img id ="linkedin" src = {linkedIn}   alt="Linkedin" width="50" height="50"/></a>
                    <a href = "https://github.com/udariwelipitiya" target ="blank"><img id ="github" src = {github}   alt="github" width="72" height="72"/></a>
                   
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