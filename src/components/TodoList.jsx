const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;                     // Don't forget to return.
      })}
    </ul>
  );
};

export default TodoList;
