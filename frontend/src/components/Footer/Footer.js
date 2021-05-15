import React from "react";
import "./Footer.css";

import faceBook from '../../images/home2/facebook.png';
import whatsApp from '../../images/home2/whatsapp.png';
import instagram from '../../images/home2/instagram.png';
import messanger from '../../images/home2/messanger.png';
import twitter from '../../images/home2/twitter.png';


// import Typography from '@material-ui/core/Typography';



function Footer() {
  return (
    <div className="footer-wrapper" >

      <div className="footer-contact-links" style = {{"text-align":"center"}}>

        <h2 > Keep In Touch </h2>
        <img src={faceBook} />
        <img src={instagram} />
        <img src={whatsApp} />
        <img src={messanger} />
        <img src={twitter} />
      </div>

      <div className="footer-container">
        <div className="footer-link-container">
          <ul>
            <li className="footer-links">  ReviewInsight.com         </li>
            <li className="footer-links">  57 Ramakrishna Road ,Colombo 6 </li>
            <li className="footer-links">  +94 112 345567            </li>
            <li className="footer-links">  review-insight@gmail.com   </li>
          </ul>
        </div>

        <div className="footer-link-container">
          <ul >
            <li className="footer-links" style={{ color: "green" }}> About the Comapany</li>
            <li className="footer-links"> We are a Company try to help Online customer to buy genuie product.</li>
          </ul>
        </div>

      </div>

      <div className = "footer-container" >
        <li className="footer-links">Copyright @2021 | Designed With by Review Insight</li>
      </div>
   
    </div>
  );
}




// function Footer() {
//   return (
//     <div class="footer">
//       <div class="foterLinks">
//         <p>Review insight</p>
//       </div>
//       <p class="footerCopy">Copyright @2021 | Designed With by Review Insight</p>
//     </div>
//   );
// }



export default Footer;