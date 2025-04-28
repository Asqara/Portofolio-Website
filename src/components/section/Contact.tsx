export default function ContactSection() {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="max-w-md w-full px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input 
                id="name"
                type="text" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" 
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }