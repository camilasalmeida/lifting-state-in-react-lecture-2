import NewTodo from './components/NewTodo.jsx'

const App = () => {
  
  const addTodo = (newTodo) => {
    console.log('This is adding the New Todo: ', newTodo);
  };

  return (
    <>
    <h1>To-do App </h1>
    <NewTodo addTodo={addTodo}/>
    </>
  )
}

export default App;