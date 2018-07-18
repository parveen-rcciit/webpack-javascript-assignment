var jQuery = require('jQuery');
import {
 posterPath
} from './apiPath';

function createPopularMoviesList(containerId, movieData) {
 //console.log('movieData.results length ='+movieData.results.length);
 let popularMoviesCarouselItems = "";
 movieData.results.map((movieRecod, index) => {
  popularMoviesCarouselItems += `<div class="carousel-item col-md-3 carousel-item-popular-movie" id=${movieRecod.id} data-toggle="modal" data-target="#movieDetailView">
                                 <div class="card">
                                 <img src="${posterPath + movieRecod.poster_path}" alt="${movieRecod.original_title}" class="card-img-top img-fluid">
                                 <div class="card-body">
                                 <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieRecod.id}">Add to My List</button>
                                 </div>
                      f           </div>
                                 </div>`;
 });
 jQuery(".card-deck-search-movie").html("");
 jQuery(".card-deck-popular-movie").append(popularMoviesCarouselItems);
 jQuery('.carousel-item-popular-movie').first().addClass('active');
}


function createSearchMoviesList(containerId, movieData) {
 let searchMoviesCarouselItems = "";
 movieData.results.map((movieRecod, index) => {
  searchMoviesCarouselItems += `<div class="carousel-item col-md-3 carousel-item-search-movie" id=${movieRecod.id} data-toggle="modal" data-target="#movieDetailView">
                                 <div class="card">
                                 <img src="${posterPath + movieRecod.poster_path}" alt="${movieRecod.original_title}" class="card-img-top img-fluid">
                                 <div class="card-body">
                                 <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieRecod.id}" >Add to My List</button>
                                 </div>
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
                                          <button class="collectionButton btn btn-secondary btn-sm" type="submit" movieId="${movieDetailData.id}">Add to My List</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
 jQuery("#" + containerId).html("");
 jQuery("#" + containerId).html(movieDetails);

}
export {
 createPopularMoviesList,
 createSearchMoviesList,
 createMovieDetail
};
