import React from "react";
import "../Specification/Specification.css"

const reviewTitle = "I ordered a folding plug. I did NOT get a folding"
const reviewText = "Yes, it fits, but the product was mis-represented, but the product was mis-represented,but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company."
const rating = 2.5
const score = "5%"

function SpecificationContainer(){
  return(
    <div className="reviewBox">
      <p> <b> {reviewTitle}  </b></p>
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
      <p> {rating} ⭐</p> <p style={{color: "red"}} > Score {score} </p>  
      </div>
      <div className="reviewText">
        <p>{reviewText} </p>
      </div>
    </div> 
  );
}

export default SpecificationContainer;
