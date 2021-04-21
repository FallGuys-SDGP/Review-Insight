import React from "react";
import Tabs from "./Tabs";
import { Card } from '@material-ui/core';
import "../results/Result.css";
import {Doughnut} from "react-chartjs-2";

const productName = "Apple iPhone 12";
const productImage = "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg"
const summaryData = {
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
  return(
    <div className="result-container">
      
        <div className="result-sidebar">
          <div className="res-product-summary">
            <h1 className="res-product-summary-title">Product</h1>
            <h3 style={{color: "white", marginLeft: "30%"}}>{productName}</h3>
            <img className="res-product-img" src={productImage}/>
          </div>
          <div className="summary">
            <h1 className="summary-title">Summary</h1>
            <div className="summary-chart-box">
              <Doughnut data={summaryData}></Doughnut>
            </div>
          </div>
        </div>
        
        <div className="result-sidebar" >
          <Tabs />
        </div>
       
      
    </div>
  );
}

export default Result;