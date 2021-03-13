import axios from "axios";
 
export function fetchProductReveiw (){
  return axios.get('https://m3q3n7xsdb.execute-api.ap-south-1.amazonaws.com/staging/product/558835155')
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error(err);
      })
}