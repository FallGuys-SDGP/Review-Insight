import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import homeImage from "../../images/home2/girl.png"
import "./Home2.css"


function Home2() {

    return (
        <div className='main-wrapper'>
            <div className='main-container'>
                <div>
                    <h2> Don't get ripped off Online , <br/>
                         Use Review Insight  </h2>
                </div>
                <div>
                    <SearchBar placeholder=' Enter ProductID ...' handleChange={(e) => console.log(e.target.value)} />

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