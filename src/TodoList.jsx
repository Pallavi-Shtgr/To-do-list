import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"} {/* Fix for checking empty todos */}
      {todos.map((todo) => (
        <TodoItem
          {...todo}  // Spread todo props like id, title, and completed
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}


{/* <li key={todo.id}>
<label>
  <input
    type="checkbox"
    checked={todo.completed}

  />
  {todo.title}
</label>
<button

  className="btn btn-danger">
  Delete
</button>
</li> */}