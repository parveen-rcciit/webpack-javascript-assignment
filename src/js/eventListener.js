var jQuery = require('jQuery');
import { getFullMovieDetails, saveDataTOJsonSever, getMovieCollectionTypes } from './apiDataService'
import { createMovieDetail, createMovieCollection } from './createListAndCollection'
import { baseUrl } from './apiPath'
function eventListener() {
    jQuery(document).on("click", ".movie-col-type", function () {
        console.log("m inside col func");
        var movieId = jQuery(this.parentElement.previousElementSibling).attr("movieid");
        var colType = jQuery(this).attr("id");
        getFullMovieDetails(movieId, addCollection);

    });
    jQuery(document).on("click", ".carousel-item-popular-movie, .carousel-item-search-movie", function () {
        var movieId = jQuery(this).attr("id");
        getFullMovieDetails(movieId, showFullMovieDetails);
        getMovieCollectionTypes(showMovieCollectionTypes);

    });
}
function showFullMovieDetails(data) {
    //jQuery("#detailsPage").removeClass("d-none");
    //jQuery("#detailsPage").addClass("view-movie-details");
    createMovieDetail("movieDetail", data);
    //jQuery("#popularMovies").addClass("d-none");
    //jQuery("#myListMovies").addClass("d-none");
    
}

function showMovieCollectionTypes(data){
    createMovieCollection("movieDetail", data);
}

function addCollection(data) {
    var saveData = {
        id: data.id,
        original_language: data.original_language,
        overview: data.overview,
        poster_path: data.poster_path,
        release_date: data.release_date,
        title: data.title,
        vote_average: data.vote_average
    };
    saveDataTOJsonSever(baseUrl + "action", saveData, updateCollectionList)
}
function updateCollectionList(msg) {
    console.log(msg);
}
export { eventListener };