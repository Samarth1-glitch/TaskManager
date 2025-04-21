function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Task Manager with Weather Dashboard</p>
        <p className="text-sm text-gray-400 mt-2">
          Built with React, React Router, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
