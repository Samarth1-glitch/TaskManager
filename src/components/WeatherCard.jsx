function WeatherCard({ weather }) {
  if (!weather) return null;

  const weatherIcon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{weather.name}, {weather.sys.country}</h2>
          <p className="text-gray-500 capitalize">{weather.weather[0].description}</p>
        </div>
        <img src={iconUrl} alt="Weather icon" className="w-16 h-16" />
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between py-2 border-b">
          <span>Temperature</span>
          <span className="font-bold">{Math.round(weather.main.temp)}°C</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Feels Like</span>
          <span className="font-bold">{Math.round(weather.main.feels_like)}°C</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Humidity</span>
          <span className="font-bold">{weather.main.humidity}%</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Wind Speed</span>
          <span className="font-bold">{weather.wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
