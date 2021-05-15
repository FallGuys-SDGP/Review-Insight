import React, { Component , useState} from 'react'
import "./SearchBar.css"


function SearchBar(props) {
    const [id, setId] = useState(null);

    function getId(val) {
        setId(val.target.value)
    }


    return (
        <div className="search-box">
            <div>
                <input type="search" className='search-bar'  onChange={getId}  style={{ fontSize: '25px' }} placeholder={props.placeholder} />
            </div>
            <div>
                <button id="btn-search" onClick={()=>props.userEnteredId(id)} > Search </button>
            </div>


        </div>
    )
}


export default SearchBar
