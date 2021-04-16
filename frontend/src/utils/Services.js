import axios from "axios";
const BASE_URL = 'https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/';
const BASE_URL_SPEC = 'https://762xa5wc39.execute-api.ap-south-1.amazonaws.com/staging/';
 
export function fetchProductReveiw (props){
  console.log("hii" + props);
  if(props !== undefined) {
  // return axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/558835155')
    return axios.get(BASE_URL + props)
      .then(data => {
        if(data !== undefined) {
          return data;
        }
        return "No data";
      })
      .catch(err => {
        console.error(err);
      })
    }
}


export function fetchspecification (type,asin){
  // console.log("hii" + props);
  if(asin !== undefined) {
  // return axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/558835155')
    return axios.get(BASE_URL_SPEC + type + "/" + asin)
      .then(data => {
        if(data !== undefined) {
          return data;
        }
        return "No data";
      })
      .catch(err => {
        console.error(err);
      })
    }
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