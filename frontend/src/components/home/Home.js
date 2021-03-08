import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import SearchBar from '../../components/home/SearchBar';

function Home(){
  return(
    <div className="home">
      <SearchBar />
    </div>
  );
}

export default Home;