import React, { Component } from 'react';
import "../../components/home/Home.css";

function Home(){
  return(
    <div className="home">
      <div class="wrapper">
        <input class="search" placeholder="Search..." type="text" />
        <button type="submit">Submit</button>
      </div> 
    </div>
  );
}

export default Home;