import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import SearchBar from '../../components/home/SearchBar';
import {fetchProductReveiw} from "../../utils/Services";
import Footer from "../../components/footer/footer";

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
    <div>  
      <div className="home">
        <div className="intro">
          A tool to predict the reliability of online reviews using machine learning
        </div>
        <SearchBar userEnteredId = { searchId => setSearchId(searchId) } /> 
      </div>  
      <Footer/>
    </div>
  );
}

export default Home;