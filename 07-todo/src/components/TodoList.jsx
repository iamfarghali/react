import TodoCard from "./TodoCard";

const TodoList = ({ todos, ...props }) => {
  return (
    <ul className="main">
      {todos.map((todo, idx) => (
        <TodoCard key={idx} id={idx} {...props}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  )
}

export default TodoList