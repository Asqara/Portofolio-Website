import { useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  Calendar,
  Code,
  Zap,
  Moon,
  Sun,
  Eye,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredProject, setHoveredProject] = useState("");

  const projects = [
    {
      id: "1",
      title: "Website Ormawa Eksekutif Pku",
      description:
        "Website resmi Ormawa Eksekutif PKU yang dikembangkan untuk memperkuat branding digital organisasi.",
      longDescription:
        "Platform ini dibangun menggunakan React, Node.js, dan MongoDB dengan integrasi Laravel dan MySQL pada sisi backend. Website ini mendukung pengelolaan konten dinamis, sistem inventori real-time, pemrosesan pembayaran melalui Stripe, pelacakan pesanan, hingga analitik menyeluruh untuk membantu pengambilan keputusan strategis.",
      technologies: [
        "React",
        "Node.js",
        "Laravel",
        "MySQL",
        "MongoDB",
        "Stripe",
      ],

      status: "Live",
      stars: 0,
      date: "2025",
      image: "1.png",
      color: "from-yellow-400 to-amber-500",
      demo: "https://ormawaeksekutifpku.com",
      github: "https://github.com/Asqara/website-ormawa-ekse",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDark ? "dark" : ""
      }`}
    >
      {/* Background with animated gradient */}
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-all duration-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-amber-300 dark:bg-amber-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-300 dark:bg-orange-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15 animate-pulse"
            style={{ animationDelay: "6s" }}
          ></div>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="absolute top-6 right-6 p-3 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group z-10"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-300" />
          ) : (
            <Moon className="w-5 h-5 text-yellow-600 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>

        {/* Main content */}
        <div className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 mb-6 shadow-xl animate-pulse">
                <Code className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 font-montserrat">
                My Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover the digital experiences I've crafted with passion and
                precision
              </p>

              {/* Stats bar */}
              <div className="flex justify-center mt-8 space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                    1
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                    0
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Stars
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    4+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
              </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject("")}
                  className="group relative"
                >
                  {/* Project card */}
                  <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden transform duration-500 hover:shadow-yellow-500/20 dark:hover:shadow-yellow-400/20 h-full">
                    {/* Project header */}
                    <div className="relative p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`text-6xl transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <img src={project.image} alt="Gambar 1" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              project.status === "Live"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                : project.status === "Beta"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {hoveredProject === project.id
                          ? project.longDescription
                          : project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="px-6 pb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20 text-gray-700 dark:text-gray-300 rounded-full border border-yellow-200 dark:border-yellow-800/30 hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project stats */}
                    <div className="px-6 pb-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="p-6 pt-0 flex space-x-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-yellow-400 dark:to-amber-500 text-black font-medium rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 dark:hover:shadow-yellow-400/30 transition-all duration-300 transform hover:-translate-y-1 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/20 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 transform hover:-translate-y-1 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                      </a>
                    </div>

                    {/* Hover overlay effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                    ></div>
                  </div>

                  {/* Floating like button */}
                  <button className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10">
                    <Heart className="w-4 h-4 text-red-500 hover:fill-current transition-colors duration-200" />
                  </button>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
          </div>
        </div>
      </div>
    </div>
  );
}
