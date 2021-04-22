import React from "react";
import "../ReviewContent/ReviewContainer.css"

const reviewTitle = "I ordered a folding plug. I did NOT get a folding"
const reviewText = "Yes, it fits, but the product was mis-represented, but the product was mis-represented,but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company."
const rating = 2.5
const score = "5%"

function ReviewContainer(){
  var reportResponse = []
	var specificationResponse = [] 

	if(localStorage.getItem('mainResponse').length > 0) {
		let response = JSON.parse(localStorage.getItem('mainResponse'))
		console.log("Inside report - ", response)
		// specificationResponse = response
		reportResponse = response
	}
	reportResponse = reportResponse.predictionResult.reviewData
	specificationResponse = specificationResponse.specification 
	console.log('Report response', reportResponse)
	// console.log('Specification Response ', specificationResponse)

  return(
    <div className="reviewBox">
      {reportResponse.map((index) =>(
        <div>
          <p> <b> {index.summary}  </b></p>

            <div style={{ display: 'flex', justifyContent: "space-between"}}>
              <p> {index.overall} ⭐</p> <p style={{color: "red"}} > Score :  {index.predict} </p>  
          </div>

          <div className="reviewText">
            <p>{index.reviewText} </p>
          </div>
        </div>
      ))}
    </div> 

  );
}

export default ReviewContainer;
