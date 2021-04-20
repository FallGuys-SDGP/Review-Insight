import React from "react";
import "./Specifications.css"
import logo from '../../../../src/images/temp/appleImage.jpg';
import CanvasJSReact from '../../../assets/canvasjs.react';






var CanvasJSChart = CanvasJSReact.CanvasJSChart;





var jsondataPoints = [];

var json = [
  { "day": 1483228800000, "value": 18561.3 },
  { "day": 1485907200000, "value": 8879.6 },
  { "day": 1488326400000, "value": 9173.75 },
  { "day": 1491004800000, "value": 9304.05 },
  { "day": 1493596800000, "value": 9621.25 },
  { "day": 1496275200000, "value": 9520.9 },
  { "day": 1498867200000, "value": 10077.1 },
  { "day": 1501545600000, "value": 9917.9 },
  { "day": 1504224000000, "value": 9788.6 },
  { "day": 1506816000000, "value": 10335.3 },
  { "day": 1509494400000, "value": 10226.55 },
  { "day": 1512086400000, "value": 10530.7 }
]

var sample = [
 
]

function Funtion2({ text }) {

  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample.push({
          x: new Date(data[i].day),
          y: data[i].value
        })
      }
    
    });

  for (var i = 0; i < json.length; i++) {
    sample.push({
      x: new Date(json[i].day),
      y: json[i].value
    })
  }

  return <div><p>hello</p></div>
}

function Specifications(){

  const options = {

    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Simple Column Chart with Index Labels"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: sample
    }]
  }


  return(
    <div >
      <div style={{width: "80%",paddingLeft:"10%"}}><CanvasJSChart options={options} /></div>
        
          <div ><Funtion2 text={"some text"} /></div>
    </div> 
  );
}

export default Specifications;
