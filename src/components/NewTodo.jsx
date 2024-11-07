import { useState } from "react";

const NewTodo = (props) => {
                                                                    // Initialize the state and its setter function inside the NewTodo function.
  const [newTodoTyped, setNewTodoTyped] = useState("");             // Keep track of what the user has typed.

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(newTodoTyped);
    setNewTodoTyped('');
  };

  const handleChange = (event) => {                                  // `handleChange` function will be called when the user types in the text input.
    setNewTodoTyped(event.target.value);                             // `setNewTodoTyped` will pass the value of the input that the user entered.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Todo: </label>
      <input
        id="todoInput"
        type="text"
        name="todo"
        onChange={handleChange}
        value={newTodoTyped}
      />
      <button type="submit">Create to-do SUBMIT</button>
    </form>
  );
};

export default NewTodo;
