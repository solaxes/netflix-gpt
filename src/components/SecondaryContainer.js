import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  // Subcribing to the Store
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-96 relative z-100">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />

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
