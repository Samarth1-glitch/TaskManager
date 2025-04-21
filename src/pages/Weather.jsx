import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import WeatherCard from '../components/WeatherCard';

function Weather() {
  const { weather, location, setLocation, fetchWeather, loading, error } = useContext(AppContext);
  const [inputLocation, setInputLocation] = useState(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputLocation.trim()) {
      return;
    }
    setLocation(inputLocation);
  };

  if (loading) return <div className="text-center py-8">Loading weather data...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Check Weather</h2>
        <div className="flex">
          <input
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city name"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Weather;
