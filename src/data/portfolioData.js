/**
 * Centralized Portfolio Configuration for Divyanshi Singh
 * Extracted directly from official resume.
 */

export const personalData = {
  name: "Divyanshi Singh",
  initials: "DS",
  role: "Software Developer",
  headlineRoles: [
    "Software Developer",
    "Full Stack Developer",
    "MERN & React.js Specialist",
    "Node.js & Backend Architect",
    "Competitive Programmer",
  ],
  phone: "+91-8853336070",
  location: "Greater Noida, India",
  email: "divyanshisingh6815@gmail.com",
  tagline: "Building modern, scalable, and interactive digital experiences.",
  heroDescription:
    "Software Developer experienced in building full-stack service-based products from scratch using React.js, Node.js, Express.js, MongoDB, and MySQL. Passionate about robust APIs, real-time architectures, and high-performance user interfaces.",
  aboutText: [
    "I'm Divyanshi Singh, a Software Developer at Cleanhub India Private Limited and a B.Tech Computer Science student at Accurate Institute of Management and Technology (AKTU).",
    "I specialize in architecting full-stack digital products, designing REST APIs, building real-time WebSockets workflows, and writing clean, scalable JavaScript and Java code.",
    "With professional industry experience at Cleanhub India and Flikt Technology Web Solution, my focus is delivering high-reliability web applications that unite seamless UX with resilient backend engineering.",
  ],
  avatarUrl: "/images/avatar.jpg",
  resumeUrl: "/resume/Divyanshi_Singh_Resume.pdf",
  resumeAvailable: true,

  // Highlights/Key Metrics for hero/about
  highlights: [
    { label: "Current Company", value: "Cleanhub India" },
    { label: "Core Stack", value: "React & Node.js" },
    { label: "LeetCode & DSA", value: "Active Solver" },
    { label: "Google Certified", value: "IT Support Pro" },
  ],

  // Information cards in About section
  aboutCards: [
    {
      title: "Current Role",
      value: "Software Developer",
      subtext: "Cleanhub India Private Limited, Noida (Apr 2026 – Present)",
      icon: "Briefcase",
    },
    {
      title: "Location",
      value: "Greater Noida, India",
      subtext: "Open to Remote, Hybrid & High-Growth Engineering Roles",
      icon: "MapPin",
    },
    {
      title: "Education",
      value: "B.Tech in CSE (2023 – 2027)",
      subtext: "Accurate Institute of Management and Technology | AKTU",
      icon: "GraduationCap",
    },
    {
      title: "Google Certification",
      value: "IT Support Professional",
      subtext: "Google Certified – DATA TECH ALPHA Program",
      icon: "Award",
    },
  ],

  // Social Links
  socialLinks: {
    github: {
      name: "GitHub",
      url: "https://github.com/Divyanshi-Singh09",
      username: "Divyanshi-Singh09",
      isPlaceholder: false,
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/divyanshi-singh-20987a337",
      username: "divyanshi-singh-20987a337",
      isPlaceholder: false,
    },
    leetcode: {
      name: "LeetCode",
      url: "https://leetcode.com/u/divyanshi_singh28/",
      username: "divyanshi_singh28",
      isPlaceholder: false,
    },
    email: {
      name: "Email",
      url: "mailto:divyanshisingh6815@gmail.com",
      isPlaceholder: false,
    },
    phone: {
      name: "Phone",
      url: "tel:+918853336070",
      display: "+91-8853336070",
      isPlaceholder: false,
    },
  },
};

