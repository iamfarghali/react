import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || []
  });
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }

  function handleEditTodo(index) {
    const todoToEdit = todos[index];
    setTodoValue(todoToEdit);
    handleDeleteTodo(index);
  }
  
  function handleDeleteTodo(index) {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        onAdd={handleAddTodo} />
      
      <TodoList
        todos={todos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo} />
    </>
  )
}

export default App
