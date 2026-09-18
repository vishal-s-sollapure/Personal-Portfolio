export const personalInfo = {
  name: "Vishal S Sollapure",
  title: "Full-Stack & AI/GenAI Specialist",
  location: "Yelahanka, Bengaluru, KA",
  address: "No 2/9, Kamakshipura, Hesaraghatta Hobli, Yelahanka, Bengaluru - 560089",
  email: "vishalssollapure@gmail.com",
  phone: "7795511748",
  roles: [
    "Full-Stack Web Development Intern",
    "Frontend Developer",
    "AI/GenAI Enthusiast"
  ],
  bio: "Passionate Full-Stack Developer and AI/GenAI Engineer specializing in building modern web applications, intelligent RAG pipelines, and responsive user experiences. Pursuing B.E. in Computer Science Engineering (AI & ML).",
  socials: {
    github: "https://github.com/vishal-s-sollapure",
    linkedin: "https://linkedin.com/in/vishal-s-sollapure-0bb4b2384",
    email: "mailto:vishalssollapure@gmail.com",
    phone: "tel:7795511748"
  }
};

export const education = {
  degree: "B.E. Computer Science & Engineering (AI & ML)",
  institution: "Aditya College of Engineering and Technology",
  duration: "2025 - Present",
  location: "Yelahanka, Bengaluru",
  address: "No 2/9, Kamakshipura, Hesaraghatta Hobli, Yelahanka, Bengaluru - 560089",
  details: "Specializing in Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Software Engineering principles."
};

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Building responsive, modern, and high-performance user interfaces.",
    skills: [
      { name: "React.js", level: 90, icon: "Code2" },
      { name: "JavaScript (ES6+)", level: 92, icon: "FileCode2" },
      { name: "HTML5 & CSS3", level: 95, icon: "FileText" },
      { name: "Bootstrap", level: 88, icon: "Palette" },
      { name: "Responsive Design", level: 94, icon: "Monitor" },
      { name: "Flexbox & Grid", level: 92, icon: "Grid" },
      { name: "Tailwind CSS", level: 90, icon: "Sparkles" }
    ]
  },
  {
    id: "ai-genai",
    title: "AI & GenAI Systems",
    icon: "Brain",
    description: "Architecting LLM applications, RAG pipelines, and prompt systems.",
    skills: [
      { name: "Python", level: 92, icon: "Terminal" },
      { name: "Gemini API", level: 90, icon: "Bot" },
      { name: "RAG Architecture", level: 88, icon: "Cpu" },
      { name: "Prompt Engineering", level: 94, icon: "Wand2" },
      { name: "REST APIs & JSON", level: 90, icon: "Network" },
      { name: "Pydantic", level: 85, icon: "CheckSquare" }
    ]
  },
  {
    id: "backend-db",
    title: "Backend & Databases",
    icon: "Database",
    description: "Designing structured relational databases and secure authentication.",
    skills: [
      { name: "SQL", level: 88, icon: "Database" },
      { name: "DBMS", level: 86, icon: "Server" },
      { name: "Authentication", level: 85, icon: "Lock" },
      { name: "Role-Based Access Control (RBAC)", level: 84, icon: "Shield" },
      { name: "Node.js Basics", level: 80, icon: "Boxes" }
    ]
  },
  {
    id: "tools-deploy",
    title: "Developer Tools & Deploy",
    icon: "Wrench",
    description: "Modern dev ecosystem, version control, and cloud deployment platforms.",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "GitBranch" },
      { name: "VS Code", level: 95, icon: "Code" },
      { name: "Vercel", level: 90, icon: "Globe" },
      { name: "Streamlit", level: 88, icon: "Layers" },
      { name: "Postman", level: 88, icon: "Send" }
    ]
  }
];

