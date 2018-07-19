var jQuery = require('jQuery');
import 'popper.js';
import 'bootstrap';
import 'jquery-ui';
//import 'font-awesome';
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

function showMyCollectionOfMovies(data) {
  createMyCollectionOfMovies(data);
}

function saveDataToCollection(collectionname) {
  saveDataTOJsonSever(baseUrl + collectionname, data, updateColloctionDom)
}

function localEventListener() {
  eventListener();
  jQuery(document).on("click", "#nextMovieList", function () {
    var activeElemIndex = jQuery(".carousel-item-popular-movie").index(jQuery(".carousel-item-popular-movie.active"));
    if (activeElemIndex % 13 == 0) {
      var pageNumber = parseInt(jQuery(this).attr("pageNumber"));
      pageNumber = pageNumber + 1;
      getPopularMovies(pageNumber, showPopularMovies);
      jQuery(this).attr("pageNumber", pageNumber);
    }
  });

  jQuery(document).on("click", "#nextSearchMovieList", function () {
    var activeElemIndex = jQuery(".carousel-item-search-movie").index(jQuery(".carousel-item-search-movie.active"));
    if (activeElemIndex % 13 == 0) {
      var pageNumber = parseInt(jQuery(this).attr("pageNumber"));
      pageNumber = pageNumber + 1;
      var movieName = jQuery('#movieName').val();
      getSearchMovieResults(movieName, pageNumber, showSearchMovies);
      jQuery(this).attr("pageNumber", pageNumber);
    }
  });

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
    var movieName = jQuery('#movieName').val();
    getSearchMovieResults(movieName, 1, showSearchMovies);
    return false;
  });
});
