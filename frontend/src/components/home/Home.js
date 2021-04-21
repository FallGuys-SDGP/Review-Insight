import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import SearchBar from '../../components/home/SearchBar';
import {fetchProductReveiw} from "../../utils/Services";

function Home(){
  const { useEffect, useState} = React;
  const [ProductId, setProductId] = useState('0232');
  const [ProductTitle, setProductTitle] = useState('Headset');
  const [ProductBrand, setProductBrand] = useState('Apple');
  const [ProductImage, setProductImage] = useState('');
  const [searchId, setSearchId] = useState(' ');


  if(searchId !== ' ') {
    fetchProductReveiw(searchId).then(productData => {
      if(searchId !== productData.data){
        setProductId(productData.data.asin);
        setProductTitle(productData.data.title);
        setProductBrand(productData.data.brand);
        setProductImage(productData.data.image);
      }
      });
  }

  return(
    <div>  
      <div className="home">
        <div className="intro">
          A tool to predict the reliability of online reviews using machine learning
        </div>
        <SearchBar userEnteredId = { searchId => setSearchId(searchId) } /> 
      </div>  
    </div>
  );
}

export default Home;