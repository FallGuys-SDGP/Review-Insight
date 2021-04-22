import React from "react";

import "../../components/footer/footer.css";


function Footer(){
    return(
      
     <div>
         <div class="footer">
                <div class="social-links">
                    <p>Stay Connect With Us..</p>
                    <a href="#fb"><img id="fb-icon" title="Facebook" alt="Facebook button" src="images/facebook.png"/></a>
                    <a href="#twitter"><img id="twitter-icon" title="Twitter" alt="Twitter button" src="images/twitter.png"/></a>
                    <a href="#youtube"><img id="youtube-icon" title="Youtube" alt="Youtube button" src="images/youtube.png"/></a>
                </div>

                <div class="navi-links">
                    <div class="impotant-links">
                        <p>Important Links</p>
                        <ul>
                            <li><a href="https://www.police.lk/" target="_blank">Sri Lankna Police</a></li><br></br>
                            <li><a href="https://www.army.lk/" target="_blank">Sri Lankan Army</a></li><br></br>
                        </ul>
                    </div>

                    <div class="about-site">
                        <p>About the Site</p>
                        <ul>
                            <li><a href="sitemap.html">Site Map</a></li><br></br>
                            <li><a href="quiz.html">Quiz</a></li><br></br>
                            <li><a href="members.html">Web Development Team</a></li>
                        </ul>
                    </div>

                    <div class="page-links">
                        <p>Menu</p>
                        <ul>
                            <li><a href="index.html">Home</a></li> <br></br>
                            <li><a href="about.html">About Sri Lanka</a></li> <br></br>
                            <li><a href="gallery.html">Gallery</a></li><br></br>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>

                </div>

                <div class="down-logo"> 
                    <p>Proud Projet By</p>
                    <img id="footer-logo" src="images/iit-logo.png" title="IIT Logo" alt="IIT LOGO"/>
                </div>
            </div>
            

            <div class="copyrights-note">
                <p id="copyrights-note-text">Copyright  2020 | &copy; Visit Colombo | All Rights Reserved | Design By: <a href="student2.html">Nathindu Dias</a></p>
            </div>
        </div>
     
    );
}
  
export default Footer;

