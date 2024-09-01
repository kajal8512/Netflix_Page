import { useEffect, useState } from "react";
import style from "./Movie.module.css";

function MovieDataComponent() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=f94f39d28c41dbd8e27e717263c216d8";

  const getMovieData = async () => {
    try {
      const res = await fetch(url);
      const getData = await res.json();
      console.log(getData);
      setMovieList(getData.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  if (loading)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Error: {error.message} </h1>
      </div>
    );

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
