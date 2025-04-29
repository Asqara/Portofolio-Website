"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface NavbarProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export default function Navbar({
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar style on scroll
      setScrolled(window.scrollY > 50);

      // Determine which section is in view
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home", action: scrollToHome },
    { name: "About", id: "about", action: scrollToAbout },
    { name: "Projects", id: "projects", action: scrollToProjects },
    { name: "Contact", id: "contact", action: scrollToContact },
  ];

  return (
    <nav
      className={`fixed w-full z-50 dark:bg-gray-800 bg-amber-300 text-white dark:text-amber-300 shadow-lg font-montserrat ${
        scrolled ? "bg-gray-800" : "bg-amber-300"
      }`} // Apply different background color when scrolled
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={scrollToHome} className="font-bold text-2xl font-montserrat">
              Asqara.
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    link.action();
                    closeMenu();
                  }}
                  className={`relative inline-block dark:text-amber-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 dark:after:bg-white after:bg-gray-900 after:transition-all after:duration-500 hover:after:w-full ${
                    activeSection === link.id
                      ? "text-gray-900 dark:text-white"
                      : "hover:text-gray-900 hover:dark:text-amber-300"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="hidden md:flex items-center gap-4">
                <Switch />
              </div>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <Switch />

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                aria-expanded="false"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.action();
                  closeMenu();
                }}
                className={`block w-full px-3 text-center py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? "dark:text-amber-300 underline decoration-gray-900 decoration-2 "
                    : "text-gray-900"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
