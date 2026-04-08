import { NavLink } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/moviesList" className={({ isActive }) => isActive ? "active" : ""}>
                        Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="nav-icons">
                <MdMessage className="icon" />
                <FaBell className="icon" />
                <FaUserCircle className="icon profile-icon" />
            </div>

        </nav>
    );
}