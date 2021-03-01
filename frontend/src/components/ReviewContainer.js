import React from "react";
import Tabs from "../components/ReviewContainer";

function ReviewContainer(){
  return(
    <div className="reviewBox" style={{width: '300px',height: '100px',backgroundColor: 'grey'}}>
    <p>Title</p>
    <div className="reviewContent" style={{width: '290px',height: '55px',backgroundColor: 'green', marginLeft:'5px'}} ></div>
    </div> 
  );
}

export default ReviewContainer;