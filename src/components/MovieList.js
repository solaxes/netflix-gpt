import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold my-2 mx-2 text-white">{title}</h1>
      <div className="flex py-10  overflow-x-scroll">
        <div className="flex shrink-0 ">
          {movies &&
            movies.map((res) => <MovieCard key={res.id} movie={res} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
