import React from 'react';
import axios from "axios";
 
export function fetchProductReveiw (props){
  console.log("hii" + props);
  // return axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/558835155')
  return axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/' + props.searchId)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      })
}


// export async function FetchProductReveiw (props){
//   const {useState} = React;
//   const [id, methodId] = useState(' ');
//   // console.log("hii" + props);
//   // return axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/558835155')
//   try {
//     const data = await axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/' + props.id);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// }