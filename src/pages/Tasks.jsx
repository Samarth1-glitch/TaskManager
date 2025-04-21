import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import TaskList from '../components/TaskList';

function Tasks() {
  const { addTask, loading, error } = useContext(AppContext);
  const [newTask, setNewTask] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      setFormError('Task cannot be empty');
      return;
    }
    addTask({ title: newTask, completed: false });
    setNewTask('');
    setFormError('');
  };

  if (loading) return <div className="text-center py-8">Loading tasks...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Add New Task</h2>
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </div>
        {formError && <p className="text-red-500 text-sm mt-1">{formError}</p>}
      </form>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Your Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
}

export default Tasks;
