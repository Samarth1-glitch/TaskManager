import TaskItem from './TaskItem';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function TaskList() {
  const { tasks, deleteTask, toggleTask } = useContext(AppContext);

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No tasks found. Add your first task!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
