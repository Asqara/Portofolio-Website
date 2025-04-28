import AOS from 'aos';
import {useEffect} from 'react';
import 'aos/dist/aos.css';
export default function HomeSection() {
  useEffect(() => {
    AOS.init();
  }, []);

    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-amber-300">
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl">I'm a developer passionate about creating amazing web experiences</p>
        </div>
      </div>
    );
  }