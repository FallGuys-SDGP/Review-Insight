


import React from "react";
import "./Analytics.css"
import logo from '../../../../src/images/temp/appleImage.jpg';
import CanvasJSReact from '../../../assets/canvasjs.react';






var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var json1 = [
  { "day": "hello", "value": 115000.3 },
  { "day": "2", "value": 8879.6 },
  { "day": "7", "value": 20077.1 },
  { "day": "3", "value": 9173.75 },
  { "day": "4", "value": 9304.05 },
  { "day": "5", "value": 9621.25 },
  { "day": "6", "value": 9520.9 },
  { "day": "7", "value": 10077.1 },
  { "day": "8", "value": 9917.9 }
]
var json2 = [
  { "day": 1483228800000, "value": 10000.3 },
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
var json3 = [
  { "day": 1483228800000, "value": 10000.3 },
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
var json4 = [
  { "day": "hello", "value": 18561.3 },
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

  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json2;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample2.push({
          x: new Date(data[i].day),
          y: data[i].value
        })
      }

    });

  for (var i = 0; i < json2.length; i++) {
    sample2.push({
      x: new Date(json2[i].day),
      y: json2[i].value
    })
  }

  return <div></div>
}

function Funtion3({ text }) {

  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json3;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample3.push({
          x: new Date(data[i].day),
          y: data[i].value
        })
      }

    });

  for (var i = 0; i < json3.length; i++) {
    sample3.push({
      x: new Date(json3[i].day),
      y: json3[i].value
    })
  }

  return <div></div>
}

function Funtion4({ text }) {

  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    .then(function (response) {

      // return response.json();
      return json4;

    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        sample4.push({
          x: new Date(data[i].day),
          y: data[i].value
        })
      }

    });

  for (var i = 0; i < json4.length; i++) {
    sample4.push({
      x: new Date(json4[i].day),
      y: json4[i].value
    })
  }

  return <div></div>
}

function Analytics() {


  const options1 = {

    
    animationEnabled: true,
    title: {
      text: "Number of New Customers"
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
      dataPoints: sample1
    }]
  }
  const options2 = {

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
      dataPoints: sample2
    }]
  }
  const options3 = {

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
      dataPoints: sample3
    }]
  }

  const options4 = {

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
