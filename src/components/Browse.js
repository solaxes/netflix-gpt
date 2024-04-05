import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();

  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
