import React from "react";
import "./components/results/ReviewContent/ReviewContainer.css";
import axios from "axios";

const reviewTitle = "I ordered a folding plug. I did NOT get a folding"
const reviewText = "Yes, it fits, but the product was mis-represented, but the product was mis-represented,but the product was mis-represented as a folding plug. It has fixed prongs which diminish the ability of me to put it in my thin laptop bag. It would not be worth the postage to ship this thing back considering the cost but I am extremely disappointed with this company."
const rating = 2.5
const score = "5%"

function BackendTest(){
  const { useEffect, useState} = React;
  const [ProductInfo, setProductInfo] = useState('');

  const getProductId = (ProductInfo) => {
    const {asin}= ProductInfo;
    console.log(ProductInfo);
    return `${asin}`;
  }
  const getProductTitle = (ProductInfo) => {
    const {title}= ProductInfo;
    console.log(ProductInfo);
    return `${title}`;
  }
  const getProductBrand = (ProductInfo) => {
    const {brand}= ProductInfo;
    console.log(ProductInfo);
    return `${brand}`;
  }

  const fetchProductReveiw = () =>{
    return axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/558835155')
        .then(data => {
          // handle success
          // console.log(data);
          return data;
        })
        .catch(err => {
          // handle error
          console.error(err);
        })
  }

  useEffect(() => {
    fetchProductReveiw().then(productData => {
      setProductInfo(productData.data);
    });
  }, []);

  return(
      <div className="reviewBox">
        <p> <b> {getProductBrand(ProductInfo)} </b></p>
        <p> <b> Product Id: {getProductId(ProductInfo)} </b></p>
        <div style={{ display: 'flex', justifyContent: "space-between"}}>
          <p> {rating} ⭐</p> <p style={{color: "red"}} > Score {score} </p>  
        </div>
        <div className="reviewText">
          <p>{getProductTitle(ProductInfo)}</p>
        </div>
      </div>
  );
}

export default BackendTest;
