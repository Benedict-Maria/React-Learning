import React from "react";
import "./MoviesList.css";
const movies = [
    {
        name: "Zootopia",
        type: "Animation, Comedy",
        rating: "8.0",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_zootopia_19892_398e5a2f.jpeg",
        description:
            "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy that threatens the harmony of their world."
    },
    {
        name: "Encanto",
        type: "Fantasy, Family",
        rating: "7.2",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_encanto_21944_1a0f0e61.jpeg",
        description:
            "The Madrigal family lives in a magical house where each member has unique powers, except Mirabel. She embarks on a journey to save her family when their magic is in danger."
    },
    {
        name: "Elemental",
        type: "Romance, Animation",
        rating: "7.0",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_elemental_26973_aa9b5c9d.jpeg",
        description:
            "In a world where fire, water, earth, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental in common."
    },
    {
        name: "Ratatouille",
        type: "Animation, Comedy",
        rating: "8.1",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
        description:
            "A rat named Remy dreams of becoming a great chef in Paris. He forms an unlikely partnership with a young kitchen worker to create extraordinary dishes while hiding his true identity."
    }
];

export default function MoviesList() {
    return (
        <div className="movies-page">
            <h2>🎬 Movies</h2>

            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <div className="movie-card" key={index}>

                        {/* Image */}
                        <img src={movie.image} alt={movie.name} />

                        {/* Overlay Content */}
                        <div className="overlay">
                            <h3>{movie.name}</h3>
                            <p className="type">{movie.type}</p>
                            <p className="desc">{movie.description}</p>
                            <p className="rating">⭐ {movie.rating}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
