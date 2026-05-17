import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Plus } from 'lucide-react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const { addTask } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    addTask({
      title,
      category: category || 'General',
      date: new Date().toISOString()
    });
    
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
      <div className="form-group">
        <input
          type="text"
          className="input-field"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
          <input
            type="text"
            className="input-field"
            placeholder="Category (e.g. Work, Personal)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary" style={{ width: 'auto' }}>
          <Plus size={20} />
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
