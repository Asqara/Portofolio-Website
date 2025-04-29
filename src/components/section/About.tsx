import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Lanyard from '../ui/Lanyard';

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false
    });
  }, []);

  return (
    <section id="about" className="min-h-screen bg-white dark:bg-gray-900 dark:text-amber-300 py-16 relative overflow-hidden font-montserrat">
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:flex block lg:flex-row items-center justify-between gap-12">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-amber-300 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-amber-300 dark:bg-white rounded-full"></span>
            </h2>
            
            <p className="text-lg text-gray-900 dark:text-white mb-6 leading-relaxed">
              I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. 
              I specialize in building elegant solutions that solve real-world problems.
            </p>
            
            <div className="space-y-5">
              <div data-aos="fade-up" data-aos-delay="100" className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-amber-300">Front-End Development</h3>
                  <p className="text-amber-300 dark:text-white">Creating responsive and intuitive user interfaces</p>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-amber-300">Back-End Development</h3>
                  <p className="text-amber-300 dark:text-white">Building robust and scalable server-side applications</p>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-amber-300">Database Design</h3>
                  <p className="text-amber-300 dark:text-white">Optimizing data storage for performance and security</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
              <a href="#contact" className="inline-block px-6 py-3 bg-amber-300 text-gray-900 font-medium rounded-lg shadow-md transition-colors duration-300">
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Right Lanyard 3D Section - Hidden on small screens, visible on medium+ */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-full h-180 md:h-96 lg:h-full relative">
              <div className="md:absolute inset-0 md:flex block items-center justify-center">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      
    </section>
  );
}