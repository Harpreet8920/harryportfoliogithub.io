import React from 'react';
import { about } from '../data/portfolioData';
import { User, Briefcase, MapPin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative shadow-xl">
                <img 
                  src="src\components\images\Harpreet_Photo.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-8">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <User size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
                    <span>Harpreet</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Briefcase size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
                    <span>AI/ML Engineer</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <MapPin size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Mail size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
                    <span>h26199810@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {about.tagline}
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {about.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">My Mission</h4>
                <p className="italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{about.mission}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;