import React from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-blue-400/10 -top-10 -right-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-teal-400/10 -bottom-20 -left-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in">
          <span className="text-blue-600 dark:text-blue-400">Harpreet</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-delayed-1">
          Aspiring AI/ML Engineer & Intelligent Systems Enthusiast
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed animate-fade-in-delayed-2">
          I design and develop intelligent systems that extract patterns, make predictions, and enable automation using machine learning. Specialized in data preprocessing, model training, and deploying AI solutions that drive real-world impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delayed-3">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium border border-gray-300 dark:border-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
