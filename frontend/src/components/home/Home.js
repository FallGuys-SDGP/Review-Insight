import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import SearchBar from '../../components/home/SearchBar';
import Footer from '../footer/Footer'

function Home(){
  return(
    <div className="home">
      <SearchBar />
      <Footer/>
    </div>
  );
}

export default Home;