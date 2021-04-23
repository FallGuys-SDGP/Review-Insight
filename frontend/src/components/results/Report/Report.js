import React from "react";
import "../Report/Report.css"
import {Doughnut} from "react-chartjs-2";

const brand = "Apple";
const warranty = "1 year";
const quality = "80%";
const satisfaction = "4.5/5";
const seller = "RedArt";
const price = "USD 1.5";
const qualityGrade = "Grade 3";
const shipping = "60%";
const refund = "Accepted";

let summaryData = {
	labels: [
		'Real',
		'Fake'
	],
	datasets: [{
		data: [300, 50],
		backgroundColor: [
		'#36A2EB',
		'#FF6384'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#FF6384'
		]
	}]
};

function Report(){
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

	summaryData = {
		labels: [
		  'Real - ' + reportResponse.statistics.totalReal,
		  'Fake - ' + reportResponse.statistics.totalFake,
		],
		datasets: [{
		  data: [
			parseInt(reportResponse.statistics.totalReal), 
			parseInt(reportResponse.statistics.totalFake)
		  ],
		  backgroundColor: [
		  '#36A2EB',
		  '#FF6384'
		  ],
		  hoverBackgroundColor: [
		  '#36A2EB',
		  '#FF6384'
		  ]
		}]
	  };

  return(
	<div className="report-container">
		<div className="report-detail-card">
			<div className="report-box-card">
				<h3>Brand</h3>
				<span>{specificationResponse.Brand}</span>
			</div>
			<div className="report-box-card">
				<h3>Warranty</h3>
				<span>{warranty}</span>
			</div>
			<div className="report-box-card">
				<h3>Quality</h3>
				<span>{quality}</span>
			</div>
			<div className="report-box-card">
				<h3>Satisfaction</h3>
				<span>{satisfaction}</span>
			</div>
		</div>
		<div className="report-chart-card">
			<div className="report-chart-box">
				<h3 style={{color: "white", textAlign: "center"}}>Review Percentage</h3>
				<Doughnut data={summaryData}></Doughnut>
			</div>
		</div>
		<div className="report-price-card">
			<div className="report-price-box">
				<h3>Price</h3>
				<span>{price}</span>
			</div>
			<div className="report-price-box">
				<h3>Quality</h3>
				<span>{qualityGrade}</span>
			</div>
			<div className="report-price-box">
				<h3>Shipping</h3>
				<span>{shipping}</span>
			</div>
			<div className="report-price-box">
				<h3>Refund</h3>
				<span>{refund}</span>
			</div>
		</div>
	</div>
  );
}

export default Report;