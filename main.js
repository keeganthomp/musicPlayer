var button = document.querySelector(".searchBtn");
var searchInput = document.querySelector(".searchBar");

button.addEventListener("click", function() {
  var searchInputResults = searchInput.value;
  axios
    .get(
      "https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04"
    )
    .then(function(data) {
      var data = data.data;
      console.log(data);
    });
});
