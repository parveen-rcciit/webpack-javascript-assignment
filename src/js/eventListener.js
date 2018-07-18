var jQuery = require('jQuery');
import { getFullMovieDetails, saveDataTOJsonSever } from './apiDataService'
import { createMovieDetail } from './createListAndCollection'
import { baseUrl } from './apiPath'
function eventListener() {
    jQuery(document).on("click", ".collectionButton", function () {
        var movieId = jQuery(this).attr("movieId");
        getFullMovieDetails(movieId, addCollection);

    });
    jQuery(document).on("click", ".carousel-item-popular-movie, .carousel-item-search-movie", function () {
        var movieId = jQuery(this).attr("id");
        getFullMovieDetails(movieId, showFullMovieDetails);

    });
}
function showFullMovieDetails(data) {
    //jQuery("#detailsPage").removeClass("d-none");
    //jQuery("#detailsPage").addClass("view-movie-details");
    createMovieDetail("movieDetail", data);
    //jQuery("#popularMovies").addClass("d-none");
    //jQuery("#myListMovies").addClass("d-none");
    
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
    saveDataTOJsonSever(baseUrl + "Animation", saveData, updateCollectionList)
}
function updateCollectionList(msg) {
    console.log(msg);
}
export { eventListener };