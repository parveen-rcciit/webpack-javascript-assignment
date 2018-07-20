var jQuery = require('jQuery');
import {
 posterPath
} from './apiPath';

//displays popuar movies on home page
function createPopularMoviesList(containerId, movieData) {
 var movieListSize = jQuery(".carousel-item-popular-movie", ".card-deck-popular-movie").length;
 let popularMoviesCarouselItems = "";
 movieData.results.map((movieRecod, index) => {
  popularMoviesCarouselItems += `<div class="carousel-item col-md-2 carousel-item-popular-movie" id=${movieRecod.id} data-toggle="modal" data-target="#movieDetailView">
                                 <div class="card">
                                 <img src="${posterPath + movieRecod.poster_path}" alt="${movieRecod.original_title}" class="card-img-top img-fluid">
                                 <!-- <div class="card-body">
                                  <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieRecod.id}">Add to My List</button> 
                                 </div> -->
                                 </div>
                                 </div>`;
 });
 jQuery(".card-deck-popular-movie").append(popularMoviesCarouselItems);
 if (movieListSize == 0) {
  jQuery('.carousel-item-popular-movie').first().addClass('active');
 }
}

//displays search movie results on home page
function createSearchMoviesList(containerId, movieData) {
 var searchMovieListSize = jQuery(".carousel-item-search-movie", ".card-deck-search-movie").length;
 let searchMoviesCarouselItems = "";
 movieData.results.map((movieRecod, index) => {
  searchMoviesCarouselItems += `<div class="carousel-item col-md-2 carousel-item-search-movie" id=${movieRecod.id} data-toggle="modal" data-target="#movieDetailView">
                                 <div class="card">
                                 <img src="${posterPath + movieRecod.poster_path}" alt="${movieRecod.original_title}" class="card-img-top img-fluid">
                                 <!-- <div class="card-body">
                                 <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieRecod.id}" >Add to My List</button>
                                 </div> -->
                                 </div>
                                 </div>`;
 });
 jQuery(".card-deck-search-movie").append(searchMoviesCarouselItems);
 if (searchMovieListSize == 0) {
  jQuery('.carousel-item-search-movie').first().addClass('active');
 }

}
//displays movie details
function createMovieDetail(containerId, movieDetailData) {

 let movieDetails = `<div class="section-content">
                          <div class="container">
                              <div class="row">
                                  <div class="col-md-4 pt-1">
                                      <div class="movie-image">
                                          <img src="${posterPath + movieDetailData.poster_path}" alt="${movieDetailData.title}" class="img-thumbnail rounded">
                                      </div>
                                  </div>
                                     <div class="col-md-8 pt-1">
                                      <div class="movie-full-details">
                                          <h2>${movieDetailData.title}</h2>
                                          <div class="" movie-details-overview>
                                              <h3>Overview</h3>
                                              <p>${movieDetailData.overview}</p>
                                          </div>
                                        <button class="collectionButton btn btn-secondary btn-sm" type="button" movieId="${movieDetailData.id}">Add to My List</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
 jQuery("#" + containerId).html(movieDetails);

}
//displays all collection buttons
function createMovieCollectionButton(containerId, movieCollectionTypesData) {

 let movieCollectionTypes = "";

 movieCollectionTypes = `<div class="d-flex flex-row justify-content-start align-items-center flex-wrap" role="group" aria-label="Movie Collection Button">`;

 movieCollectionTypesData.map((movieCol, index) => {
  movieCollectionTypes += `<button type="button" id="${movieCol.id}" class="btn btn-secondary btn-sm w-25 m-2 movie-col-type">${movieCol.name}</button>`;
 });

 movieCollectionTypes += `<button type="button" id="createNewMovieColId" class="btn btn-secondary btn-sm w-50 m-2">+Create New Collection</button></div>`;
 jQuery(".movie-full-details").append(movieCollectionTypes);
}


//displays collection list on home page
function createMyCollectionOfMovies(movieColData) {
 let myCollectionOfMovies = "";
 movieColData.map((movieCol, index) => {
  myCollectionOfMovies += `<div id=${movieCol.id} class="carousel-item col-md-2 carousel-item-my-collection-movie" data-toggle="modal" data-target="#movieCollectionListView">
                                 <div class="card">
                                 <img src="../assets/images/my-col.jpg" class="card-img-top img-fluid">
                                 <h6 class="card-title card-tilte-list">${movieCol.name}</h6>
                                 </div>
                                 </div>`;
 });
 jQuery(".card-deck-my-collection-movie").append(myCollectionOfMovies);
 jQuery(".carousel-item-my-collection-movie").first().addClass('active');
}

//displays all movies in a collection
function createMoviesByCollection(movieCollectionData) {
 let movieCollectionDetails = "";
 jQuery("#movieCollectionList").html("");
 movieCollectionData.map((movieColDetailData, index) => {
  movieCollectionDetails += `<div class="section-content">
                          <div class="container">
                              <div class="row">
                                  <div class="col-md-3 pt-1">
                                      <div class="movie-image-col w-75" movieId="${movieColDetailData.id}">
                                          <img src="${posterPath + movieColDetailData.poster_path}" alt="${movieColDetailData.title}" class="img-thumbnail rounded">
                                      </div>
                                  </div>
                                     <div class="col-md-9 pt-1">
                                      <div class="movie-full-details">
                                          <h3>${movieColDetailData.title}</h3>
                                          <div class="" movie-details-overview>
                                              <h5>Overview</h5>
                                              <p>${movieColDetailData.overview}</p>
                                         </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
 });

 jQuery("#movieCollectionList").append(movieCollectionDetails);
}


jQuery("document").on("error", ".movie-image-col", function () {
 var imgSrc = this.src.replace(/ /g, "/");
 jQuery(this).attr("src", imgSrc);
 return true;
});

export {
 createPopularMoviesList,
 createMyCollectionOfMovies,
 createMoviesByCollection,
 createSearchMoviesList,
 createMovieDetail,
 createMovieCollectionButton
};
