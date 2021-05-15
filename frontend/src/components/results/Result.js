import React from "react";
import Tabs from "./Tabs";
import "../results/Result.css";
import {Doughnut} from "react-chartjs-2";

const productName = "Apple iPhone 12";
const productImage = "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg"
let summaryData = {
	labels: [
		'Positve',
		'Negative',
		'Fake'
	],
	datasets: [{
		data: [300, 100, 50],
		backgroundColor: [
		'#36A2EB',
		'#FFCE56',
		'#FF6384'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#FFCE56',
		'#FF6384'
		]
	}]
};

function Result(){
  var reportResponse = []
	var specificationResponse = [] 

	if(localStorage.getItem('mainResponse').length > 0) {
		let response = JSON.parse(localStorage.getItem('mainResponse'))
		console.log("Inside report - ", response)
		specificationResponse = response
		reportResponse = response
    reportResponse = reportResponse.predictionResult
    specificationResponse = specificationResponse.specification
	}

  summaryData = {
    labels: [
      'Positve - ' + reportResponse.statistics.totalPositive,
      'Neutral - ' + reportResponse.statistics.totalNeutral,
      'Negative - ' + reportResponse.statistics.totalNegative,
    ],
    datasets: [{
      data: [
        parseInt(reportResponse.statistics.totalPositive), 
        parseInt(reportResponse.statistics.totalNeutral), 
        parseInt(reportResponse.statistics.totalNegative)
      ],
      backgroundColor: [
      '#36A2EB',
      '#FFCE56',
      '#FF6384'
      ],
      hoverBackgroundColor: [
      '#36A2EB',
      '#FFCE56',
      '#FF6384'
      ]
    }]
  };

  return(
    <div className="result-container">
        <div className="result-sidebar">
          
          <div className="res-product-summary">
            <h1 className="res-product-summary-title">{specificationResponse.Brand}</h1>
            <h3 style={{color: "white", textAlign: "center"}}>{specificationResponse.Model}</h3>
            <img className="res-product-img" src={specificationResponse.image}/>
          </div>

          <div className="summary">
            <h1 className="summary-title">Summary</h1>
            <div className="summary-chart-box">
              <Doughnut data={summaryData}></Doughnut>
            </div>
          </div>

        </div>
        
        <Tabs />
        
    </div>
  );
}

export default Result;