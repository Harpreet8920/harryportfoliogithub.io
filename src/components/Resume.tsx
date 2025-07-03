import React from "react";
import { experiences, education } from "../data/portfolioData";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Resume</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          My professional journey and educational background.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="https://drive.google.com/uc?export=download&id=1zcL5_KBguIoqlWFwJZ0Et93-m6OWQOR0"
            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                <Briefcase
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-500"
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {exp.company}
                  </div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full p-1 mr-2 mt-1">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 6 6"
                            fill="currentColor"
                          >
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                <GraduationCap
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-500"
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {edu.institution}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      Python 101 For Data Science
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      IBM (2024)
                    </p>
                  </div>
                  <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      SQL Intermediate Certificate
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      HackerRank (2024)
                    </p>
                  </div>
                  <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      Data Visualization with Power BI
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      Great Learning (2024)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      Cybersecurity Skilling Program
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      IIT Kanpur (2023)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
