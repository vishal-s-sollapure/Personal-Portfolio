import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Terminal, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const techBadges = [
    { name: "React.js", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10" },
    { name: "Python", color: "border-yellow-500/30 text-yellow-400 bg-yellow-500/10" },
    { name: "Gemini API", color: "border-purple-500/30 text-purple-400 bg-purple-500/10" },
    { name: "RAG Architecture", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" },
    { name: "Prompt Engineering", color: "border-violet-500/30 text-violet-400 bg-violet-500/10" },
    { name: "Tailwind CSS", color: "border-sky-500/30 text-sky-400 bg-sky-500/10" },
  ];

  return (
    <section id="about" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center bg-grid-pattern overflow-hidden">
      {/* Glowing Ambient Backdrop Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/20 to-violet-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Intro Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Profile Image & Header Content Wrapper */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Circular Profile Image with Glowing Double-Ring Border */}
              <div className="relative group shrink-0">
                {/* Glowing Gradient Backdrop Orb */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>
                
                {/* Ring 1: Outer Gradient Border */}
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 shadow-xl shadow-cyan-500/25 backdrop-blur-md">
                  {/* Ring 2: Inner Dark Border with Backdrop Blur */}
                  <div className="p-1 rounded-full bg-slate-950/80 border border-slate-800/80 backdrop-blur-sm">
                    <img
                      src="/profile.jpg"
                      alt="Vishal S Sollapure"
                      className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border border-cyan-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Status & Name Header */}
              <div className="space-y-3">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-slate-300 text-xs font-mono shadow-inner shadow-cyan-500/10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-cyan-400 font-semibold">Available for Internships & Full-Stack Roles</span>
                </div>

                {/* Name & Title */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                    Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-300 flex items-center gap-2 flex-wrap">
                    <span className="text-cyan-400">Full-Stack Web Developer</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-violet-400">AI / GenAI Specialist</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Specializing in building modern React web architectures, RAG AI systems, and generative search solutions using Gemini API and Python. Passionate about crafting high-performance, intelligent digital experiences.
            </p>

            {/* Location & Institution Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>B.E. CSE (AI & ML) Student</span>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Core Tech Stack:</span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-lg text-xs font-mono border backdrop-blur-sm ${badge.color}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Code2 className="w-4 h-4 text-slate-950" />
                View Projects
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#chat-widget"
                onClick={(e) => {
                  e.preventDefault();
                  const chatBtn = document.getElementById('chat-toggle-btn');
                  if (chatBtn) chatBtn.click();
                }}
                className="px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                Ask AI Assistant
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:text-white"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                Contact / Hire Me
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-violet-400 hover:border-violet-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Code & Card Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glow frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-3xl opacity-30 blur-xl animate-pulse-slow"></div>

            <div className="relative glass-panel rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-4">
              {/* Card Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    vishal_ai_pipeline.py
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  RAG & Gemini Active
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-slate-950/80 p-4 rounded-xl font-mono text-xs text-slate-300 space-y-2 overflow-x-auto border border-slate-900">
                <div className="text-slate-400"># Initializing AI Assistant Agent</div>
                <div><span className="text-purple-400">from</span> google.generativeai <span className="text-purple-400">import</span> GenerativeModel</div>
                <div><span className="text-purple-400">from</span> rag_engine <span className="text-purple-400">import</span> VectorStoreRetriever</div>
                <br />
                <div><span className="text-cyan-400">class</span> <span className="text-yellow-300">VishalPortfolioAI</span>:</div>
                <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</div>
                <div className="pl-8 text-emerald-400">self.skills = ["React.js", "Python", "Gemini API", "RAG"]</div>
                <div className="pl-8 text-emerald-400">self.projects = ["AdiBot", "FloodGuard AI", "StyleSphere"]</div>
                <div className="pl-8 text-slate-300">self.model = GenerativeModel(<span className="text-amber-300">'gemini-1.5-flash'</span>)</div>
                <br />
                <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">get_solution</span>(self, query):</div>
                <div className="pl-8 text-cyan-400">return self.model.generate_content(query)</div>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-cyan-400">4+</div>
                  <div className="text-xs text-slate-400 font-medium">Core AI & Web Projects</div>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-violet-400">3</div>
                  <div className="text-xs text-slate-400 font-medium">Internship Timelines</div>
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Full-Stack & GenAI Code Artifacts</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
