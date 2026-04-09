import React, { useState, useEffect } from "react";
import zootopia from "../assets/zootopia.jpg";
import encanto from "../assets/encanto.jpeg";
import elemental from "../assets/elemental.jpg";
import ratatouille from "../assets/ratatouille.jpeg";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import "./Home.css";

const movies = [
    { title: "Zootopia", img: zootopia, rating: 9.1 },
    { title: "Encanto", img: encanto, rating: 8.5 },
    { title: "Elemental", img: elemental, rating: 9.3 },
    { title: "Ratatouille", img: ratatouille, rating: 9.0 },
];

const heroSlides = [
    {
        img: hero1,
        title: "Avengers: Endgame",
        description:
            "The Avengers assemble once more to reverse Thanos' actions and restore balance.",
    },
    {
        img: hero2,
        title: "Beauty and the Beast",
        description:
            "A magical love story between a young woman and a cursed prince.",
    },
    {
        img: hero3,
        title: "Spider-Man",
        description:
            "A young hero balances life and responsibility while protecting the city.",
    },
    {
        img: hero4,
        title: "The Lion King",
        description:
            "A lion cub must embrace his destiny and become king.",
    },
    {
        img: hero5,
        title: "The Conjuring",
        description:
            "Paranormal investigators help a family terrorized by dark forces.",
    },
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            <div
                className="hero"
                style={{
                    backgroundImage: `url(${heroSlides[currentIndex].img})`,
                }}
            >
                <div className="overlay">
                    <h1 className="title">{heroSlides[currentIndex].title}</h1>
                    <p className="description">
                        {heroSlides[currentIndex].description}
                    </p>

                    <div className="buttons">
                        <button className="play-btn">▶ Play</button>
                        <button className="info-btn">ℹ More Info</button>
                    </div>
                </div>
            </div>
            <div className="content">
                <h2>Trending Movies</h2>

                <div className="movie-row">
                    {movies.map((movie, index) => (
                        <div className="movie-card" key={index}>
                            <img src={movie.img} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>⭐ {movie.rating}</p>
                            <button>Buy Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}