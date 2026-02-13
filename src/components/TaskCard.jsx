import { useState } from 'react';

function TaskCard({ task, currentColumn, onDelete, onMove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Get the priority border color
  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return 'priority-medium';
    }
  };

  // Handle editing
  const handleEdit = () => {
    if (editText.trim() === '') {
      alert('Task cannot be empty!');
      setEditText(task.text);
      setIsEditing(false);
      return;
    }
    onEdit(task.id, currentColumn, editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task-card ${getPriorityClass(task.priority)}`}>
      {/* Delete Button */}
      <button 
        className="delete-btn" 
        onClick={() => onDelete(task.id, currentColumn)}
        title="Delete task"
      >
        ✕
      </button>

      {/* Task Text - Click to edit */}
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyDown}
          className="edit-input"
          autoFocus
        />
      ) : (
        <p 
          className="task-text" 
          onClick={() => setIsEditing(true)}
          title="Click to edit"
        >
          {task.text}
        </p>
      )}

      {/* Priority Badge */}
      <div className="priority-badge">
        <span className={`badge ${task.priority}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>

      {/* Move Buttons */}
      <div className="move-buttons">
        {currentColumn !== 'todo' && (
          <button 
            className="move-btn" 
            onClick={() => onMove(task.id, currentColumn, 'todo')}
          >
            ← To Do
          </button>
        )}
        {currentColumn !== 'inProgress' && (
          <button 
            className="move-btn" 
            onClick={() => onMove(task.id, currentColumn, 'inProgress')}
          >
            → In Progress
          </button>
        )}
        {currentColumn !== 'done' && (
          <button 
            className="move-btn" 
            onClick={() => onMove(task.id, currentColumn, 'done')}
          >
            ✓ Done
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
