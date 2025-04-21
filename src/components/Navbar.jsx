import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">TaskWeather</Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
            <Link to="/tasks" className="hover:bg-blue-700 px-3 py-2 rounded">Tasks</Link>
            <Link to="/weather" className="hover:bg-blue-700 px-3 py-2 rounded">Weather</Link>
            <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
