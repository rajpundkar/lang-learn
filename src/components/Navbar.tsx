import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, BookOpen, Terminal, Award, Users, Bot, LogOut } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Code className="w-5 h-5" /> },
    { name: 'Learning Modules', path: '/learning-modules', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Code Playground', path: '/code-playground', icon: <Terminal className="w-5 h-5" /> },
    { name: 'Quizzes', path: '/quizzes', icon: <Award className="w-5 h-5" /> },
    { name: 'Community', path: '/community', icon: <Users className="w-5 h-5" /> },
    { name: 'AI Tutor', path: '/ai-tutor', icon: <Bot className="w-5 h-5" /> }
  ];

  if (isAdmin) {
    navLinks.push({ name: 'Admin', path: '/admin', icon: <Award className="w-5 h-5" /> });
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue-950/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-white group"
          >
            <Code className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
            <span className="text-xl font-bold tracking-wider">
              Lang<span className="text-red-500">Learn</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 py-1 border-b-2 transition-all duration-300 ${
                  isActive(link.path)
                    ? 'border-red-500 text-red-400'
                    : 'border-transparent hover:border-red-500/50 hover:text-red-400/80'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-300">{user.email}</span>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-full transition-all duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/20"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        } bg-blue-950/95 backdrop-blur-lg absolute w-full`}
      >
        <div className="px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-blue-800/50 text-red-400'
                  : 'hover:bg-blue-800/30 hover:text-red-400/80'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          {user ? (
            <>
              <div className="p-3 text-gray-300">{user.email}</div>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="w-full flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg transition-all duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                onAuthClick();
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 mt-4"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;