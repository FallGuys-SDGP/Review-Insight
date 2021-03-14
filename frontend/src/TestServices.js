import React from 'react';
import "./components/home/Home.css";
import "./components/results/ReviewContent/ReviewContainer.css";
import {fetchProductReveiw} from "./utils/Services"
import SearchBar from "./components/home/SearchBar.js";


const reviewTitle = "I ordered a folding plug. I did NOT get a folding"
const reviewText = "Yes, it fits, but the product was mis-represented, but the product was mis-represented,but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company."
const rating = 2.5
const score = "5%"

function TestServices(){
  const { useEffect, useState} = React;
  const [ProductId, setProductId] = useState('0232');
  const [ProductTitle, setProductTitle] = useState('Headset');
  const [ProductBrand, setProductBrand] = useState('Apple');
  // const [SearchId, setSearchId] = useState('Apple');
  const [searchId, setSearchId] = useState(' ');


  if(searchId !== ' ') {
    fetchProductReveiw(searchId).then(productData => {
      if(searchId !== productData.data){
        setProductId(productData.data.asin);
        setProductTitle(productData.data.title);
        setProductBrand(productData.data.brand);
      }
      });
  }

  return(
    <div>  
      <SearchBar userEnteredId = { searchId => setSearchId(searchId) } /> 
      <h1>{searchId}</h1>
      <div className="reviewBox">
          <p> <b> {ProductId}  </b></p>
          <p> <b> {ProductBrand}  </b></p>
          <div style={{ display: 'flex', justifyContent: "space-between"}}>
              <p> {} ⭐</p> <p style={{color: "red"}} > Score {score} </p>  
          </div>
          <div className="reviewText">
              <p>{ProductTitle} </p>
          </div>
      </div> 
    </div>
  );
}

export default TestServices;