import React, {useState} from "react";
import "../results/Tabs.css";
import ReviewContainer from "./ReviewContent/ReviewContainer";


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
      </div>


      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <p>Report Content Here</p>
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
          <div>
            <ReviewContainer/>
            <ReviewContainer/>
            <ReviewContainer/>
          </div>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>

        <h1><a>Apple EarPods</a>Specifications</h1>

        

        <table>
            <h2>General</h2>

            <tr>
              <th>Brand</th>
              <td>Apple</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>AirPods Max Wireless Headphones</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>₹59,900</td>
            </tr>
            <tr>
              <th>Launch Date</th>
              <td>December 2020</td>
            </tr>
            <tr>
              <th>Model Number</th>
              <td>AirPods Max</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>Headphones</td>
            </tr>
            <tr>
              <th>Headphone Type</th>
              <td>Over-Ear</td>
            </tr>
            <tr>
              <th>Connectivity</th>
              <td>Wireless</td>
            </tr>



            <h2>Product details</h2>

            <tr>
              <th>Microphone</th>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Driver Type</th>
              <td>Dynamic</td>
            </tr>
            <tr>
              <th>Driver Size (mm)</th>
              <td>40</td>
            </tr>
            <tr>
              <th>Number of Drivers</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Water Resistant</th>
              <td>No</td>
            </tr>
            <tr>
              <th>Weight (g)</th>
              <td>385.00</td>
            </tr>

         




            <h2>Connectivity features</h2>

            <tr>
                <th>Bluetooth</th>
                <td>Yes</td>
            </tr>

            <tr>
                <th>Bluetooth Version</th>
                <td>5</td>
            </tr>

            <tr>
                <th>Bluetooth Codec Support</th>
                <td>SBC,AAC</td>
            </tr>

            <tr>
                <th>Battery</th>
                <td>features</td>
            </tr>

            <tr>
                <th>Charging Port</th>
                <td>Proprietary</td>
            </tr>


            <tr>
                <th>Battery Life (Hrs)</th>
                <td>20</td>
            </tr>
          </table>


          
          
          
        </div>
      </div>
    </div>
  );
}

export default Tabs;