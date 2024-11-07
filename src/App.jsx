import NewTodo from "./components/NewTodo.jsx";
import TodoList from './components/TodoList.jsx';
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
      <TodoList todos={todos} />
      <h3>Things to get done:</h3>
    </>
  );
};

export default App;
