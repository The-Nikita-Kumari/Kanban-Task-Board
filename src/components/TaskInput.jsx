import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Don't add empty tasks
    if (taskText.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    // Check if priority is selected
    if (priority === '') {
      alert('Please select a priority!');
      return;
    }

    onAddTask(taskText, priority);
    
    // Reset the form
    setTaskText('');
    setPriority('');
  };

  return (
    <div className="task-input-container">
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="task-text-input"
        />
        
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
          required
        >
          <option value="" disabled>Set priority</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
