import style from "./Bodybanner.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Bodybanner() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovie, setSearchedMovie] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!e.target.value) {
      setSearchedMovie(null); // Reset searchedMovie if search term is empty
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to movie details page with search term as ID
    navigate(`/movie/${searchTerm}`);
  };

  useEffect(() => {
    if (searchTerm) {
      getMovieData();
    }
  }, [searchTerm]);

  const getMovieData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f94f39d28c41dbd8e27e717263c216d8&query=${searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setSearchedMovie(data.results[0]); // Set the first movie from the search results
        } else {
          setSearchedMovie(null); // Reset searchedMovie if no results found
        }
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setSearchedMovie(null); // Reset searchedMovie in case of error
      });
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.subContainer}>
          <input
            className={style.input}
            placeholder='Enter your favorite movie'
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type='submit' className={style.buttonStart}>
            Search
          </button>
        </div>
      </form>

      {searchedMovie && (
        <div className={style.mainContainer}>
          <div className={style.movieItem}>
            <img
              className={style.image}
              src={`https://image.tmdb.org/t/p/w500${searchedMovie.poster_path}`}
              alt={searchedMovie.title}
            />
            <h4 className={style.title}>{searchedMovie.title}</h4>
            <p className={style.rating}>Rating: {searchedMovie.vote_average}</p>
            <p className={style.releaseDate}>
              Release Date: {searchedMovie.release_date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bodybanner;