export const projects = [
  {
    id: "adibot",
    title: "AdiBot - AI College Assistant",
    category: "AI & GenAI",
    featured: true,
    description: "An intelligent AI Assistant for Aditya College using Retrieval-Augmented Generation (RAG) and Gemini API to answer student & faculty queries seamlessly.",
    highlights: [
      "Built with React frontend & Python RAG pipeline with Gemini API.",
      "Instant multi-query document search and contextual college information retrieval.",
      "Structured output validation and interactive chat UI."
    ],
    techStack: ["React", "Python", "Gemini API", "RAG", "REST APIs"],
    githubUrl: "https://github.com/vishal-s-sollapure/adibot",
    demoUrl: null,
    gradient: "from-cyan-500/20 to-blue-600/20",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
  },
  {
    id: "floodguard-ai",
    title: "FloodGuard AI",
    category: "AI & Web Platform",
    featured: true,
    description: "Real-time flood emergency response platform featuring automated risk scoring, interactive heatmaps, and Gemini API natural language alerts.",
    highlights: [
      "Interactive danger risk scoring algorithm with dynamic mapping visuals.",
      "Emergency notification generation powered by Gemini API.",
      "Fully responsive dashboard using HTML5, CSS3, JavaScript & Python backend."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Python", "Gemini API"],
    githubUrl: "https://github.com/vishal-s-sollapure/floodguard-ai",
    demoUrl: null,
    gradient: "from-blue-500/20 to-indigo-600/20",
    badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
  },
  {
    id: "voice-notes-to-action-items",
    title: "Voice Notes to Action Items",
    category: "GenAI Application",
    featured: true,
    description: "Generative AI web app that converts raw voice recordings and transcripts into structured task items, key summaries, and action checklists.",
    highlights: [
      "Streamlit UI with Python backend integrating Gemini API.",
      "Strict data schema enforcement using Pydantic.",
      "One-click task extraction with custom prompt templates."
    ],
    techStack: ["Python", "Streamlit", "Gemini API", "Pydantic", "Prompt Engineering"],
    githubUrl: "https://github.com/vishal-s-sollapure/Voice-Notes-to-Action-Item",
    demoUrl: null,
    gradient: "from-violet-500/20 to-purple-600/20",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10"
  },
  {
    id: "stylesphere",
    title: "StyleSphere E-Commerce",
    category: "Frontend Web",
    featured: true,
    description: "A sleek, responsive full-scale modern E-Commerce web replica with catalog filtering, shopping cart interaction, and smooth grid layouts.",
    highlights: [
      "Crafted with HTML, CSS, Bootstrap, and vanilla JavaScript.",
      "Optimized for mobile-first user experience and high visual fidelity.",
      "Deployed and hosted live on Vercel."
    ],
    techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/vishal-s-sollapure/StyleSphere",
    demoUrl: "https://style-sphere-psi.vercel.app",
    gradient: "from-emerald-500/20 to-teal-600/20",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  }
];

export const experienceTimeline = [
  {
    id: "exp-1",
    role: "Frontend Developer Intern",
    company: "Saiket Systems",
    period: "2026",
    type: "Internship",
    location: "Remote / Hybrid",
    description: "Developed modern UI components and web applications using React.js and modern CSS frameworks, improving client frontend performance.",
    points: [
      "Built responsive, reusable UI components using React.js & JavaScript.",
      "Collaborated on API integration and optimized frontend loading speed.",
      "Applied cross-browser debugging and accessibility standards."
    ]
  },
  {
    id: "exp-2",
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    period: "2026",
    type: "Internship",
    location: "Remote",
    description: "Engineered web projects focusing on responsive frontend architecture, interactive DOM manipulation, and dynamic user interfaces.",
    points: [
      "Designed clean web layouts using HTML, CSS, JavaScript, and Bootstrap.",
      "Delivered production-ready code for multiple web application modules.",
      "Assisted in code refactoring and standard UI/UX workflow implementations."
    ]
  },
  {
    id: "exp-3",
    role: "Student Developer / Trainee",
    company: "NxtWave Academy",
    period: "2026",
    type: "Training & Project Track",
    location: "Online",
    description: "Intensive hands-on software development training covering full-stack fundamentals, modern JavaScript, Python, and GenAI concepts.",
    points: [
      "Mastered Full-Stack development paradigms, data structures, and algorithms.",
      "Built real-world applications with modern framework tooling and database integration.",
      "Earned domain certifications in web development & software engineering practices."
    ]
  }
];

export const chatbotPresets = [
  "What are Vishal's top technical skills?",
  "Tell me about the AdiBot project.",
  "What is Vishal's educational background?",
  "Is Vishal available for internship roles?",
  "How can I contact Vishal directly?"
];

export function queryChatbotResponse(userPrompt) {
  const query = userPrompt.toLowerCase();

  if (query.includes("skill") || query.includes("stack") || query.includes("technolog")) {
    return "Vishal specializes in **Frontend Web Development** (React.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind) and **AI & GenAI** (Python, Gemini API, RAG, Prompt Engineering, Streamlit, Pydantic). He also works with SQL, DBMS, REST APIs, Git, and Vercel!";
  }

  if (query.includes("adibot") || query.includes("college assistant")) {
    return "⚡ **AdiBot** is an AI College Assistant built with React, Python, RAG architecture, and the Gemini API. It retrieves relevant campus information instantly using contextual document embeddings.";
  }

  if (query.includes("project") || query.includes("portfolio")) {
    return "Vishal has built 4 key production projects:\n1. 🤖 **AdiBot**: AI College Assistant using RAG & Gemini API\n2. 🌊 **FloodGuard AI**: Flood risk scoring platform with Gemini API alerts\n3. 🎙️ **Voice Notes to Action Items**: GenAI Streamlit app with Pydantic\n4. 🛍️ **StyleSphere**: E-Commerce platform live at `style-sphere-psi.vercel.app`";
  }

  if (query.includes("education") || query.includes("college") || query.includes("degree")) {
    return "🎓 Vishal is pursuing his **B.E. in Computer Science & Engineering (AI & ML)** at **Aditya College of Engineering and Technology** (2025 - Present).";
  }

  if (query.includes("experience") || query.includes("internship") || query.includes("work")) {
    return "💼 Vishal's professional timeline includes:\n- **Saiket Systems** (Frontend Developer Intern | 2026)\n- **Oasis Infobyte** (Web Development Intern | 2026)\n- **NxtWave Academy** (Student Developer / Trainee | 2026)";
  }

  if (query.includes("contact") || query.includes("email") || query.includes("reach") || query.includes("hire") || query.includes("phone")) {
    return "📬 You can reach out to Vishal directly:\n- **Email**: vishalssollapure@gmail.com\n- **Phone**: +91 7795511748\n- **LinkedIn**: linkedin.com/in/vishal-s-sollapure-0bb4b2384\n- **GitHub**: github.com/vishal-s-sollapure";
  }

  if (query.includes("available") || query.includes("open") || query.includes("hire")) {
    return "🚀 Yes! Vishal is actively seeking Full-Stack, Frontend Developer, and AI/GenAI Internships or Developer roles based out of Bengaluru or remote.";
  }

  return `Thanks for asking! Vishal is a Full-Stack & AI/GenAI Engineer adept in React, Python, Gemini API, and RAG architectures. You can check his projects above or email him directly at vishalssollapure@gmail.com!`;
}
