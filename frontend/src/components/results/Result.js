import React from "react";
import Tabs from "./Tabs";
import { Card } from '@material-ui/core';
import "../results/Result.css";

function Result(){
  return(
    <div className="result-container">
        <div className="result-sidebar">
          <div className="res-product-summary">
            <h1 className="res-product-summary-title">Product</h1>
          </div>
          <div className="summary">
            <h1 className="summary-title"> Summary </h1>
          </div>
        </div>
        <div>
          <Tabs />
        </div>
    </div>
  );
}

export default Result;