import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  // Subcribing to the Store
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-96 relative z-100">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Featured"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />

        {/*
        MovieList - Popular
          - Movie Cards * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror
      */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
