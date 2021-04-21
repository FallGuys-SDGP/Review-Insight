import React from "react";
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import "../Report/Report.css"

const brand = "Apple";
const warranty = "1 year";
const quality = "80%";
const satisfaction = "4.5/5";
const seller = "RedArt";
const price = "USD 1.5";
const qualityGrade = "Grade 3";
const shipping = "60%";
const refund = "Accepted";

function Report(){

	if(localStorage.getItem('mainResponse').length > 0) {
		let reportResponse = JSON.parse(localStorage.getItem('mainResponse'))
		console.log("Inside report - ", reportResponse)
	}

  return(
	<div className="report-container">
		<div className="report-detail-card">
			<div className="report-box-card">
				<h3>Brand</h3>
				<span>{brand}</span>
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
				<h3 style={{color: "white"}}>Review Percentage</h3>
			</div>
			<div className="report-seller-box">
				<h3>Seller</h3>
				<span>{seller}</span>
			</div>
		</div>
		<div className="report-word-cloud">
			<h3 style={{color: "white"}}>Word Cloud</h3>
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