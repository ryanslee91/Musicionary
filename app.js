const favArtistsArr = [];
let addFavArtists = '';

const addFavorites = document.querySelector("#addFav")

function addToFavorites(artistData) {
  favArtistsArr.push(artistData.data)
  localStorage.setItem("favorites", JSON.stringify(favArtistsArr))
}

addFavorites.addEventListener("click", () => {
  addToFavorites(addFavArtists)
})

// View favorites

const favoritesButton = document.querySelector("#view-favorites")

function viewFavorites() {
  removeArtist()
  let favArtist = localStorage.getItem("favorites")
  favArtist = JSON.parse(favArtist)
  console.log(favArtist)
  
  // Looping through favorites and appending each name and image to the page

  for (let i = 0; i < favArtist.length; i++) {
    const favoriteInfo = document.createElement("div")
    favoriteInfo.className = "favorite-container"
    const name = document.createElement("h3")
    name.className = "favorite-name"
    const image = document.createElement("img")
    image.className = "favorite-artists-image"
 

    dataContainer.append(favoriteInfo)
    favoriteInfo.append(image)
    favoriteInfo.append(name)
  }

}

favoritesButton.addEventListener("click", viewFavorites)


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

//showing selected data from API
function showArtInfo(data) {
  const dataContainer = document.querySelector('#artist-data')
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
const form = document.querySelector('#artist-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#artist-search').value
  removeArtist()
  fetchData(inputValue)
  document.querySelector('#artist-search').value = ''
})

//removing previous result
function removeArtist() {
  const dataContainer = document.querySelector('#artist-data')
  while (dataContainer.lastChild) {
    dataContainer.removeChild(dataContainer.lastChild)
  }
}
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