import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to TaskWeather</h1>
      <p className="text-xl mb-8">Manage your tasks and check the weather all in one place!</p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Task Manager</h2>
          <p className="mb-4">Keep track of your daily tasks and mark them as complete.</p>
          <Link 
            to="/tasks" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go to Tasks
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Weather Dashboard</h2>
          <p className="mb-4">Check current weather conditions for any location.</p>
          <Link 
            to="/weather" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Check Weather
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
