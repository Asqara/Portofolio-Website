import AOS from 'aos';
import {useEffect} from 'react';
import 'aos/dist/aos.css';
export default function AboutSection() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="max-w-2xl text-center">
          <h2 
          data-aos="fade-up"
            data-aos-duration="1000"
          className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I'm a full-stack developer with expertise in React, Next.js, and modern web technologies.
          </p>
          <p className="text-lg">
            With several years of experience building responsive and performant web applications,
            I focus on creating intuitive user experiences with clean, maintainable code.
          </p>
        </div>
      </div>
    );
  }