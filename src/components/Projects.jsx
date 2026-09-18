import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  Bot, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & GenAI', 'AI & Web Platform', 'GenAI Application', 'Frontend Web'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Crafted <span className="text-gradient">Projects & Applications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-ready web applications, generative AI toolings, and RAG architectures engineered with modern stacks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Header Banner Gradient */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 sm:p-8 space-y-5">
                  {/* Category Pill & Header */}
                  <div className="flex items-center justify-between gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${project.badgeColor}`}>
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      Repo Active
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Highlights Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Features:</span>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 sm:px-8 pt-0 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-xs flex items-center justify-center gap-2 transition-colors hover:border-cyan-500/40"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  GitHub Repository
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 text-xs font-mono flex items-center justify-center gap-1.5 opacity-80">
                    <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                    <span>Open Source</span>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
