const TodoInput = ({ onAdd, todoValue, setTodoValue }) => {

  return (
    <header>
      <input
        type="text"
        placeholder="add a task"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <button onClick={() => {
        if (todoValue.length === 0) return;
        onAdd(todoValue);
        setTodoValue("")
      }}>Add</button>
    </header>
  )
}

export default TodoInput