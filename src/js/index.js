var jQuery = require('jQuery');
//import * as jQuery from "jquery";
import 'popper.js';
import 'bootstrap';
import 'jquery-ui';
//import 'bootstrap/js/dist/carousel';
//import 'bootstrap/js/dist/util';
import img from '../assets/images/hero-image1.jpg'
require("../scss/style.scss");
// local file import
import {
  getPopularMovies,
  getMyListOfMoviesByCollection,
  getMovieCollectionTypes,
  getSearchMovieResults
} from './apiDataService';
import {
  createPopularMoviesList,
  createMyCollectionOfMovies,
  createMyListOfMoviesByCollection,
  createSearchMoviesList
} from './createListAndCollection';
import {
  eventListener
} from './eventListener';
import {
  baseUrl
} from './apiPath';



function showPopularMovies(data) {
  createPopularMoviesList("topMoviesContainer", data);
}

function showSearchMovies(data) {
  createSearchMoviesList("searchMovieResult", data);
  jQuery("#searchMovieResult").removeClass("d-none");
  jQuery("#searchMovieResult").addClass("view-search-details");
}

function showMyCollectionOfMovies(data){
   createMyCollectionOfMovies(data);
}
function showMyListOfMoviesByCollection(data){
  createMyListOfMoviesByCollection(data);
}
function showMovieDetail(movieDetails) {

}

function saveDataToCollection(collectionname) {
  saveDataTOJsonSever(baseUrl + collectionname, data, updateColloctionDom)
}

function updateColloctionDom() {

}

function localEventListener() {
  eventListener();
  /*jQuery("#homePage").on("click", "#loadMovie", function () {
    var pagenumber = parseInt(jQuery(this).attr("pagenumber"));
    pagenumber = pagenumber + 1;
    getPopularMovies(pagenumber, showPopularMovies);
    jQuery(this).attr("pagenumber", pagenumber);
  });*/
}
jQuery(document).ready(function () {
  console.log('app initialized');
  getPopularMovies(1, showPopularMovies);
  getMovieCollectionTypes(showMyCollectionOfMovies);
  localEventListener();
  //carousel
  jQuery('#myCarousel, #myCarousel-search, #myCarousel-myColMovie').on('slid.bs.carousel', function () {
    jQuery(".carousel-item.active:nth-child(" + (jQuery(".carousel-inner .carousel-item").length - 1) + ") + .carousel-item").insertBefore(jQuery(".carousel-item:first-child"));
    jQuery(".carousel-item.active:last-child").insertBefore(jQuery(".carousel-item:first-child"));
  });

  jQuery(document).on("click", "#searchMovieButton", function () {
    console.log("inside search movie function");
    var movieName = jQuery('#movieName').val();
    console.log("movieName=" + movieName);
    getSearchMovieResults(movieName, showSearchMovies);
    return false;

    /*  movieName.autocomplete({
        minLength: 5,
        source: source
      });*/
  });
});

// A custom jQuery method for placeholder text:
/*jQuery.fn.defaultText = function(value){

    var element = this.eq(0);
    element.data('defaultText',value);

    element.focus(function(){
        if(element.val() == value){
            element.val('').removeClass('defaultText');
        }
    }).blur(function(){
        if(element.val() == '' || element.val() == value){
            element.addClass('defaultText').val(value);
        }
    });

    return element.blur();
  
  
};*/
