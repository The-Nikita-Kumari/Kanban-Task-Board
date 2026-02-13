import { useState, useEffect } from 'react';
import './App.css';
import Column from './components/Column';
import TaskInput from './components/TaskInput';

function App() {
  // Load tasks from localStorage or use empty arrays
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanbanTasks');
    return savedTasks ? JSON.parse(savedTasks) : {
      todo: [],
      inProgress: [],
      done: []
    };
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task to the "To Do" column
  const addTask = (taskText, priority) => {
    const newTask = {
      id: Date.now(), // Simple unique ID
      text: taskText,
      priority: priority
    };

    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask]
    });
  };

  // Delete a task from any column
  const deleteTask = (taskId, column) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].filter(task => task.id !== taskId)
    });
  };

  // Move a task from one column to another
  const moveTask = (taskId, fromColumn, toColumn) => {
    const taskToMove = tasks[fromColumn].find(task => task.id === taskId);
    
    setTasks({
      ...tasks,
      [fromColumn]: tasks[fromColumn].filter(task => task.id !== taskId),
      [toColumn]: [...tasks[toColumn], taskToMove]
    });
  };

  // Edit task text
  const editTask = (taskId, column, newText) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].map(task => 
        task.id === taskId ? { ...task, text: newText } : task
      )
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Kanban Task Board</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      <TaskInput onAddTask={addTask} />

      <div className="board">
        <Column 
          title="To Do" 
          tasks={tasks.todo} 
          columnName="todo"
          onDelete={deleteTask}
          onMove={moveTask}
          onEdit={editTask}
        />
        <Column 
          title="In Progress" 
          tasks={tasks.inProgress} 
          columnName="inProgress"
          onDelete={deleteTask}
          onMove={moveTask}
          onEdit={editTask}
        />
        <Column 
          title="Done" 
          tasks={tasks.done} 
          columnName="done"
          onDelete={deleteTask}
          onMove={moveTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}

export default App;
