const API_ENDPOINT = "https://icanhazdadjoke.com/";

const jokesContainer = document.getElementById("jokes");

const getJoke = () => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "text/plain");
    
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(API_ENDPOINT, requestOptions)
      .then(response => response.text())
      .then(result => {
        jokesContainer.innerHTML = `<span class="jokes-span">${result}</span>`;
      })
      .catch(error => console.log('error', error));
};