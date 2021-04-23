import React from "react";
import "../ReviewContent/ReviewContainer.css"

const reviewTitle = "I ordered a folding plug. I did NOT get a folding"
const reviewText = "Yes, it fits, but the product was mis-represented, but the product was mis-represented,but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company."
const rating = 2.5
const score = "5%"



let sy1 = {
  backgroundColor: "rgb(28, 15, 136)",
};
let sy2 = {
  backgroundColor: "rgb(28, 15, 136)",
};
let sy3 = {
  backgroundColor: "rgb(28, 15, 136)",
};
let sy4 = {
  backgroundColor: "rgb(28, 15, 136)",
};
let sy5 = {
  backgroundColor: "rgb(28, 15, 136)",
};
let sy6 = {
  backgroundColor: "rgb(28, 15, 136)",
};
let sy7 = {
  backgroundColor: "rgb(28, 15, 136)",
};
let sy8 = {
  backgroundColor: "rgb(28, 15, 136)",
};



let test="yes"


function f1( text ) {
  if(text === 'neu') {
    sy1 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy1 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy1 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy1 = {
      backgroundColor: "red",
    }
  }
}
function f2( text ) {
  if(text === 'neu') {
    sy2 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy2 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy2 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy2 = {
      backgroundColor: "red",
    }
  }
}

function f3( text ) {
  if(text === 'neu') {
    sy3 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy3 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy3 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy3 = {
      backgroundColor: "red",
    }
  }
}

function f4( text ) {
  if(text === 'neu') {
    sy4 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy4 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy4 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy4 = {
      backgroundColor: "red",
    }
  }
}

function f5( text ) {
  if(text === 'neu') {
    sy5 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy5 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy5 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy5 = {
      backgroundColor: "red",
    }
  }
}

function f6( text ) {
  if(text === 'neu') {
    sy6 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy6 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy6 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy6 = {
      backgroundColor: "red",
    }
  }
}

function f7( text ) {
  if(text === 'neu') {
    sy7 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy7 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy7 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy7 = {
      backgroundColor: "red",
    }
  }
}

function f8( text ) {
  if(text === 'neu') {
    sy8 = {
      backgroundColor: "yellow",
    }
  }
  if(text === 'NA') {
    sy8 = {
      backgroundColor: "gray",
    }
  }
  if(text === 'pos') {
    sy8 = {
      backgroundColor: "green",
    }
  }
  if(text === 'neg') {
    sy8 = {
      backgroundColor: "red",
    }
  }
}








function ReviewContainer() {


  var reportResponse = []
  var specificationResponse = []

  if (localStorage.getItem('mainResponse').length > 0) {
    let response = JSON.parse(localStorage.getItem('mainResponse'))
    console.log("Inside report - ", response)
    // specificationResponse = response
    reportResponse = response
  }
  reportResponse = reportResponse.predictionResult.reviewData
  specificationResponse = specificationResponse.specification
  console.log('Report response', reportResponse)
  // console.log('Specification Response ', specificationResponse)




  return (


    <div className="reviewBox">
      {reportResponse.map((index) => (
        <div className="oneReview">

          {f1(index.Audio_label)}
          {f2(index.Battery_label)}
          {f3(index.Build_label)}
          {f4(index.Connection_label)}
          {f5(index.Price_label)}
          {f6(index.Service_label)}
          {f7(index.Shipping_label)}
          {f8(index.Warranty_label)}

 













          <div>
            <p> <b> {index.summary}  </b></p>

            <div style={{ display: 'flex', justifyContent: "space-between" }}>
              <p> {index.overall} ⭐</p> <p style={{ color: "red" }} > Score :  {index.predict} </p>
            </div>

            <div className="reviewText">
              <p>{index.reviewText} </p>
            </div>
            <div className="itemSet">
              <div style={sy1} id="i1" className="items">
                <span> <p className="iteamName">Audio</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>

              <div style={sy2} id="i2" className="items">
                <span> <p className="iteamName">Battery</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>

              <div style={sy3} id="i3" className="items">
                <span> <p className="iteamName">Build</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>

              <div style={sy4} id="i4" className="items">
                <span> <p className="iteamName">Connection</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>

              <div style={sy5} id="i5" className="items">
                <span> <p className="iteamName">Price</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>

              <div style={sy6} id="i6" className="items">
                <span> <p className="iteamName">Service</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>

              <div style={sy7} id="i7" className="items">
                <span> <p className="iteamName">Shipping</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>

              <div style={sy8} id="i8" className="items">
                <span> <p className="iteamName">Warranty</p></span>
                {/* <span> <div className="iteamStatus"></div></span> */}
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>


  );
}

export default ReviewContainer;
