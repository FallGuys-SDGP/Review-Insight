import React, {useState} from "react";
import "../results/Tabs.css";
import ReviewContainer from "./ReviewContent/ReviewContainer";
import Specifications from "./Specifications/Specifications";
import Analytics from "./Analytics/Analytics";

import Report from "./Report/Report";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
          Report
        </button>

        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
          Review
        </button>

        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
          Specification
        </button>

        <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
          Analytics
        </button>
      </div>


      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <Report/>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
                {/* <div className="reviewBox" style={{width: 'auto',height: 'auto',backgroundColor: 'darkgrey',borderRadius: '5%'}}>
                  <div className="reviewRow" style={{marginLeft: '4%',marginTop:'4%'}} >
                    <p> <b>I ordered a folding plug.I did NOT get a folding</b></p>
                    <p> 2.5 ⭐</p>
                  </div>
                  <div className="reviewContent" style={{width: '98%',height: '80%',backgroundColor: 'lightgrey', marginLeft:'1%', marginBottom: '5%',borderRadius: '5%', wordWrap: "break-word"}} >
                    <p>Yes, it fits, but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company.</p>
                  </div>
                </div>  */}
          <div style={{overflow:"auto", height:"950px"}}>
            <ReviewContainer/>
          </div>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          <Specifications/>
        </div>

        <div className={toggleState === 4 ? "content  active-content" : "content"}>
          <Analytics/>
        </div>

      </div>
    </div>
  );
}

export default Tabs;
