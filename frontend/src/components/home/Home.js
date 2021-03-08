import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import SearchBar from '../../components/home/SearchBar';

function Home(){
  return(
    <div className="home">
      <div className="intro">
        A tool to predict the reliability of online reviews using machine learning
      </div>
      {/* <div className="search-container">
        Enter a product from Amazon.com to the search bar.
        
      </div> */}
      <SearchBar />
    </div>
  );
}

export default Home;