import { useState } from 'react';
import './styles.css';

export default function App() {

  const [todos, setTodos] = useState([]);


  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id); // Return the filtered list
    });
  }

  return (
    <>
     

      <h1 className="header">To Do List</h1>
      <ul className="list">
      {todo.length==0 && "No Todos"}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)} 
              className="btn btn-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
