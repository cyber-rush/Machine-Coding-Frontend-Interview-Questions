import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState('');
  const [editingId, setEditingId] = useState(null); // Track which id is being edited

  const handleAdd = () => {
    if (editingId !== null) {
      // Update an existing item
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === editingId ? { ...todo, item } : todo
        )
      );
      setEditingId(null); // Clear edit mode
    } else {
      // Add a new item
      setTodos(prevTodos => [...prevTodos, { id: Math.random(), item }]);
    }
    setItem('');
  };

  const handleEdit = (id) => {
    // Find the item to be edited
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setItem(todoToEdit.item);
      setEditingId(id); // Set the id of the item to be edited
    }
  };

  const handleDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        type='text'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editingId !== null ? 'Update Task' : 'Add Task'}
      </button>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <h3>{todo.item}</h3>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default App;
