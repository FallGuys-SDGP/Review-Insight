import React from "react";
import "../../components/about-us/aboutus.css";
import linkedIn from "../../images/linksIcons/linkedIn.png";
import github from "../../images/linksIcons/github.png";

import viraj from "../../images/members/viraj.jpg";
import nawod from "../../images/members/nawod.jpg";
import uwin from "../../images/members/uwin.jpg";
import udari from "../../images/members/udari.jpg";
import santhush from "../../images/members/santhush.jpg";
import dinuwi from "../../images/members/dinuwi.jpg";

//import{TextField,Button} from '@material-ui/core';

function AboutUs() {
    return (
        <div className="about-us">

            <div class="main">
                <h1 style={{ fontSize: "50px" }}>Hi there, we’re Review Insight</h1>

                <p class="about">Review Insight's mission is to bring trust and transparency to the
                Internet by eliminating misinformation and fraud, starting
                with eCommerce. Review Insight protects consumers while saving them
                both time and money by using AI to detect fraudulent product
                reviews and third-party sellers in real-time. Our proprietary
                technology analyzes billions of consumer reviews to quickly identify
                suspicious activity and then recommend better alternatives to consumers.
                We got tired of getting ripped off online, so we made it our mission
                    to never let it happen to anyone else.</p>
s


            </div>











            <h1 class="ourTeam">OUR TEAM</h1>
            <div class="mainBox">
                <div class="subbox2">
                    <div class="photo"><img src={uwin} className="App-logo" alt="logo" height="100%" ></img> </div>
                    <div class="details">
                        <div class="namee">Uwin Vidanage</div>
                        <div class="poost" >Co-Founder</div>
                        <div class="links">
                            <a href="http://github.com/uwin"> <div class="git"><img src={github} className="App-logo" alt="logo" height="100%" ></img></div></a>
                            <a href="https://www.linkedin.com/in/uwinvidanage"><div class="ld"><img src={linkedIn} className="App-logo" alt="logo" height="100%" ></img></div></a>
                        </div>
                    </div>
                </div>
                <div class="subbox2">
                    <div class="photo"><img src={nawod} className="App-logo" alt="logo" height="100%" ></img> </div>
                    <div class="details">
                        <div class="namee">Navod</div>
                        <div class="poost">Co-Founder</div>
                        <div class="links">
                            <a href="https://github.com/navodzoysa"> <div class="git"><img src={github} className="App-logo" alt="logo" height="100%" ></img></div></a>
                            <a href="https://www.linkedin.com/in/navodzoysa/"><div class="ld"><img src={linkedIn} className="App-logo" alt="logo" height="100%" ></img></div></a>
                        </div>

                    </div>
                </div>
                <div class="subbox2">
                    <div class="photo"><img src={santhush} className="App-logo" alt="logo" height="100%" ></img> </div>
                    <div class="details">
                        <div class="namee">Shanthosh</div>
                        <div class="poost">Co-Founder</div>
                        <div class="links">
                            <a href="https://github.com/shanthosh-srikan"> <div class="git"><img src={github} className="App-logo" alt="logo" height="100%" ></img></div></a>
                            <a href="https://www.linkedin.com/in/shanthosh-srikantha-49ba94167/"><div class="ld"><img src={linkedIn} className="App-logo" alt="logo" height="100%" ></img></div></a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="mainBox">
                <div class="subbox2">
                    <div class="photo"><img src={viraj} className="App-logo" alt="logo" height="100%" ></img> </div>
                    <div class="details">
                        <div class="namee">Viraj</div>
                        <div class="poost">Co-Founder</div>
                        <div class="links">
                            <a href="https://github.com/virajprofile"> <div class="git"><img src={github} className="App-logo" alt="logo" height="100%" ></img></div></a>
                            <a href="https://www.linkedin.com/in/virajprofile/"><div class="ld"><img src={linkedIn} className="App-logo" alt="logo" height="100%" ></img></div></a>
                        </div>

                    </div>
                </div>
                <div class="subbox2">
                    <div class="photo"><img src={dinuwi} className="App-logo" alt="logo" height="100%" ></img> </div>
                    <div class="details">
                        <div class="namee">Dinuvi</div>
                        <div class="poost">Co-Founder</div>
                        <div class="links">
                            <a href="https://github.com/dinuviMunasinghe"> <div class="git"><img src={github} className="App-logo" alt="logo" height="100%" ></img></div></a>
                            <a href="https://www.linkedin.com/in/dinuvi-munasinghe-65a014194/"><div class="ld"><img src={linkedIn} className="App-logo" alt="logo" height="100%" ></img></div></a>
                        </div>

                    </div>
                </div>
                <div class="subbox2">
                    <div class="photo"><img src={udari} className="App-logo" alt="logo" height="100%" ></img> </div>
                    <div class="details">
                        <div class="namee">Udari</div>
                        <div class="poost">Co-Founder</div>
                        <div class="links">
                            <a href="https://github.com/udariwelipitiya"> <div class="git"><img src={github} className="App-logo" alt="logo" height="100%" ></img></div></a>
                            <a href="https://www.linkedin.com/in/w-m-udari-priyanvada-welipitiya-bb221b196/"><div class="ld"><img src={linkedIn} className="App-logo" alt="logo" height="100%" ></img></div></a>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    );
}

export default AboutUs;