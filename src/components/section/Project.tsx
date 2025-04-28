export default function ProjectsSection() {
    const projects = [
      { id: 1, title: "E-commerce Platform", description: "A full-featured online store with payment integration" },
      { id: 2, title: "Portfolio Website", description: "A responsive portfolio site built with Next.js" },
      { id: 3, title: "Task Management App", description: "A drag-and-drop task manager with user authentication" }
    ];
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-4xl w-full px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }