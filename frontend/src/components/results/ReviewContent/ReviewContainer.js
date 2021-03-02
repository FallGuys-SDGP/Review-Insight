import React from "react";
import "./ReviewContainer.css"

function ReviewContainer(){
  return(
    <div className="reviewBox" style={{width: '50%',height: 'auto',backgroundColor: 'skyblue', borderRadius: '25px', padding: '10px'}}>
      <p> <b>I ordered a folding plug. I did NOT get a folding </b></p>
      <div style={{ display: 'flex', justifyContent: "space-between"}}>
      <p> 2.5 ⭐</p> <p style={{color: "red"}} > Score 5% </p>  
      </div>
      <div className="reviewText" style={{width: 'auto',height: 'auto',backgroundColor: 'lightblue', borderRadius: '25px', padding: '10px'}} >
        <p> Yes, it fits, but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company.</p>
      </div>
    </div> 

  );
}

export default ReviewContainer;