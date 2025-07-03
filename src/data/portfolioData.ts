import { NavItem, Skill, Project, Experience, Education } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'technical' },
  { name: 'Pandas / NumPy', level: 85, category: 'technical' },
  { name: 'SQL & Database Management ', level: 80, category: 'technical' },
  { name: 'Machine Learning (Scikit-learn, TensorFlow)', level: 75, category: 'technical' },
  { name: 'Data Visualization (Matplotlib, Seaborn, Power BI)', level: 85, category: 'technical' },
  { name: 'Statistics & Probability', level: 70, category: 'technical' },
  { name: 'Exploratory Data Analysis (EDA)', level: 75, category: 'technical' },
  { name: 'Critical Thinking & Problem Solving', level: 90, category: 'soft' },
  { name: 'Communication', level: 85, category: 'soft' },
  { name: 'Teamwork/Collaboration', level: 90, category: 'soft' },
  { name: 'Adaptability & Learning Agility', level: 80, category: 'soft' },
];

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'FACELOG: INTELLIGENT ATTENDANCE MONITORING SYSTEM',
    description: 'FACELOG is an AI-powered intelligent attendance monitoring system that uses facial recognition for accurate and automated tracking. It ensures seamless, secure, and contactless attendance management for institutions and organizations.',
    image: 'C:\Users\harpreet\Downloads\project-bolt-sb1-vuqwg6cc\Portfolio New Harry\src\components\images\face.jpg',
    tags: ['Python', 'NLP', 'Machine Learning', 'Face Recognition'],
    codeLink: 'https://github.com/Harpreet8920/Attendance_System',
    featured: true,
  },
  {
    id: 'project2',
    title: 'ANALLYTICS - RESUME ANALYZER',
    description: 'Anallytics is an AI-driven resume analyzer that evaluates and scores resumes based on job relevance, skills match, and keyword optimization. It helps candidates improve their resumes and boosts selection chances in applicant tracking systems (ATS).',
    image: 'src\components\images\Anallytics.jpg',
    tags: ['Machine Learning', 'Python', 'Web Dev'],
    codeLink: 'https://github.com/Harpreet8920/Anallytics---Resume-analyzer',
    featured: true,
  },
  {
    id: 'project3',
    title: 'FITNESSPAL - FITNESS TRACKER',
    description: 'FitnessPal is a comprehensive health tracker that helps users monitor their fitness goals, daily activity, diet, and overall wellness. It empowers healthier lifestyles through personalized insights and progress tracking.',
    image: 'src\components\images\fitness.jpg',
    tags: ['Data Visualizatipn', 'Google Colaboratory','EDA'],
    codeLink: 'https://github.com/Harpreet8920/FitnessPal---Health-Tracker',
    featured: false,
  },
  {
    id: 'project4',
    title: 'CHATBOT',
    description: 'Simple Chatbot with Python is a rule-based conversational bot built using basic Python logic. It responds to user inputs with predefined replies, simulating simple human interaction.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Jupyter Notebook'],
    codeLink: 'https://github.com/Harpreet8920/CHATBOT',
    featured: true,
  },
];

export const experiences: Experience[] = [
  // ... your previous experiences

  {
    id: 'exp14',
    role: 'President',
    company: 'Esports Club, DSEU Dwarka',
    duration: 'Feb 2024 - Present',
    description: [
      'Led esports tournaments and awareness campaigns to grow club engagement',
      'Managed and built a dedicated team for smooth club operations',
    ],
  },
  {
    id: 'exp15',
    role: 'Campus Ambassador',
    company: 'Coding Blocks',
    duration: 'Mar 2024 - Present',
    description: [
      'Organized coding events and workshops to promote programming skills on campus',
      'Built leadership and communication skills while fostering a vibrant tech community',
    ],
  },
  {
    id: 'exp16',
    role: 'IT Administrator Intern',
    company: 'YUAM Medline Health Solutions',
    duration: 'Jun 2023 - Dec 2023',
    description: [
      'Provided IT support including troubleshooting and system installation',
      'Assisted in project management ensuring smooth IT operations',
    ],
  },
  {
    id: 'exp17',
    role: 'Data Science Intern',
    company: 'Teachnook (Teachscape Online Learning Services Pvt Ltd)',
    duration: 'Aug 2023 - Sep 2023',
    description: [
      'Performed data analysis and Python programming to support educational projects',
      'Enhanced educational initiatives through data-driven strategies',
    ],
  },
];


export const education: Education[] = [
    {
    id: 'edu1',
    degree: 'Bcachelor of Technology in Computer Science and Engineering',
    institution: 'University School of Information, Communication & Technology (USICT), GGSIPU' ,
    duration: '2025 - 2028',
    description: 'Strengthened core programming and algorithmic thinking, enabling efficient model development and intelligent system design.',
  },
  {
    id: 'edu2',
    degree: 'Diploma in Computer Science , 9.0 CGPA ',
    institution: 'Delhi Skill and Entrepreneurship University',
    duration: '2022 - 2025',
    description: 'Developed core programming and problem-solving skills, preparing me for software development roles and advanced learning.',
  },
  {
    id: 'edu3',
    degree: 'Secondary School – CBSE , 85%',
    institution: 'CBSE Board',
    duration: '2021 - 2022',
    description: 'Completed secondary education under the CBSE curriculum, building a strong foundation in science, mathematics, and languages.',
  },
];

export const about = {
  tagline: "Building digital experiences that make a difference",
  description: `
I'm an aspiring AI/ML Engineer with a strong foundation in Python programming and a passion for building intelligent, data-driven systems. My journey started with curiosity about how things work, which led me from C/C++ to Python — and eventually into the world of machine learning and artificial intelligence.

I specialize in using Python libraries like NumPy, Pandas, Matplotlib, Scikit-learn, and TensorFlow to clean data, build predictive models, and create impactful solutions from real-world datasets. My personal projects reflect this — from facial recognition tools to fraud detection systems and interactive AI dashboards.

Outside of tech, I fuel my creativity and discipline through fitness, travel, and gaming, always looking for new challenges that push me to grow technically and personally`,
  mission: "My mission is to harness the power of data to drive meaningful insights, improve decision-making, and create intelligent solutions that deliver real-world impact. I'm committed to writing clean, efficient code, continually learning, and contributing to the data science community through collaboration and shared knowledge."
};
export const certifications = [
  {
    id: 1,
    name: "Python 101 For Data Science",
    issuer: "IBM",
    year: "2024",
  },
  {
    id: 2,
    name: "SQL Intermediate Certificate",
    issuer: "HackerRank",
    year: "2024",
  },
  {
    id: 3,
    name: "Data Visualization with Power BI",
    issuer: "Great Learning",
    year: "2024",
  },
  {
    id: 4,
    name: "Cybersecurity Skilling Program",
    issuer: "IIT Kanpur",
    year: "2023",
  },
];
