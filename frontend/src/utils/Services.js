import axios from "axios";
const BASE_URL = 'https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/';
 
export function fetchProductReveiw (props){
  if(props !== undefined) {
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