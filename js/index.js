import { API_ENDPOINT } from "../constants";

const getJoke = () => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(API_ENDPOINT, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
};