"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];
  const isActive = (href:string) => {
    return pathname === href;
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">YourBrand</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-gray-900 text-white" 
                      : "hover:bg-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
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
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-gray-900 text-white" 
                    : "hover:bg-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}