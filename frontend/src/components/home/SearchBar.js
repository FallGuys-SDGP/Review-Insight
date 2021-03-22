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
  // const [print,setPrint]=useState(false);

  function getId(val)
  {
    setId(val.target.value)
    console.warn(val.target.value)
    // setPrint(false)
  }

  return(
    <div className="searchBar"> 
      <div className="search-intro"><p>Enter a product from Amazon.com to the search bar</p></div>
      {/* <div className="wrapper">
        <TextField className="Searchbar" id="outlined-basic" label="" variant="outlined" />
        <Button id="outlined-basic" label="Outlined" variant="contained" href="/Result"> Search </Button>
      </div>   */}

      {/* <div className="wrapper">
        {
          print?
          <h1> {data}</h1>
          :null
        }
        <TextField className="Searchbar" id="outlined-basic" label="" variant="outlined"  onChange={getData} />
        <Button id="outlined-basic" label="Outlined" variant="contained" href="/Result" onClick={()=>setPrint(true)}> Search </Button>
      </div> */}

      <div className="wrapper">
        <TextField className="Searchbar" id="outlined-basic" label="" variant="outlined"  onChange={getId} />
        <Select className="Searchbar" options={options} placeholder={"Enter Product Name "} />
        {/* <Button id="outlined-basic" label="Outlined" variant="contained" onClick={()=>props.userEnteredId(id)}> Search </Button> */}
      </div> 
    </div>
  );
}

export default SearchBar;