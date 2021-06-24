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
// fetchData('linkin_park')

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
  let artInfo = `
    <h1 style="font-family: helvetica; text-align: center">${data.strArtist}</h1>
    <img src="${data.strArtistClearart}" style="height: 150px; width: 150px; display: block; margin-left: auto; margin-right:auto">
    <h4 style="font-family: helvetica; text-align: center">GENRE: ${data.strGenre}</h4>
    <h4 style="font-family: helvetica; text-align: center">LABEL: ${data.strLabel}</h4>
    <div style="font-family: helvetica; text-align: center"><a href="https://${data.strWebsite}" target="_blank">${data.strArtist}'s Website </div>
    <h4 style="font-family: helvetica; text-align: center">BIO: ${data.strBiographyEN}</h4>
    `
  dataContainer.insertAdjacentHTML('beforeend', artInfo)
  return artInfo
}

const form = document.querySelector('#artist-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#artist-search').value
  // console.log(inputValue)

  //   alert("Your artist is not found!")
  // how to alert when there is typo, which would bring no data?
  checkValues()
  removeArtist()
  fetchData(inputValue)
  document.querySelector('#artist-search').value = ''
})

function removeArtist() {
  const dataContainer = document.querySelector('#artist-data')
  while (dataContainer.lastChild) {
    dataContainer.removeChild(dataContainer.lastChild)
  }
}
function checkValues() {
  const inputValue = document.querySelector("#artist-search").value;
  return inputValue.value != "";
}

//mediaquery
//flexbox