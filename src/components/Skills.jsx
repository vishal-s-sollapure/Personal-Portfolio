import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Brain, 
  Database, 
  Wrench, 
  Code2, 
  FileCode2, 
  FileText, 
  Palette, 
  Monitor, 
  Grid, 
  Sparkles, 
  Terminal, 
  Bot, 
  Cpu, 
  Wand2, 
  Network, 
  CheckSquare, 
  Server, 
  Lock, 
  Shield, 
  Boxes, 
  GitBranch, 
  Code, 
  Globe, 
  Layers, 
  Send 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon string names to actual Lucide components
const iconMap = {
  Layout,
  Brain,
  Database,
  Wrench,
  Code2,
  FileCode2,
  FileText,
  Palette,
  Monitor,
  Grid,
  Sparkles,
  Terminal,
  Bot,
  Cpu,
  Wand2,
  Network,
  CheckSquare,
  Server,
  Lock,
  Shield,
  Boxes,
  GitBranch,
  Code,
  Globe,
  Layers,
  Send
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="text-gradient">Tech Matrix</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured skill sets encompassing responsive frontend engineering, generative AI integration, RAG architectures, and modern cloud developer workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => {
              const IconComp = iconMap[cat.icon] || Cpu;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, index) => {
            const CategoryIcon = iconMap[category.icon] || Cpu;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-950/10"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 pb-6 mb-6 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;

                    return (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-slate-300 flex items-center gap-2">
                            <SkillIcon className="w-3.5 h-3.5 text-cyan-400" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-slate-400">{skill.level}%</span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800/60">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + sIdx * 0.05 }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
