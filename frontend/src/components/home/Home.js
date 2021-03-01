import React, { Component } from 'react';
import "../../components/home/Home.css";
import { TextField } from '@material-ui/core';

function Home(){
  return(
    <div className="home">
      {/* <div class="wrapper">
        <input class="search" placeholder="Search..." type="text" />
        <button type="submit" >Submit</button>
      </div>  */}

     
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      
    </div>
  );
}

export default Home;