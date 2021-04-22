import React from "react";
import "./footer.css";
import facebook from "../../images/linksIcons/facebook.jpg";
import instagram from "../../images/linksIcons/instagram.jpg";
import youtube from "../../images/linksIcons/youtube.jpg";
import twitter from "../../images/linksIcons/twitter.png";





function Footer(){
  return(
   
   <div  className = "wrapper-footer" >
        <div className="container-footer">  
        
            <div className = "item-footer1"> 57 Ramakrishna Road,Colombo 6</div>
            <div className = "item-footer1"> +94 112 345567</div>
            <div className = "item-footer1"> review-insight@gmail.com</div>
        </div>
        
        <div>
              <div className="container-footer"> 
                <div className = "item-footer2" style={{color:"#aeacb0"}}> About the Comapany</div>
                <div className = "item-footer2"> We are a Company try to help Online customer to buy genuie product.</div>
              </div>

              {/* <div class="social-links">
                    <p>Stay Connect With Us..</p>
                    <a href="#fb"><img id="fb-icon" title="Facebook" alt="Facebook button" src={faceBook}> 
                    <a href="#twitter"><img id="twitter-icon" title="Twitter" alt="Twitter button" src={twitter}>
                    <a href="#youtube"><img id="youtube-icon" title="Youtube" alt="Youtube button" src={youtube}>
                    
                </div> */}
              
              <div>
              
                <div className= 'social-icon1'><img src={facebook} alt="userIcon" height="40px" /></div> 
                <div className= 'social-icon2'><img src={instagram} alt="userIcon" height="40px" /></div>
                <div className= 'social-icon3'><img src={twitter} alt="userIcon" height="40px" /></div>
                <div className= 'social-icon4'><img src={youtube} alt="userIcon" height="40px" /></div>

              </div>

         </div>
        
     
         
    </div> 
  );

    
}

export default Footer;