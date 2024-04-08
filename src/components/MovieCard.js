import React from "react";
import { IMAGE_URL } from "../config/constant";

const MovieCard = ({ movie }) => {
  return (
    <div className="mx-2">
      <img src={IMAGE_URL + movie.poster_path} alt="movie" className="w-full" />
    </div>
  );
};

export default MovieCard;
