// function fetchData(artist) {
//   const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
//   axios.get(url)
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }
fetchData('Coldplay')

async function fetchData(artist) {
  const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
  try {
    const response = await axios(url)
    // console.log(response.data.artists[0])
    showArtInfo(response.data.artists[0])
  } catch (error) {
    console.error(error)
  }
}

function showArtInfo(data) {
  const dataContainer = document.querySelector('#artist-data')
  console.log("Inside show data", data.strArtist)
  //strArtist
  const strArtist = document.createElement('h1')
  strArtist.textContent = data.strArtist
  dataContainer.append(strArtist)
  //strAristLogo
  //strGenre
  //strLabel
  //strFacebook
  //   //strAristClearart
}


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
