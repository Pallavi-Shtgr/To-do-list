import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {  
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    // Use the correct 'onSubmit' instead of 'propos.onSubmit'
    onSubmit(newItem);

    // Clear the input after submission
    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
