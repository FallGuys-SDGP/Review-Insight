import React from "react";
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import "../Report/Report.css"

function Report(){

  return(
	<div className="report-container">
		<div className="report-detail-card">
			<div className="report-box-card">Brand</div>
			<div className="report-box-card">Warranty</div>
			<div className="report-box-card">Quality</div>
			<div className="report-box-card">Satisfaction</div>
		</div>
	</div>
  );
}

export default Report;