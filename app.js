const DOMAIN = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=';

const BASE_URL = `${DOMAIN}`;


const button = document.querySelector('#searchC');
console.log(button);

const ip = document.querySelector('input')

const search = () => {
  console.log(ip.value);

}

button.addEventListener('click', search);

//api
//list results from api server
//refresh page after new search
//random generator
//ad section with time interval
