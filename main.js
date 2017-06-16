var button = document.querySelector(".searchBtn");
var searchInput = document.querySelector(".searchBar");
var submitBtn = document.querySelector(".searchBtn");
var urlSc =
  "http://api.soundcloud.com/users/52955/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
var searchResultsContainer = document.querySelector(".searchResults");

const API_KEY = "?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";

function executeSearch(url) {
  var urlSc =
    "http://api.soundcloud.com/users/52955/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f";
  axios.get(url).then(function(response) {
    console.log(response.data);
    for (let i = 0; i < 15; i++) {
      createTracks(response.data[i]);
    }
  });
}

executeSearch(urlSc);

function createTracks(data) {
  function makeTrackWrapper() {
    var createTrackWrapper = document.createElement("div");
    createTrackWrapper.classList.add("trackWrapper");
    searchResultsContainer.appendChild(createTrackWrapper);

    var createArtistImage = document.createElement("img");
    createArtistImage.classList.add("userImg");
    createTrackWrapper.appendChild(createArtistImage);
    createArtistImage.src = data.user.avatar_url;
    
    var createSongTitle = document.createElement("p");
    createSongTitle.classList.add("songTitle");
    createTrackWrapper.appendChild(createSongTitle);
    createSongTitle.innerHTML = data.title;

    var createUserName = document.createElement("p");
    createUserName.classList.add("userName");
    createTrackWrapper.appendChild(createUserName);
    createUserName.innerHTML = data.user.username;
    

  }
  makeTrackWrapper();
}
