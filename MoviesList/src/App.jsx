import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import MoviesList from "./Pages/MoviesList";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App(){
  return(
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/moviesList" element={<MoviesList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  );
}
