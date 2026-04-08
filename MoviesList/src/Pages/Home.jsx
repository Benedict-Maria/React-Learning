import React from "react";
import zootopia from "../assets/zootopia.jpg";
import encanto from "../assets/encanto.jpeg";
import elemental from "../assets/elemental.jpg";
import ratatouille from "../assets/ratatouille.jpeg";
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="overlay">
                    <h1 className="title">Avengers: Endgame</h1>
                    <p className="description">
                        After the devastating events of Infinity War, the Avengers assemble once more
                        to reverse Thanos' actions and restore balance to the universe.
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
                    <div className="movie-card">
                        <img
                            src={zootopia}
                            alt="Zootopia"
                        />
                        <h3>Zootopia</h3>
                        <p>⭐ 9.1</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="movie-card">
                        <img
                            src={encanto}
                            alt="Encanto"
                        />
                        <h3>Encanto</h3>
                        <p>⭐ 8.5</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="movie-card">
                        <img
                            src={elemental}
                            alt="Elemental"
                        />
                        <h3>Elemental</h3>
                        <p>⭐ 9.3</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="movie-card">
                        <img
                            src={ratatouille}
                            alt="Ratatouille"
                        />
                        <h3>Ratatouille</h3>
                        <p>⭐ 9.0</p>
                        <button>Buy Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
}