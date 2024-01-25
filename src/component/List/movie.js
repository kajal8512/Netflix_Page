// MovieDataComponent.jsx

import React, { useEffect, useState } from "react";
import style from "./movie.module.css";

function MovieDataComponent() {
  const [movieList, setMovieList] = useState([]);

  const getMovieData = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=f94f39d28c41dbd8e27e717263c216d8"
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className={style.mainContainer}>
      {movieList.map((item) => (
        <div className={style.movieItem} key={item.id}>
          <img
            className={style.image}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
          <h4 className={style.title}>{item.title}</h4>
          <p className={style.rating}>Rating: {item.vote_average}</p>
          <p className={style.releaseDate}>Release Date: {item.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieDataComponent;
