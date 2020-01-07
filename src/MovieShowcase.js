import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(element => 
    <MovieCard title = {element.title} IMDBRating = {element.IMDBRating} genres = {element.genres} poster = {element.poster}/>
    )// map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  } 
} 
