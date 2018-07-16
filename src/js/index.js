var jQuery = require('jQuery');
import 'popper.js';
import 'bootstrap';
require("../scss/main.scss");
// local file import
import { getMovieRecords } from './apiDataServices';
import { createTopMoviesList } from './createListAndCollection';
import { eventListener } from './eventListener';
import { baseUrl } from './apiPath';



// search movies
function getSearchresults(queryString) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query="+queryString+"&language=en-US&api_key=cea6ab96d4a919c98b0d4cad5404d30a",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

//fetch popular movies
function getPopularMovies(){
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=cea6ab96d4a919c98b0d4cad5404d30a",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}