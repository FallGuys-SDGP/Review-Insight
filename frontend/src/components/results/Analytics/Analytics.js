import React from "react";
import "./Analytics.css"
import logo from '../../../../src/images/temp/appleImage.jpg';
import CanvasJSReact from '../../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var json1 = [
  { "day": "Quality  ", "value": 24 },
  { "day": "Price", "value": 53 },
  { "day": "Delivery", "value": 24 },
  { "day": "Warranty", "value": 12 },
  { "day": "Satisfaction", "value": 23 },
  { "day": "Seller", "value": 23 },
  { "day": "Shipping", "value": 42 },
  { "day": "Refund", "value": 32 },
]
var json2 = [
  { "day": "2015", "value": 2 },
  { "day": "2016", "value": 4 },
  { "day": "2017", "value": 17 },
  { "day": "2018", "value": 11 },
  { "day": "2019", "value": 2 }
]
var json3 = [
  
  { "day": "Beats", "value": 4.13},
  { "day": "JVC", "value": 4.13},
  { "day": "Koss", "value": 4.13},
  { "day": "Audio-Technica", "value":4.21},
  { "day": "Sennheiser", "value": 4.17},
  { "day": "VoiceBeats", "value": 4.11},
  { "day": "Panasonic", "value": 4.10},
  { "day": "Philips Peripherals and Accessories", "value": 4.07},
  { "day": "Philips", "value": 4.00},
  { "day": "Klipsch", "value": 3.85},
  { "day": "MEElectronics", "value": 3.63},
  { "day": "V-MODA", "value":3.59},
  { "day": "Sonyxer", "value": 3.50},
  { "day": "Sony", "value": 3},
  { "day": "Sony Ericsson", "value": 3}
]
var json4 = [
  { "day": "1", "value": 100 },
  { "day": "2", "value": 245 },
  { "day": "3", "value": 342.75 },
  { "day": "4", "value": 245.05 },
  { "day": "5", "value": 632.25 },
]

var sample1 = []
var sample2 = []
var sample3 = []
var sample4 = []

function Funtion1({ text }) {
  sample1.length = 0;
  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json1;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample1.push({
          label: data[i].day,
          y: data[i].value
        })
      }

    });

  for (var i = 0; i < json1.length; i++) {
    sample1.push({
      label: json1[i].day,
      y: json1[i].value
    })
  }

  return <div></div>
}

function Funtion2({ text }) {
  sample2.length = 0;

  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json2;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample2.push({
          label: data[i].day,
          y: data[i].value
        })
      }

    });

  for (var i = 0; i < json2.length; i++) {
    sample2.push({
      label: json2[i].day,
      y: json2[i].value
    })
  }

  return <div></div>
}

function Funtion3({ text }) {
  sample3.length = 0;
  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json3;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample3.push({
          label: data[i].day,
          y: data[i].value
        })
      }

    });

  for (var i = 0; i < json3.length; i++) {
    sample3.push({
      label: json3[i].day,
      y: json3[i].value
    })
  }

  return <div></div>
}

function Funtion4({ text }) {
  sample4.length = 0;
  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json4;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample4.push({
          label: data[i].day,
          y: data[i].value
        })
      }

    });

  for (var i = 0; i < json4.length; i++) {
    sample4.push({
      label: json4[i].day,
      y: json4[i].value
    })
  }

  return <div></div>
}


function Analytics() {


  const options1 = {


    animationEnabled: true,
    title: {
      text: "About product"
    },
    axisY: {
      title: "About product"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "column",
      name: "2016",
      showInLegend: true,
      dataPoints: sample1
    }]
  }

  const options2 = {



    animationEnabled: true,
    title: {
      text: "Good Rating Class Compount to ehe each Year"
    },
    axisY: {
      title: "Number of Customers"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "line",
      name: "Philips",
      showInLegend: true,
      dataPoints: sample2
    }]
  }

  const options3 = {


    animationEnabled: true,
    title: {
      text: "Top 10 best Headphone"
    },
    axisY: {
      title: "Number of Customers"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "column",
      name: "2016",
      showInLegend: true,
      dataPoints: sample3
    }]
  }

  const options4 = {


    animationEnabled: true,
    title: {
      text: "Ratings"
    },
    axisY: {
      title: "Number of Customers"
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "column",
      name: "2016",
      showInLegend: true,
      dataPoints: sample4
    }]
  }



  var set = {
    width: "100%",
    height: "auto",
    display: "flex",
    paddingBottom: "5%",
  }

  var subSet = {
    width: "45%",
    height: " 300px",
    margin: "2%",
    padding: "10px",
  }

  return (
    <div >
      <div ><Funtion1 text={"some text"} /></div>
      <div ><Funtion2 text={"some text"} /></div>
      <div ><Funtion3 text={"some text"} /></div>
      <div ><Funtion4 text={"some text"} /></div>

      <div style={set}>
        <div style={subSet}><CanvasJSChart options={options1} /></div>
        <div style={subSet}><CanvasJSChart options={options2} /></div>
      </div>

      <div style={set}>
        <div style={subSet}><CanvasJSChart options={options3} /></div>
        <div style={subSet}><CanvasJSChart options={options4} /></div>
      </div>



    </div>
  );
}

export default Analytics;
