var jQuery = require('jQuery');
import {
 posterPath
} from './apiPath';

function createPopularMoviesList(containerId, movieData) {
 let popularMoviesCarouselItems = "";
 movieData.results.map((movieRecod, index) => {
  popularMoviesCarouselItems += `<div class="carousel-item col-md-3 carousel-item-popular-movie" id=${movieRecod.id} data-toggle="modal" data-target="#movieCollectionListView">
                                 <div class="card">
                                 <img src="${posterPath + movieRecod.poster_path}" alt="${movieRecod.original_title}" class="card-img-top img-fluid">
                                 <!-- <div class="card-body">
                                  <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieRecod.id}">Add to My List</button> 
                                 </div> -->
                                 </div>
                                 </div>`;
 });
 jQuery(".card-deck-popular-movie").html("");
 jQuery(".card-deck-popular-movie").append(popularMoviesCarouselItems);
 jQuery('.carousel-item-popular-movie').first().addClass('active');
}

function createMyCollectionOfMovies(movieColData) {
 let myCollectionOfMovies = "";
 movieColData.map((movieCol, index) => {
  myCollectionOfMovies += `<div class="carousel-item col-md-3 carousel-item-my-col-movie" data-toggle="modal" data-target="#movieDetailView">
                                 <div class="card">
                                 <img src="../assets/images/hero-image1.jpg" class="card-img-top img-fluid">
                                 <h5 class="card-title">${movieCol.name}</h5>
                                 </div>
                                 </div>`;
 });
 jQuery(".card-deck-my-collection-movie").html("");
 jQuery(".card-deck-my-collection-movie").append(myCollectionOfMovies);
 jQuery(".carousel-item-my-col-movie").first().addClass('active');
}


function createSearchMoviesList(containerId, movieData) {
 let searchMoviesCarouselItems = "";
 movieData.results.map((movieRecod, index) => {
  searchMoviesCarouselItems += `<div class="carousel-item col-md-3 carousel-item-search-movie" id=${movieRecod.id} data-toggle="modal" data-target="#movieDetailView">
                                 <div class="card">
                                 <img src="${posterPath + movieRecod.poster_path}" alt="${movieRecod.original_title}" class="card-img-top img-fluid">
                                 <!-- <div class="card-body">
                                 <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieRecod.id}" >Add to My List</button>
                                 </div> -->
                                 </div>
                                 </div>`;
 });
 jQuery(".card-deck-search-movie").html("");
 jQuery(".card-deck-search-movie").append(searchMoviesCarouselItems);
 jQuery('.carousel-item-search-movie').first().addClass('active');

}

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
 jQuery("#" + containerId).html("");
 jQuery("#" + containerId).html(movieDetails);

}

function createMovieCollection(containerId, movieCollectionTypesData) {

 let movieCollectionTypes = "";

 movieCollectionTypes = `<div class="d-flex flex-row justify-content-start align-items-center flex-wrap" role="group" aria-label="Movie Collection Button">`;

 movieCollectionTypesData.map((movieCol, index) => {
  movieCollectionTypes += `<button type="button" id="${movieCol.id}" class="btn btn-secondary btn-sm w-25 m-2 movie-col-type">${movieCol.name}</button>`;
 });

 movieCollectionTypes += `<button type="button" id="createNewMovieColId" class="btn btn-secondary btn-sm w-50 m-2">+Create New Collection</button></div>`;
 jQuery(".movie-full-details").append(movieCollectionTypes);
}

function createMyListOfMoviesByCollection() {

}

export {
 createPopularMoviesList,
 createMyCollectionOfMovies,
 createMyListOfMoviesByCollection,
 createSearchMoviesList,
 createMovieDetail,
 createMovieCollection
};
