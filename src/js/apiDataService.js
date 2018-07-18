let headerJson = { method: "get", "Access-Control-Allow-Origin": "*", mode: "cors", "Content-Type": "application/json" };
var jQuery = require('jQuery');
import { movieDetailPath, apiKey } from './apiPath';

// common method to get data from API
function fetchDataFromApi(url, callback) {
    fetch(url, headerJson).then(function (response) {
        // Examine the text in the response
        response.json().then(function (data) {
            console.log(data);
            callback(data);
        });
    });
}

//get popular movies
function getPopularMovies(pagN0, callback) {
    fetchDataFromApi(`https://api.themoviedb.org/3/discover/movie${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagN0}`, callback);
}

// get search movies
function getSearchMovieResults(movieName, callback) {
    fetchDataFromApi(`https://api.themoviedb.org/3/search/movie?api_key=cea6ab96d4a919c98b0d4cad5404d30a&language=en-US&query=${movieName}&page=1&include_adult=false`, callback);
}

// get full Movie details
function getFullMovieDetails(movieRefId, showFullMovieDetails) {
    const url = movieDetailPath + movieRefId + apiKey;
    fetchDataFromApi(url, showFullMovieDetails);
}
function getCollectionTypes() {
    fetchDataFromApi('https://api.themoviedb.org/3/genre/movie/list?api_key=e423c3150a1dbc6ec70f9322a432eb28&language=en-US', getGenreMovieList);
}
// saving data to collection
function saveDataTOJsonSever(url, passData, callback) {
    jQuery.ajax({
        url: url,
        method: "POST",
        data: passData,
        dataType: "json"
    }).done(function (msg) {
        callback(msg);
    }).fail(function (jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
    });
}
export { getPopularMovies, getSearchMovieResults, getFullMovieDetails, saveDataTOJsonSever };