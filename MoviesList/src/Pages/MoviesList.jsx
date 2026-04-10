import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesList.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://fooapi.com/api/movies");
        setMovies(response.data.data); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.poster} alt={movie.title} />

          <h2>{movie.title}</h2>

          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Actors:</strong> {movie.actors}</p>

          <p className="plot">
            <strong>Plot:</strong> {movie.plot}
          </p>

          <p className="rating">⭐ {movie.imdbRating}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;