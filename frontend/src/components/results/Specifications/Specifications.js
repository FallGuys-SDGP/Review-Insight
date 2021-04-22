import React from "react";
import "./Specifications.css"
import logo from '../../../../src/images/temp/appleImage.jpg';


var Brand = "1"
var Model = "1"
var Price = "1"
var Launch_Date = "1"
var Model_Number = "1"
var Type = "1"
var Headphone_Type = "1"
var Connectivity = "1"
var Microphone = "1"
var Driver_Type = "1"
var Driver_Size = "1"
var Number_of_Drivers = "1"
var Water_Resistant = "1"
var Weight = "1"
var Bluetooth = "1"
var Bluetooth_Version = "1"
var Bluetooth_Codec_Support = "1"
var Battery = "1"
var Charging_Port = "1000"
var Battery_Life = "1"


function Specifications() {
  var reportResponse = []
	var specificationResponse = [] 

	if(localStorage.getItem('mainResponse').length > 0) {
		let response = JSON.parse(localStorage.getItem('mainResponse'))
		console.log("Inside report - ", response)
		specificationResponse = response
		reportResponse = response
	}
	reportResponse = reportResponse.predictionResult
	specificationResponse = specificationResponse.specification 
	console.log('Report response', reportResponse)
	console.log('Specification Response ', specificationResponse)

  return (
    <div >
      <div class="set">
        
        <div class="subSet">
          <div class="box"> 
            <img src={logo} className="App-logo" alt="logo" class="img"  ></img>
          </div>
          
        </div>
        <div class="subSet">
          <table>
            <h2>General</h2>
            <div class="setData"  >
              <tr >
                <th>Brand</th>
                <td  >{specificationResponse.Brand}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
                <th>Model Number</th>
                <td >{specificationResponse.ModelNo}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
                <th>Price</th>
                <td >{specificationResponse.Price}</td>
              </tr>
            </div>

            <div class="setData">
              <tr >
                <th>Launch Date</th>
                <td >{specificationResponse.LaunchDate}</td>
              </tr>
            </div>
            
            <div class="setData">
              <tr >
                <th>Type</th>
                <td >{specificationResponse.Type}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
                <th>Headphone Type</th>
                <td >{specificationResponse.HeadphoneType}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
                <th>Connectivity</th>
                <td >{specificationResponse.Connectivity}</td>
              </tr>
            </div>
          </table>
        </div>
      </div>
    
      <div class="set">
        <div class="subSet">
          <table>
            <h2>Product details</h2>

            <div class="setData">
              <tr >
              <th>Microphone</th>
              <td>{specificationResponse.Microphone}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
              <th>Driver Type</th>
              <td>{specificationResponse.DriverType}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
              <th>Driver Size (mm)</th>
              <td>{specificationResponse.DriverSize}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
              <th>Number of Drivers</th>
              <td>{specificationResponse.NumberofDrivers}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
              <th>Water Resistant</th>
              <td>{specificationResponse.WaterResistant}</td>
              </tr>
            </div>
            <div class="setData">
              <tr >
              <th>Weight (g)</th>
              <td>{specificationResponse.Weight}</td>
              </tr>
            </div>
          </table>
        </div>
        <div class="subSet">
          <table>

            <h2>Connectivity features</h2>

            <div class="setData">
              <tr >
              <th>Bluetooth</th>
              <td>{specificationResponse.Bluetooth}</td>
              </tr>
            </div>

            <div class="setData">
              <tr >
              <th>Bluetooth Version</th>
              <td>{specificationResponse.BluetoothVersion}</td>
              </tr>
            </div>

            <div class="setData">
              <tr >
              <th>Bluetooth Codec Support</th>
              <td>{specificationResponse.BluetoothCodecSupport}</td>
              </tr>
            </div>

            <div class="setData">
              <tr >
              <th>Battery</th>
              <td>{specificationResponse.Battery}</td>
              </tr>
            </div>

            {/* <div class="setData">
              <tr >
              <th>Charging Port</th>
              <td>{specificationResponse.ChargingPort}</td>
              </tr>
            </div> */}


            <div class="setData">
              <tr >
              <th>Battery Life (Hrs)</th>
              <td>{specificationResponse.BatteryLife}</td>
              </tr>
            </div>
          </table>
        </div>
      </div>

      <div class="set"></div>

    </div>
  );
}

export default Specifications;


