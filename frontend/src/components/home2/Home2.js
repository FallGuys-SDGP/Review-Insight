import React , { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import homeImage from "../../images/home2/girl.png"
import "./Home2.css"
import {fetchProductReveiw} from "../../utils/Services";
import { useHistory } from "react-router-dom";


function Home2() {
    const { useState} = React;
    const [searchId, setSearchId] = useState(' ');
    const [receivedResponse, setReceivedResponse] = useState(false);
    let history = useHistory();
  
    if(searchId !== ' ') {
      fetchProductReveiw(searchId).then(productData => {
        if(!receivedResponse){
          console.log(productData.data)
          localStorage.setItem('mainResponse', JSON.stringify(productData.data))
          history.push('/result')
          setReceivedResponse(true)
        }
      });
    }

    return (
        <div className='main-wrapper'>
            <div className='main-container'>
                <div>
                    <h2> Don't get ripped off Online , <br/>
                         Use Review Insight  </h2>
                </div>
                <div>
                    <SearchBar userEnteredId = { searchId => setSearchId(searchId) } placeholder=' Enter ProductID ...' /* handleChange={(e) => console.log(e.target.value)} */ />

                </div>
                <div>
                    <p> Review Insight , Know your Products Before You Buy !!</p>
                </div>


            </div>

            <div className='main-container'>
                <img src = {homeImage}  />
            </div>


        </div>
    );

}

export default Home2;