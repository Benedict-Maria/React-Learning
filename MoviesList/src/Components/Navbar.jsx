import { Link } from "react-router-dom";
import bell from "../assets/bell.png";
import message from "../assets/message.png";
import profileImage from "../assets/profile.png";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <ul className="nav_link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/moviesList">MoviesList</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="nav-icons">
                <img src={message} alt="message_icon" className="icon" />
                <img src={bell} alt="bell_icon" className="icon" />
                <img src={profileImage} alt="profile_photo" className="profile_photo" />
            </div>
        </nav>
    );
}