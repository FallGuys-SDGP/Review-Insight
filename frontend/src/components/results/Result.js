import React from "react";
import Tabs from "./Tabs";
import { Card } from '@material-ui/core';
import "../results/Result.css";

function Result(){
  return(
    <div>
      <div className="home">
        <Tabs />
      </div> 
      <div className="summary">
        <h1 className="summary-title"> Summary </h1>
      </div>

    </div>


  );
}

export default Result;