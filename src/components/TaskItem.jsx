function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between p-3 bg-white rounded shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-blue-500 rounded"
        />
        <span className={`ml-3 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
