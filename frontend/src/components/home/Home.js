import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import SearchBar from '../../components/home/SearchBar';
import {fetchProductReveiw} from "../../utils/Services";
import Footer from '../Footer/Footer';
import Result from '../results/Result'
import logo from '../../images/home/w1.png'


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
      else{
        return 'No product data found';
      }
      });
  }

  return(
    <div className="home-container">  
      <div className="home">
        <div className="intro">
           <img src={logo} alt="Logo" />
          A tool to predict the reliability of online reviews using machine learning
        </div>
        <SearchBar userEnteredId = { searchId => setSearchId(searchId) } /> 
      </div> 

      <div className="home">  
          <Result/>   
      </div>
      
     <Footer/>
    </div>
  );
}

export default Home;