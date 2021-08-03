
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
    <h1 id="artistName" style="font-family: helvetica; text-align: center">${data.strArtist}</h1>
    <img id="artistImg" src="${data.strArtistClearart}" style="height: 150px; width: 150px; display: block; margin-left: auto; margin-right:auto">
    <h4 id="artistGenre" style="font-family: helvetica; text-align: center;">Genre: ${data.strGenre}</h4>
    <h4 style="font-family: helvetica; color: black; text-align: center; color: white;">${data.strBiographyEN}</h4>
    <div style="font-family: helvetica; font-weight: bold; text-align: center;"><a href="https://${data.strWebsite}" target="_blank">Visit ${data.strArtist}'s Website </div>
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