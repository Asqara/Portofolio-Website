import { useState } from "react";
import { Mail, User, MessageSquare, Send, Moon, Sun } from "lucide-react";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    // You would typically send the data to your backend here
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDark ? "dark" : ""
      }`}
    >
      {/* Background with animated gradient */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"
            style={{ animationDelay: "4s" }}
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
            <Moon className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>

        {/* Main content */}
        <div className="flex items-center justify-center min-h-screen p-6 relative z-10">
          <div className="max-w-md w-full">
            {/* Glassmorphism card */}
            <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20">
              {/* Header with animation */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 mb-4 shadow-lg animate-pulse">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2 font-montserrat">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Let's create something amazing together
                </p>
              </div>

              {/* Contact form container */}
              <div className="space-y-6">
                {/* Name field */}
                <div className="group">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/20 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="group">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/20 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="group">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/20 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-400/30 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 active:translate-y-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Decorative elements */}
              <div className="mt-8 flex justify-center space-x-4">
                <div className="w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Or connect with me on
              </p>
              <div className="flex justify-center space-x-4">
                {/* Github */}
                <a
                  href="https://github.com/Asqara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <Github className="w-5 h-5 text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-200" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/asqaraa__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform duration-200" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/asqara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
