import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [location, setLocation] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock API URL - use environment variable in production
  const API_URL = process.env.REACT_APP_API_URL || 'https://65f5ee0c41d90c1c5e0a66da.mockapi.io/api/v1/tasks';

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
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

  const fetchWeather = async (loc) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchWeather(location);
  }, [location]);

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
        fetchWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
