function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">About TaskWeather</h1>
      
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">Project Description</h2>
          <p>
            TaskWeather is a simple React application that combines task management with weather information.
            It allows users to manage their daily tasks while also checking the current weather conditions
            for any location around the world.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Add, view, and manage tasks</li>
            <li>Mark tasks as complete</li>
            <li>Delete tasks</li>
            <li>Check current weather for any location</li>
            <li>Responsive design for all devices</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>React.js with functional components and hooks</li>
            <li>React Router for navigation</li>
            <li>Context API for state management</li>
            <li>Tailwind CSS for styling</li>
            <li>Axios for API requests</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
