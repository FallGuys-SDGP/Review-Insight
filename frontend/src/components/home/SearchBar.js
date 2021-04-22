import React, { Component, useState} from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';
import Select from 'react-select';


function SearchBar(props){

  const options = [
    
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



  const [id,setId]=useState(null);

  function getId(val)
  {
    setId(val.target.value)
  }

  return(
    <div className="searchBar"> 
      <div className="search-intro"><p>Enter a product from Amazon.com to the search bar</p></div>
      <div className="wrapper">
        {/* <TextField className="Searchbar" id="outlined-basic" label="" variant="outlined"  onChange={getId} /> */}
        <Select className="Searchbar" options={options} placeholder={"Enter Product Name "} />
        <input className="Searchbar" id="outlined-basic" label="" variant="outlined"  onChange={getId} />
        <Button  style={{width:"150px",marginLeft:"10px"}} id="outlined-basic" label="Outlined" color="primary" variant="contained" onClick={()=>props.userEnteredId(id)}> Search </Button>
        {/* <Button id="outlined-basic" label="Outlined" variant="contained" onClick={()=>props.userEnteredId(id)}> Search </Button> */}
      </div> 
    </div>
  );
}

export default SearchBar;