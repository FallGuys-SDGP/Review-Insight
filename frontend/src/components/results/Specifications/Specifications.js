import React from "react";
import "./Specifications.css"
import logo from '../../../../src/images/temp/appleImage.jpg';


 var Brand = "1"   
 var  Model= "1"
 var Price= "1"
 var Launch_Date= "1"
 var Model_Number= "1"         
 var  Type= "1"   
 var Headphone_Type= "1"
 var Connectivity= "1"
 var Microphone= "1"
 var  Driver_Type= "1"
 var  Driver_Size= "1"
 var  Number_of_Drivers  = "1"
 var  Water_Resistant   = "1"
 var  Weight   = "1"
 var  Bluetooth  = "1"
 var Bluetooth_Version = "1" 
 var Bluetooth_Codec_Support = "1" 
 var Battery  = "1"
 var Charging_Port  = "1"               
 var Battery_Life  = "1"


function Specifications() {

  return (
    <div >
      <div class="set">
        <div class="subSet">
        <img src={logo} className="App-logo" alt="logo" height="150" ></img> 
        </div>
        <div class="subSet">
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
          </table>
        </div>
      </div>

      <div class="set">
        <div class="subSet">
        <table>
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
          </table>
        </div>
        <div class="subSet">
        <table>

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
      </div>

      <div class="set"></div>


          

          
      
    </div> 
  );
}

export default Specifications;


