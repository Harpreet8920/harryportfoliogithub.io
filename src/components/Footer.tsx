import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Harpreet</h2>
            <p className="text-gray-400 max-w-md">
             AI/ML enthusiast focused on building intelligent systems, developing predictive models, and solving real-world problems through machine learning and automation.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 mb-4"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">Back to top</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Harpreet. All rights reserved.
          </p>
          
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">About</a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Projects</a>
            </li>
            <li>
              <a href="#resume" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Resume</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;