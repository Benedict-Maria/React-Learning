import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesList.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState({});

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

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getRatingColor = (rating) => {
    const rate = parseFloat(rating);
    if (rate >= 9) return "green";
    if (rate >= 7) return "yellow";
    if (rate >= 5) return "orange";
    return "red";
  };

  return (
    <div className="movies-page">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />

            <h2>{movie.title}</h2>

            <p className="genre">Genre: {movie.genre}</p>
            <p>Actors: {movie.actors}</p>

            <p className={`plot ${expanded[movie.id] ? "expanded" : ""}`}>
              {movie.plot}
            </p>

            {expanded[movie.id] && (
              <p className="language">Language: {movie.language}</p>
            )}

            <span
              className="view-details"
              onClick={() => toggleExpand(movie.id)}
            >
              {expanded[movie.id] ? "Show less" : "Show more"}
            </span>

            <div className="rating-bar">
              <div
                className={`fill ${getRatingColor(movie.imdbRating)}`}
                style={{ width: `${movie.imdbRating * 10}%` }}
              ></div>
            </div>

            <span className="rating-text">{movie.imdbRating}/10</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MoviesList;