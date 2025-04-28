'use client';

import { useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import HomeSection from './section/Home';
import AboutSection from './section/About';
import ProjectsSection from './section/Project';
import ContactSection from './section/Contact';
import { MoveUp } from 'lucide-react';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [showMoveUp, setShowMoveUp] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    Aos.init();
    const handleScroll = () => {
      if (homeRef.current) {
        const scrollPosition = window.scrollY;
        const homeHeight = homeRef.current.offsetHeight;

        // Kalau sudah lewat dari 1/2 layar Home Section, tampilkan tombol
        if (scrollPosition > homeHeight / 2) {
          setShowMoveUp(true);
        } else {
          setShowMoveUp(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      
      <main>
        <section 
        data-aos="fade-up"
        data-aos-duration="800"
        ref={homeRef} className="min-h-screen" id="home">
          <HomeSection />
        </section>
        
        <section 
        data-aos="fade-up"
        data-aos-duration="800"
        ref={aboutRef} className="min-h-screen" id="about">
          <AboutSection />
        </section>
        
        <section 
        data-aos="fade-up"
        data-aos-duration="800"
        ref={projectsRef} className="min-h-screen" id="projects">
          <ProjectsSection />
        </section>
        
        <section 
        data-aos="fade-up"
        data-aos-duration="800"
        ref={contactRef} className="min-h-screen" id="contact">
          <ContactSection />
        </section>

        {/* Tombol MoveUp hanya muncul kalau sudah scroll turun */}
        {showMoveUp && (
          <div 
          data-aos="fade-up"
        data-aos-duration="800"
          className="fixed bottom-4 right-4 z-50">
            <button 
              onClick={() => scrollToSection(homeRef)} 
              className="bg-gray-900 text-amber-300 dark:bg-amber-300 dark:text-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
            >
              <MoveUp size={24} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
