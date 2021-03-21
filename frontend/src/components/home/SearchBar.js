import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import Select from 'react-select';

function SearchBar(){

  const options = [
    
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



  return(
    <div className="searchBar"> 
      <div className="search-intro"><p>Enter a product from Amazon.com to the search bar</p></div>
      <div className="wrapper">
        {/* <TextField className="Searchbar" id="outlined-basic" label="" variant="outlined" /> */}
        <Select className="Searchbar" options={options} placeholder={"Enter Product Name "} />
        <Button id="outlined-basic" label="Outlined" variant="contained" href="/Result"> Search </Button>
      </div> 
    </div>
  );
}

export default SearchBar;