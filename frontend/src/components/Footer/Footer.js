import React from "react";
import "./Footer.css";
import Typography from '@material-ui/core/Typography';
import faceBook from '../../images/footer/facebook.png';




function Footer(){
  return(
   
   <div  className = "wrapper-footer" >
        <div className="container-footer">  
        
            <div className = "item-footer"> 57 Ramakrishna Road,Colombo 6</div>
            <div className = "item-footer"> +94 112 345567</div>
            <div className = "item-footer"> review-insight@gmail.com</div>
        </div>
        
        <div>
              <div className="container-footer"> 
                <div className = "item-footer" style={{color:"green"}}> About the Comapany</div>
                <div className = "item-footer"> We are a Company try to help Online customer to buy genuie product.</div>
              </div>
              
              <div>
              
                <div className= 'social-icon'><img src={faceBook} alt="userIcon" height="40px" /></div>
                {/* <div className= 'social-icon'><img src={instagram} alt="userIcon" height="40px" /></div>
                <div className= 'social-icon'><img src={twitter} alt="userIcon" height="40px" /></div> */}

              </div>

         </div>
        
     
         
    </div> 
  );

    
}

export default Footer;