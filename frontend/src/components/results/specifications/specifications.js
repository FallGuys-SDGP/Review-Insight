import React from "react";
import "../Specifications/Specifications.css"
import logo from '../../../../src/appleImage.jpg';

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
          <img src={logo} className="App-logo" alt="logo" height="100" ></img> 
          <table>
            <h2>General</h2>

            <tr>
              <th>Brand</th>
              <td>{Brand}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{Model}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{Price}</td>
            </tr>
            <tr>
              <th>Launch Date</th>
              <td>{Launch_Date}</td>
            </tr>
            <tr>
              <th>Model Number</th>
              <td>{Model_Number}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{Type}</td>
            </tr>
            <tr>
              <th>Headphone Type</th>
              <td>{Headphone_Type}</td>
            </tr>
            <tr>
              <th>Connectivity</th>
              <td>{Connectivity}</td>
            </tr>



            <h2>Product details</h2>

            <tr>
              <th>Microphone</th>
              <td>{Microphone}</td>
            </tr>
            <tr>
              <th>Driver Type</th>
              <td>{Driver_Type}</td>
            </tr>
            <tr>
              <th>Driver Size (mm)</th>
              <td>{Driver_Size}</td>
            </tr>
            <tr>
              <th>Number of Drivers</th>
              <td>{Number_of_Drivers}</td>
            </tr>
            <tr>
              <th>Water Resistant</th>
              <td>{Water_Resistant}</td>
            </tr>
            <tr>
              <th>Weight (g)</th>
              <td>{Weight}</td>
            </tr>

         




            <h2>Connectivity features</h2>

            <tr>
                <th>Bluetooth</th>
                <td>{Bluetooth}</td>
            </tr>

            <tr>
                <th>Bluetooth Version</th>
                <td>{Bluetooth_Version}</td>
            </tr>

            <tr>
                <th>Bluetooth Codec Support</th>
                <td>{Bluetooth_Codec_Support}</td>
            </tr>

            <tr>
                <th>Battery</th>
                <td>{Battery}</td>
            </tr>

            <tr>
                <th>Charging Port</th>
                <td>{Charging_Port}</td>
            </tr>


            <tr>
                <th>Battery Life (Hrs)</th>
                <td>{Battery_Life}</td>
            </tr>
          </table>
    </div> 
  );
}

export default SpecificationContainer;
