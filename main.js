var button = document.querySelector(".searchBtn");
var searchInput = document.querySelector(".searchBar");
var submitBtn = document.querySelector(".searchBtn");
const URL = "https://api.soundcloud.com/tracks/";
const QUERY = "?q=";
const APIKEY = "client_id=8538a1744a7fdaa59981232897501e04";
var searchResultsContainer = document.querySelector(".searchResults");
var finalResults = [];
var trackContainers;

submitBtn.addEventListener("click", function() {
  clearResults();
  var userInput = searchInput.value.replace(/\s+/g, "-").toLowerCase();
  axios
    .get(URL + QUERY + userInput + "&" + APIKEY)
    .then(function(response) {
      finalResults = response.data;
      console.log("finalResults:", finalResults);
      for (let i = 0; i < finalResults.length; i++) {
        createTracks(finalResults[i]);
      }
    })
    .catch(function() {
      console.log("Nothing Here");
    });
});

function clearResults() {
  searchResultsContainer.innerHTML = "";
}

function createTracks(data) {
  function makeTrackWrapper() {
    var createTrackWrapper = document.createElement("div");
    createTrackWrapper.classList.add("trackWrapper");
    searchResultsContainer.appendChild(createTrackWrapper);

    var createArtistImage = document.createElement("img");
    createArtistImage.classList.add("userImg");
    createTrackWrapper.appendChild(createArtistImage);
    if (!data.artwork_url) {
      createArtistImage.src =
        "http://www.i-dedicate.com/media/profile_images/default.png";
    } else {
      createArtistImage.src = data.artwork_url;
    }

    var createSongTitle = document.createElement("p");
    createSongTitle.classList.add("songTitle");
    createTrackWrapper.appendChild(createSongTitle);
    createSongTitle.innerHTML = data.title;

    var createUserName = document.createElement("p");
    createUserName.classList.add("userName");
    createTrackWrapper.appendChild(createUserName);
    createUserName.innerHTML = data.user.username;
  }

  trackContainers = document.querySelectorAll(".trackWrapper");
  console.log("TrackContainers:", trackContainers);
//   for(let k = 0; k < trackContainers.length; k++){
//       trackContainers[i].addEventListener("click", function(){
//           console.log("looping:",trackContainers[i]);
//       })
//   }

  makeTrackWrapper();
}
