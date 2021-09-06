//Global variables
const form = document.querySelector('#search-form');
const dataContainer = document.querySelector('#data-container');
const favoriteArtistsArr = [];
let saveArtistObj = "";

//calling API
async function fetchData(artist) {
  const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
  try {
    const response = await axios(url)
    if (response.data.artists[0].strArtist === "V") {
      alert("Please write a name!")
    } else {
      // console.log(response.data.artists[0])
      showArtInfo(response.data.artists[0])
    }
  } catch (error) {
    console.error(error)
  }
}

//assign data from API



//showing selected data from API
function showArtInfo(data) {
  saveArtistObj = data;
  console.log(saveArtistObj);
  let artInfo = `
    <img src="${data.strArtistClearart}" style="height: 150px; width: 150px; display: block; margin-left: auto; margin-right:auto">
    <h1 style="font-family: helvetica; text-align: center">${data.strArtist}</h1>
    <h4 style="font-family: helvetica; text-align: center;">Genre: ${data.strGenre}</h4>
    <h4 style="font-family: helvetica; text-align: center;">Label: ${data.strLabel}</h4>
    <h4 style="font-family: helvetica; color: black; text-align: center; color: white;">${data.strBiographyEN}</h4>
    <h4 style="font-family: helvetica; font-weight: bold; text-align: center;"><a href="https://${data.strWebsite}" target="_blank">Visit ${data.strArtist}'s Website</h4>
    `
  dataContainer.insertAdjacentHTML('beforeend', artInfo)
  return artInfo
}

//search bar functions
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#artist-search').value
  removeArtist()
  fetchData(inputValue)
  document.querySelector('#artist-search').value = ''
})

//removing previous result
function removeArtist() {
  while (dataContainer.lastChild) {
    dataContainer.removeChild(dataContainer.lastChild)
  }
}

// //add to favorites
const addFavorites = document.querySelector("#addFav");

function saveToFav(data) {
  favoriteArtistsArr.push(data)
  localStorage.setItem("favorites", JSON.stringify(favoriteArtistsArr))
}

addFavorites.addEventListener("click", () => {
  saveToFav(saveArtistObj)
})

// // View favorites

const viewFavButton = document.querySelector("#view-favorites");

function viewFavorites() {
  removeArtist();
  let favArtist = localStorage.getItem("favorites")
  favArtist = JSON.parse(favArtist)
  console.log(favArtist)

  // append name of artist to the favorites page by looping
  for (let i = 0; i < favArtist.length; i++) {
    const favInfo = document.createElement("div")
    favInfo.className = "fav-container"
    const name = document.createElement("h3")
    name.className = "fav-name"
    name.innerText = favArtist[i].strArtist
    dataContainer.append(favInfo)
    favInfo.append(name)
  }
}

viewFavButton.addEventListener("click", viewFavorites)

// hover Instagram (image size change)
// source from https://www.w3schools.com/jsref/event_onmouseover.asp
function bigImg(x) {
  x.style.height = "35px";
  x.style.width = "35px";
}

function normalImg(x) {
  x.style.height = "20px";
  x.style.width = "20px";
}