export const skillsData = [
  {
    category: "Programming & Core CS",
    description: "Core programming languages, algorithmic problem solving, and computer science foundations",
    skills: [
      { name: "Java", icon: "Coffee", level: "OOP, Collections & DSA" },
      { name: "JavaScript", icon: "Zap", level: "ES6+, Async, Event Loop" },
      { name: "Python", icon: "Terminal", level: "Scripting & Automation" },
      { name: "C", icon: "Code", level: "Pointers, Memory & Logic" },
      { name: "Data Structures & Algorithms", icon: "Binary", level: "Trees, Graphs, Sorting & Arrays" },
      { name: "Object-Oriented Programming (OOP)", icon: "Cpu", level: "Polymorphism, Inheritance & Modularity" },
      { name: "DBMS", icon: "Database", level: "Relational & NoSQL Architecture" },
      { name: "Computer Network", icon: "Globe", level: "TCP/IP, HTTP/S, WebSockets" },
      { name: "Operating System", icon: "Layers", level: "Threads, Processes & Memory" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Modern, reactive, accessible user interfaces and web performance",
    skills: [
      { name: "React.js", icon: "Component", level: "Hooks, Virtual DOM & State" },
      { name: "HTML5", icon: "Code", level: "Semantic Markup & Accessibility" },
      { name: "CSS3", icon: "Palette", level: "Flexbox, Grid & Keyframes" },
      { name: "Tailwind CSS", icon: "Sparkles", level: "Utility-first Design Systems" },
      { name: "Responsive Web Design", icon: "Smartphone", level: "Mobile-first & Touch-friendly" },
    ],
  },
  {
    category: "Backend & Database",
    description: "Server architecture, microservices, REST APIs, and database persistence",
    skills: [
      { name: "Node.js", icon: "Server", level: "Event-driven Runtime" },
      { name: "Express.js", icon: "Layers", level: "Middleware & Route Handlers" },
      { name: "REST APIs", icon: "Send", level: "CRUD & Endpoint Architecture" },
      { name: "MySQL", icon: "Database", level: "Relational Queries & Schemas" },
      { name: "MongoDB", icon: "Database", level: "NoSQL, Aggregations & Mongoose" },
      { name: "JWT Authentication", icon: "ShieldCheck", level: "Token Authorization & Security" },
    ],
  },
  {
    category: "Testing & API Tools",
    description: "Quality assurance, API validation, automated testing, and reliability",
    skills: [
      { name: "Manual Testing", icon: "CheckCircle2", level: "UI/UX & Feature Validation" },
      { name: "Functional Testing", icon: "CheckCircle2", level: "Workflow & Boundary Testing" },
      { name: "Regression Testing", icon: "CheckCircle2", level: "Backward Compatibility Checks" },
      { name: "Test Case Design", icon: "Layers", level: "Specification & Coverage" },
      { name: "Postman", icon: "Send", level: "API Collection & Endpoint Tests" },
      { name: "Selenium", icon: "Terminal", level: "Automated Browser Testing" },
    ],
  },
  {
    category: "Tools & Methodologies",
    description: "Version control, sprint workflows, and modern software engineering practices",
    skills: [
      { name: "Git", icon: "GitBranch", level: "Branching, Merging & Rebase" },
      { name: "GitHub", icon: "Github", level: "Collaboration & Code Reviews" },
      { name: "Agile", icon: "Activity", level: "Iterative Development Sprints" },
      { name: "Scrum", icon: "Activity", level: "Standups & Sprint Retrospectives" },
      { name: "SDLC", icon: "Layers", level: "End-to-end Lifecycle Management" },
    ],
  },
];

export const projectsData = [
  {
    id: "pg-finder",
    title: "PG Finder",
    category: "Full Stack",
    shortDescription:
      "A full-stack platform with Owner and Seeker dashboards, property listings, dynamic budget filters, enquiries, and role-based access.",
    fullDescription:
      "Built a comprehensive, responsive PG accommodation platform connecting PG owners and seekers. Features dedicated owner and seeker dashboards, advanced multi-criteria room filtering by budget and amenities, direct enquiry handling, and robust role-based access control. Implemented REST APIs and tested key workflows with Postman and Selenium.",
    image: "/images/project-pgfinder.jpg",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Postman",
      "Selenium",
      "Git",
      "GitHub",
    ],
    features: [
      "PG Owner & Seeker dedicated dashboards with role-based JWT access",
      "Search, filter, and sort rooms by rent budget, location, and amenities",
      "Direct enquiry pipeline and property booking management",
      "Comprehensive REST APIs tested and validated using Postman & Selenium",
      "Integrated Generative AI for smart recommendations and user assistance",
      "Fully responsive mobile-first interface optimized for touch devices",
    ],
    githubUrl: "https://github.com/Divyanshi-Singh09",
    liveUrl: "https://github.com/Divyanshi-Singh09",
    isPlaceholderLink: false,
  },
  {
    id: "youtube-watch-party",
    title: "YouTube Watch Party",
    category: "Real-Time & Full Stack",
    shortDescription:
      "Real-time full-stack application enabling synchronized YouTube video streaming across multiple users with WebSocket communication.",
    fullDescription:
      "Engineered an interactive real-time synchronized video streaming application. Utilizes bidirectional WebSockets for low-latency video synchronization across unlimited viewers, instant play/pause/seek controls, room-based sessions with unique room IDs, and role-based access control (Host, Moderator, Participant) leveraging the YouTube IFrame API.",
    image: "/images/project-ytwatchparty.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "WebSockets",
      "YouTube IFrame API",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: [
      "Synchronized YouTube video streaming across multiple concurrent users",
      "WebSocket communication for sub-millisecond play, pause, and seek sync",
      "Room-based session management with unique shareable room codes",
      "Role-based permissions system: Host, Moderator, and Participant privileges",
      "Embedded YouTube IFrame API integration with server-side playback authorization",
      "Live chat thread with participants list and room state controls",
    ],
    githubUrl: "https://github.com/Divyanshi-Singh09",
    liveUrl: "https://github.com/Divyanshi-Singh09",
    isPlaceholderLink: false,
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    category: "Full Stack",
    shortDescription:
      "A real-time messaging platform with instant push communication, online presence badges, typing indicators, and media sharing.",
    fullDescription:
      "A modern, responsive messaging application leveraging WebSockets and Firebase. Users can engage in 1-on-1 private messaging or group channels with real-time push updates. Features interactive reactions, typing indicators, active presence status, media attachments, and persistent message history.",
    image: "/images/project-chatapp.jpg",
    technologies: ["React.js", "Firebase", "Socket.io", "Tailwind CSS", "Node.js"],
    features: [
      "Real-time bidirectional messaging with Socket.io",
      "Online and offline active user status indicators",
      "Live typing indicators for active chats",
      "Full emoji picker support and message reactions",
      "Image and document sharing preview",
      "Persistent chat history and sound notifications",
    ],
    githubUrl: "https://github.com/Divyanshi-Singh09",
    liveUrl: "https://github.com/Divyanshi-Singh09",
    isPlaceholderLink: false,
  },
  {
    id: "3d-aiml-website",
    title: "3D AI/ML Website",
    category: "3D & Creative",
    shortDescription:
      "An immersive technology website with interactive 3D WebGL components, glowing globe, and cinematic GSAP scroll animations.",
    fullDescription:
      "A futuristic showcase website built for machine learning and AI technology exploration. Features an interactive 3D polygonal earth globe rendered in Three.js and React Three Fiber, particle network connections, responsive camera controls, and fluid GSAP ScrollTrigger timeline reveals.",
    image: "/images/project-aiml3d.jpg",
    technologies: ["React.js", "Three.js", "React Three Fiber", "Tailwind CSS", "GSAP"],
    features: [
      "Interactive 3D geometry and floating particle shaders",
      "Animated 3D globe with data hub connections",
      "AI-inspired modern dark cyber interface",
      "Cinematic scroll-triggered animations with GSAP",
      "Optimized 60 FPS WebGL rendering with mobile fallbacks",
    ],
    githubUrl: "https://github.com/Divyanshi-Singh09",
    liveUrl: "https://github.com/Divyanshi-Singh09",
    isPlaceholderLink: false,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "Web App",
    shortDescription:
      "A personal finance tracking application with interactive category breakdowns, income/expense logging, and financial analytics.",
    fullDescription:
      "A clean personal finance web app that empowers users to monitor their cash flow, categorize expenditures, and meet saving targets. Features interactive charts showing spending distribution, historical analytics, recurring transaction support, and monthly budget limits.",
    image: "/images/project-expensetracker.jpg",
    technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    features: [
      "Comprehensive expense and income record management",
      "Categorized financial dashboard with charts",
      "MongoDB database integration for secure record storage",
      "Monthly budget limit thresholds and alerts",
      "Transaction search, date filters, and export options",
    ],
    githubUrl: "https://github.com/Divyanshi-Singh09",
    liveUrl: "https://github.com/Divyanshi-Singh09",
    isPlaceholderLink: false,
  },
  {
    id: "gemini-ai-clone",
    title: "AI Assistant / Gemini Clone",
    category: "AI & Full Stack",
    shortDescription:
      "An AI-inspired conversational interface featuring streaming response tokens, multi-turn chat memory, and sleek markdown styling.",
    fullDescription:
      "A cutting-edge generative AI chat interface inspired by Google Gemini. Supports conversational threading, prompt suggestion cards, code block syntax highlighting with quick copy, simulated streaming text generation, and dark-mode glassmorphic styling.",
    image: "/images/project-geminiclone.jpg",
    technologies: ["React.js", "Tailwind CSS", "API Integration", "Generative AI"],
    features: [
      "Modern conversational chat interface with streaming effects",
      "Pre-configured creative prompt recommendation chips",
      "Markdown rendering with code syntax highlighting and one-click copy",
      "User-friendly responsive chat sidebar and message drawer",
      "Optimized local session caching and clear chat flow",
    ],
    githubUrl: "https://github.com/Divyanshi-Singh09",
    liveUrl: "https://github.com/Divyanshi-Singh09",
    isPlaceholderLink: false,
  },
];

// Experience Section (Direct from Resume)
export const experienceData = [
  {
    id: "cleanhub",
    role: "Software Developer",
    organization: "Cleanhub India Private Limited",
    period: "Apr 2026 – Present",
    type: "Current Full-Time Position",
    location: "Noida, India",
    description:
      "Building a service-based product from scratch using React.js, Node.js, and Express.js with automated task scheduling and subscription pipelines.",
    responsibilities: [
      "Building a service-based product from scratch using React.js, Node.js, and Express.js.",
      "Developed REST APIs, subscription workflows, and automated task scheduling systems.",
      "Implemented authentication and authorization for secure access and protected routes.",
      "Designed and integrated responsive frontend modules with backend APIs, ensuring smooth data flow and consistent user experience.",
      "Performed API testing, debugging, and validation using Postman to improve application reliability.",
      "Used MongoDB/MySQL, Git/GitHub, and Agile for database management and collaborative development.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Postman",
      "Git/GitHub",
      "Agile",
    ],
    isEditablePlaceholder: false,
  },
  {
    id: "flikt",
    role: "Software Developer Intern",
    organization: "Flikt Technology Web Solution",
    period: "Oct 2025 – Mar 2026",
    type: "Internship",
    location: "Noida, India",
    description:
      "Developed responsive frontend UI components, integrated backend REST endpoints, and managed version control workflows across active sprints.",
    responsibilities: [
      "Developed responsive and reusable UI components using React.js and JavaScript.",
      "Integrated REST APIs and managed frontend–backend data flow for application features.",
      "Performed debugging, testing, and bug fixes to improve application reliability and usability.",
      "Used Git/GitHub for version control and collaborated with the development team on feature implementation and deployment.",
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "Git", "GitHub", "UI/UX", "Bug Fixing"],
    isEditablePlaceholder: false,
  },
];

// Education Section (Direct from Resume)
export const educationData = [
  {
    id: "btech-cse",
    degree: "Bachelors of Technology (B.Tech - CSE)",
    institution: "Accurate Institute of Management and Technology",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    specialization: "Computer Science and Engineering",
    period: "2023 – 2027",
    description:
      "Core computer science curriculum emphasizing Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Operating Systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Operating Systems",
      "Java & Python Programming",
      "Software Engineering & SDLC",
    ],
    isEditablePlaceholder: false,
  },
];

// Certifications Section (Direct from Resume)
export const certificationsData = [
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    issuer: "Google / DATA TECH ALPHA",
    period: "Professional Certificate",
    credentialUrl: "https://www.coursera.org/",
    description:
      "Industry-recognized credential covering computer networking, system administration, operating systems, security defense, and automated troubleshooting.",
    skillsGained: [
      "Network Protocols (TCP/IP, DNS, DHCP)",
      "Linux & Windows System Administration",
      "IT Infrastructure & Cloud Services",
      "Security Best Practices & Troubleshooting",
    ],
  },
];
