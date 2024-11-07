import NewTodo from "./components/NewTodo.jsx";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];                              // Start with a brand new empty array inside addTodo.
    console.log("This is adding the New Todo: ", newTodo);
    console.log(updatedTodos);
    setTodos(updatedTodos);                                                // Pass this new array into `setTodos`.
  };

  return (
    <>
      <h1>To-do App </h1>
      <NewTodo addTodo={addTodo} />
      <h3>List of your To-do:</h3>
      <ul>
        {todos.map((todo, index) => {
         return <li key={index}>{todo}</li>;                               // Don't forget the return.
        })}
      </ul>
    </>
  );
};

export default App;
