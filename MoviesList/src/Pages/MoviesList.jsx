import React, { useState } from "react";
import tomJerry from "../assets/tom_jerry.webp";
import "./MoviesList.css";

const movies = [
  {
    name: "Tom and Jerry",
    type: "Animation, Comedy, Family",
    rating: 8.9,
    image: tomJerry,
    description:
      "Tom and Jerry are back in this hilarious animated adventure. Join the classic cat and mouse duo as they cause chaos, embark on a wild chase, and deliver laughs for the whole family. Expect fun, pranks, and heartwarming moments! This classic rivalry brings endless joy to viewers of all ages."
  }
];

export default function MoviesList() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="movies-page">
      <h2>Featured Movie</h2>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            {/* Image container ensures the full poster is visible */}
            <div className="image-container">
              <img src={movie.image} alt={movie.name} className="movie-img" />
            </div>

            <div className="overlay">
              <h3 className="movie-title">{movie.name}</h3>
              <p className="movie-type">{movie.type}</p>
              
              <p className={`movie-desc ${isExpanded ? "expanded" : "clamped"}`}>
                {movie.description}
              </p>
              
              <span 
                className="see-more" 
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show less" : "See more"}
              </span>

              <p className="rating">⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}