import React from "react";
import "../Specifications/Specifications.css"

const Brand="Apple"
const Model="AirPods Max Wireless Headphones"
const Price="₹59,900"
const Launch_Date="December 2020"
const Model_Number="AirPods Max"
const Type="Headphones"
const Headphone_Type="Over-Ear"
const Connectivity="Wireless"
const Microphone="Yes"
const Driver_Type="Dynamic"
const Driver_Size="40"
const Number_of_Drivers="1"
const Water_Resistant="No"
const Weight="385.00"
const Bluetooth="Yes"
const Bluetooth_Version="5"
const Bluetooth_Codec_Support="SBC,AAC"
const Battery="features"
const Charging_Port="Proprietary"
const Battery_Life="20"


function SpecificationContainer(){
  return(
    <div >
          <table>
            <h2>General</h2>

            <tr>
              <th>Brand</th>
              <td>{Brand}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Launch Date</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Model Number</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Headphone Type</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Connectivity</th>
              <td>{}</td>
            </tr>



            <h2>Product details</h2>

            <tr>
              <th>Microphone</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Driver Type</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Driver Size (mm)</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Number of Drivers</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Water Resistant</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Weight (g)</th>
              <td>{}</td>
            </tr>

         




            <h2>Connectivity features</h2>

            <tr>
                <th>Bluetooth</th>
                <td>{}</td>
            </tr>

            <tr>
                <th>Bluetooth Version</th>
                <td>{}</td>
            </tr>

            <tr>
                <th>Bluetooth Codec Support</th>
                <td>{}</td>
            </tr>

            <tr>
                <th>Battery</th>
                <td>{}</td>
            </tr>

            <tr>
                <th>Charging Port</th>
                <td>{}</td>
            </tr>


            <tr>
                <th>Battery Life (Hrs)</th>
                <td>{}</td>
            </tr>
          </table>
    </div> 
  );
}

export default SpecificationContainer;
