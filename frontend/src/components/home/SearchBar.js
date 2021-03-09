import React, { Component, useState } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';

function handleSearch(textValue) {
  console.log(textValue)
  return fetch('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/' + textValue, {
    method: 'GET',
    mode: 'no-cors'
  }).then((response) => {
      console.log(response.brand);
      response.json();
  });
}

function SearchBar(){
  const [textValue, setTextValue] = useState();
  return(
    <div className="searchBar"> 
      <div className="search-intro"><p>Enter a product from Amazon.com to the search bar</p></div>
      <div className="wrapper">
        <TextField type="text" className="Searchbar" id="outlined-basic" label="" variant="outlined" onChange={e => setTextValue(e.target.value)} />
        <Button id="outlined-basic" label="Outlined" variant="contained" onClick={handleSearch(textValue)}> Search </Button>
      </div> 
    </div>
  );
}

export default SearchBar;