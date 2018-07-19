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
function getPopularMovies(pageNumber, callback) {
    fetchDataFromApi(`https://api.themoviedb.org/3/discover/movie${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`, callback);
}

// get search movies
function getSearchMovieResults(movieName, pageNumber, callback) {
    fetchDataFromApi(`https://api.themoviedb.org/3/search/movie?api_key=cea6ab96d4a919c98b0d4cad5404d30a&language=en-US&query=${movieName}&page=${pageNumber}&include_adult=false`, callback);
}

// get full Movie details
function getFullMovieDetails(movieRefId, showFullMovieDetails) {
    const url = movieDetailPath + movieRefId + apiKey;
    fetchDataFromApi(url, showFullMovieDetails);
}

//get movie collection types
function getMovieCollectionTypes(callback) {
    fetchDataFromApi(`http://localhost:3031/genres`, callback);
    //fetchDataFromApi('https://api.themoviedb.org/3/genre/movie/list?api_key=cea6ab96d4a919c98b0d4cad5404d30a&language=en-US', callback);
}

//get movies by collection
function getMyListOfMoviesByCollection(colType, callback){
    fetchDataFromApi(`http://localhost:3031/${colType}`, callback);
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
export { getPopularMovies, getSearchMovieResults, getFullMovieDetails, getMovieCollectionTypes, getMyListOfMoviesByCollection, saveDataTOJsonSever };