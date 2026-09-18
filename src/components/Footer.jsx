import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ArrowUp, 
  Code2, 
  Heart,
  Bot,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-12 relative overflow-hidden">
      {/* Accent Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Banner Header */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800/90 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Mail className="w-3.5 h-3.5" />
                <span>Let's Collaborate</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Ready to build something <span className="text-gradient">extraordinary?</span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Whether you have an internship opportunity, a full-stack web project, or an AI/RAG application in mind, feel free to reach out directly!
              </p>

              {/* Direct Contact Pills */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Mail className="w-4 h-4 text-slate-950" />
                  {personalInfo.email}
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium text-xs flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +91 {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Quick Location & Social Box */}
            <div className="lg:col-span-4 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Contact Details</div>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{personalInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-violet-400 shrink-0" />
                  <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 underline">
                    github.com/vishal-s-sollapure
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 underline">
                    linkedin.com/in/vishal-s-sollapure-0bb4b2384
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900 text-xs">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-slate-100 text-base">
                Vishal <span className="text-cyan-400">Sollapure</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Full-Stack Web Developer & AI/GenAI Enthusiast building performant React frontend applications, Gemini API tools, and RAG pipelines.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">Navigation</span>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience & Education</a></li>
            </ul>
          </div>

          {/* Col 3: Social & Back to top */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-2">Connect</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium text-xs flex items-center gap-2 self-start transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              Back to top
            </button>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-mono">
          <p>© {new Date().getFullYear()} Vishal S Sollapure. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}
