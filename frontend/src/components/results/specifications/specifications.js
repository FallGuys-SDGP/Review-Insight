import React from "react";
import "../Specifications/Specifications.css"

const reviewTitle = "I ordered a folding plug. I did NOT get a folding"
const reviewText = "Yes, it fits, but the product was mis-represented, but the product was mis-represented,but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company."
const rating = 2.5
const score = "5%"

function SpecificationContainer(){
  return(
    <div >
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
  );
}

export default SpecificationContainer;
