import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';

function SearchBar(){
  return(
    <div className="searchBar"> 
      <div className="search-intro"><p>Enter a product from Amazon.com to the search bar</p></div>
      <div className="wrapper">
        <TextField className="Searchbar" id="outlined-basic" label="" variant="outlined" />
        <Button id="outlined-basic" label="Outlined" variant="contained" href="/Result"> Search </Button>
      </div> 
    </div>
  );
}

export default SearchBar;