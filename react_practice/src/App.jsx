import Products from "./Components/API/API_Call";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import Propss from "./Components/Propss";
import { useState } from "react";

export default function App() {

  const [movies, setMovies] = useState([
    {
      name: "Zootopia",
      price: 500
    },
    {
      name: "Elemental",
      price: 450
    },
    {
      name: "Encanto",
      price: 550
    }
  ]);
  const handleProps = (name) => {
    alert(`Movie Booked: ${name}`);
  }
  return (
    <>
      {/* <Products /> */}
      {/* <Form /> */}
      {/* <ToDoList /> */}

      {/* <Propss name="Zootopia" price={500} />  
      <Propss name="Elemental" price={450} /> */}
      {movies.map((movie, index) => (
        <Propss
          key={index}
          name={movie.name}
          price={movie.price}
          handleProps = {handleProps}
        />
      ))}
    </>
  );
}