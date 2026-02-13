import TaskCard from './TaskCard';

function Column({ title, tasks, columnName, onDelete, onMove, onEdit }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>
      
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">No tasks yet</p>
        ) : (
          tasks.map(task => (
            <TaskCard 
              key={task.id}
              task={task}
              currentColumn={columnName}
              onDelete={onDelete}
              onMove={onMove}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;
