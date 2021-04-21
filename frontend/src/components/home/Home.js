import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import SearchBar from '../../components/home/SearchBar';
import {fetchProductReveiw} from "../../utils/Services";
import Footer from '../Footer/Footer';
import Result from '../results/Result'
import logo from '../../images/home/w1.png'


function Home(){
  const { useState} = React;
  const [searchId, setSearchId] = useState(' ');
  const [receivedResponse, setReceivedResponse] = useState(false);


  if(searchId !== ' ') {
    fetchProductReveiw(searchId).then(productData => {
      if(!receivedResponse){
        console.log(productData.data)
        localStorage.setItem('mainResponse', JSON.stringify(productData.data))
        setReceivedResponse(true)
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