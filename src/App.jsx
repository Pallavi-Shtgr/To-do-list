import { useEffect, useState } from 'react';
import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

export default function App() {
  // Load from local storage, fallback to empty array if no value is found
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Save to local storage whenever the todos change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)); // Corrected the key to "ITEMS"
  }, [todos]); // Corrected dependency to [todos]

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

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
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">Todo List</h1>
      
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
