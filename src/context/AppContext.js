import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [location, setLocation] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:3001/tasks';

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks. Is JSON Server running?');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await axios.post(API_URL, newTask);
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Failed to add task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const toggleTask = async (id) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === id);
      const response = await axios.put(`${API_URL}/${id}`, {
        ...taskToUpdate,
        completed: !taskToUpdate.completed
      });
      setTasks(tasks.map(task => 
        task.id === id ? response.data : task
      ));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        tasks,
        loading,
        error,
        weather,
        location,
        setLocation,
        addTask,
        deleteTask,
        toggleTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
