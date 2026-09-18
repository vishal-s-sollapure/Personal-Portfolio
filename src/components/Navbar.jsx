import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Bot, Sparkles, User, Cpu, FolderGit2, Briefcase, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Cpu },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'glass-nav py-3 px-5 shadow-2xl shadow-cyan-950/20 border border-slate-800/80' 
          : 'bg-transparent py-4 px-4'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors text-lg">
                Vishal <span className="text-cyan-400">Sollapure</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AI & Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'text-cyan-400 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all duration-200 flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              Get In Touch
            </a>
            <a
              href="#chat-widget"
              onClick={(e) => {
                e.preventDefault();
                const chatBtn = document.getElementById('chat-toggle-btn');
                if (chatBtn) chatBtn.click();
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all duration-200 shadow-md shadow-cyan-500/25 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Bot className="w-4 h-4 text-slate-950" />
              Ask AI
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl glass-panel p-5 border border-slate-800 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors font-medium text-sm"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-xs flex items-center justify-center gap-2"
              >
                GitHub Profile
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Vishal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
