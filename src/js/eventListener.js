var jQuery = require('jQuery');
import {
    getFullMovieDetails,
    saveDataTOJsonSever,
    getMovieCollectionTypes,
    getMyListOfMoviesByCollection
} from './apiDataService'
import {
    createMovieDetail,
    createMovieCollectionButton,
    createMoviesByCollection
} from './createListAndCollection'
import {
    baseUrl
} from './apiPath'

function eventListener() {
    
    //adds movie to a collection
    jQuery(document).on("click", ".movie-col-type", function () {
        var movieId = jQuery(this.parentElement.previousElementSibling).attr("movieid");
        getFullMovieDetails(movieId, addMovieToCollection);

    });
    
    //shows full movie details
    jQuery(document).on("click", ".carousel-item-popular-movie, .carousel-item-search-movie", function () {
        var movieId = jQuery(this).attr("id");
        getFullMovieDetails(movieId, showFullMovieDetails);
        //getMovieCollectionTypes(showMovieCollectionTypes);

    });
    
    jQuery(document).on("click", ".collectionButton", function(){
        getMovieCollectionTypes(showMovieCollectionTypes);
    });
    //shows movies by collection
    jQuery(document).on("click", ".carousel-item-my-collection-movie", function () {
        var colType = jQuery(this).attr("id");
        getMyListOfMoviesByCollection(colType, showMoviesByCollection);
    });
    
    //adds textbox to capture text for new collection button
    jQuery(document).on("click", "#createNewMovieColId", function () {
        var buttonText = `<input type="text" id="newButtonId" name"buttonText">`;
        jQuery("#createNewMovieColId").before(buttonText);
    });
    
    //creates new collection button
    jQuery(document).on("keypress", "#newButtonId", function (e) {
        if (e.which == 13) {
            var buttonText = jQuery(this).val();
            var buttonId = buttonText.toLocaleLowerCase();
            var newColButton = `<button type="button" id="${buttonId}" class="btn btn-secondary btn-sm w-25 m-2 movie-col-type">${buttonText}</button>`;
            jQuery("#newButtonId").remove();
            jQuery("#createNewMovieColId").before(newColButton);
            addToCollection(buttonId, buttonText);
        }
    });
}

function showFullMovieDetails(data) {
    //jQuery("#detailsPage").removeClass("d-none");
    //jQuery("#detailsPage").addClass("view-movie-details");
    createMovieDetail("movieDetail", data);
    //jQuery("#popularMovies").addClass("d-none");
    //jQuery("#myListMovies").addClass("d-none");

}

function showMovieCollectionTypes(data) {
    createMovieCollectionButton("movieDetail", data);
}

function showMoviesByCollection(data) {
    createMoviesByCollection(data);
}

function addMovieToCollection(data) {
    var colType = jQuery(":focus").attr("id");
    var saveData = {
        id: data.id,
        original_language: data.original_language,
        overview: data.overview,
        poster_path: data.poster_path,
        release_date: data.release_date,
        title: data.title,
        vote_average: data.vote_average
    };
    saveDataTOJsonSever(baseUrl + colType, saveData, updateCollectionList)
}

function addToCollection(colId, colname){
    var saveCol = {
        id: colId,
        name: colname
    };
    saveDataTOJsonSever(baseUrl + "genres", saveCol , updateCollectionList);
}

function updateCollectionList(msg) {
    console.log(msg);
}
export {
    eventListener
};
