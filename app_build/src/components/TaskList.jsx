import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Trash2, ListTodo } from 'lucide-react';

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useContext(AppContext);

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <ListTodo size={48} />
        <p>No tasks yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      {tasks.map((task) => (
        <div key={task.id} className={`list-item ${task.completed ? 'completed' : ''}`}>
          <div className="item-content">
            <input
              type="checkbox"
              className="item-checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <div className="item-details">
              <span className="item-title">{task.title}</span>
              <div className="item-meta">
                <span className="category-tag">{task.category}</span>
              </div>
            </div>
          </div>
          <button 
            className="btn-icon"
            onClick={() => deleteTask(task.id)}
            aria-label="Delete task"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
