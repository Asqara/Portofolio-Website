'use client';

import { useRef } from 'react';
import Navbar from './Navbar';
import HomeSection from './section/Home';
import AboutSection from './section/About';
import ProjectsSection from './section/Project';
import ContactSection from './section/Contact';

export default function HomePage() {
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 80, // Adjust for navbar height
      behavior: 'smooth'
    });
  }
};


  return (
    <div className="min-h-screen">
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      
      <main>
        <section ref={homeRef} className="min-h-screen" id="home">
          <HomeSection />
        </section>
        
        <section ref={aboutRef} className="min-h-screen" id="about">
          <AboutSection />
        </section>
        
        <section ref={projectsRef} className="min-h-screen" id="projects">
          <ProjectsSection />
        </section>
        
        <section ref={contactRef} className="min-h-screen" id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}