import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField,Button } from '@material-ui/core';

function Home(){
  return(
    <div className="home">
      <div className="wrapper">
        {/* <input class="search" placeholder="Search..." type="text" />
        <button type="submit" >Submit</button> */}
        <TextField className="Searchbar" id="outlined-basic" label="" variant="outlined" />
        <Button id="outlined-basic" label="Outlined" variant="contained" href="/Result"> Search </Button>
      </div> 
    </div>
  );
}

export default Home;