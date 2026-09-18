import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { experienceTimeline, education } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Work Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A chronological timeline of software development internships, engineering studies, and hands-on domain training.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-4">

          {/* Experience Items */}
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Bullet Icon Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Time Label floating on desktop left side */}
              <div className="md:absolute md:-left-36 md:top-2 text-xs font-mono text-cyan-400 font-semibold mb-2 md:mb-0 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.period}</span>
              </div>

              {/* Main Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 flex items-center gap-2 mt-1">
                      <span>{item.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Deliverables:</span>
                  <ul className="space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education Timeline Node */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative pl-6 sm:pl-8 group pt-4"
          >
            {/* Timeline Bullet Icon Node */}
            <div className="absolute -left-[17px] top-5 w-8 h-8 rounded-full bg-slate-900 border-2 border-violet-400 flex items-center justify-center text-violet-400 group-hover:scale-125 group-hover:bg-violet-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg shadow-violet-500/20">
              <GraduationCap className="w-4 h-4" />
            </div>

            {/* Time Label */}
            <div className="md:absolute md:-left-36 md:top-6 text-xs font-mono text-violet-400 font-semibold mb-2 md:mb-0 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{education.duration}</span>
            </div>

            {/* Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-violet-500/30 bg-gradient-to-r from-violet-950/20 to-slate-900/40 transition-all duration-300 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Bachelor of Engineering</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {education.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {education.institution}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>{education.location}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {education.details}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
