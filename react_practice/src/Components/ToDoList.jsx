import axios from "axios";
import { useEffect, useState } from 'react';

export default function ToDoList() {

    const [grocery, setGrocery] = useState("");
    const [groceryList, setGroceryList] = useState([]);

    const handletodo = (e) => {
        setGrocery(e.target.value);
    }

    useEffect(() => {
        handleget();
    }, []);

    const handleget = async () => {
        const datas = await axios.get("http://localhost:3000/todoList");
        setGroceryList(datas.data);
    }

    const handleadd = async () => {
        let body = {
            task: grocery
        };
        await axios.post("http://localhost:3000/todoList", body);
        setGrocery("");  //clears the input field after adding an item
        handleget();
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/todoList/${id}`);
        handleget();
    }

    const handleEdit = async (item) => {
        let updated_data = prompt("Enter the updated Item", item.task);
        if (!updated_data) return; // prevent empty update ( if the value is "" , null , undefined --> API call is not made)
        let body = {
            task: updated_data
        };
        await axios.put(`http://localhost:3000/todoList/${item.id}`, body);
        handleget();
    }

    return (
        <div>
            <h1>To Do List</h1>
            <label>Grocery : </label>
            <input value={grocery}
                onChange={handletodo} 
                type="text" placeholder='Enter your items' />

            <button onClick={handleadd}>Add</button>

            {groceryList.map((item) => (
                <div key={item.id}>
                    <h3>{item.task}</h3>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}