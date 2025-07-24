import React from 'react';
import { Code, Mail, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white border-t border-blue-800/50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code className="w-6 h-6 text-red-500" />
              <span className="text-lg font-bold tracking-wider">
                Lang<span className="text-red-500">Learn</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Master language translators and compiler design with our interactive learning platform. Join a community of developers passionate about the art of language processing.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Learning</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/learning-modules" className="hover:text-red-400 transition-colors">Course Catalog</Link></li>
              <li><Link to="/code-playground" className="hover:text-red-400 transition-colors">Code Playground</Link></li>
              <li><Link to="/quizzes" className="hover:text-red-400 transition-colors">Practice Quizzes</Link></li>
              <li><Link to="#" className="hover:text-red-400 transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/community" className="hover:text-red-400 transition-colors">Forums</Link></li>
              <li><Link to="#" className="hover:text-red-400 transition-colors">Discord Server</Link></li>
              <li><Link to="#" className="hover:text-red-400 transition-colors">Contribute</Link></li>
              <li><Link to="#" className="hover:text-red-400 transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="#" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-red-400 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-red-400 transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-800/50 text-center text-gray-400 text-sm">
 <p>
  © 2025 Project by 
  <a href="https://github.com/rajpundkar" target="_blank" rel="noopener noreferrer">
    Raj Pundkar
  </a> — This project is currently under development.
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
