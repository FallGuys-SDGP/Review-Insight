import React, { Component } from 'react'
import "./SearchBar.css"

const SearchBar = (props) => {
    
  

    return (
        <div className="search-box">
            <div>
                <input type="search" className='search-bar' style={{ fontSize: '25px' }} placeholder={props.placeholder} onChange={props.handleChange} />
            </div>
            <div>
                <button id="btn-search" /* onClick={()=>props.userEnteredId(id)} */ > Search </button>
            </div>


        </div>
    )
}


export default SearchBar
