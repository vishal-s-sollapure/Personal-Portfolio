import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  Minimize2, 
  RotateCcw, 
  MessageSquare,
  ChevronRight,
  Terminal
} from 'lucide-react';
import { chatbotPresets, queryChatbotResponse, personalInfo } from '../data/portfolioData';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello! 👋 I'm **Vishal's AI Assistant**. Ask me anything about his full-stack skills, RAG projects (like AdiBot), or internship background!`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputQuery('');
    setIsTyping(true);

    // Simulate AI response stream delay
    setTimeout(() => {
      const responseText = queryChatbotResponse(query);
      setMessages((prev) => [...prev, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 600);
  };

  const handlePresetClick = (preset) => {
    handleSend(preset);
  };

  const handleClear = () => {
    setMessages([
      {
        sender: 'bot',
        text: `Chat reset! Feel free to ask another question about Vishal's projects or tech stack.`
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Action Trigger Button */}
      {!isOpen && (
        <motion.button
          id="chat-toggle-btn"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 text-slate-950 font-bold shadow-2xl shadow-cyan-500/40 flex items-center gap-3 border border-cyan-300/30"
          aria-label="Open AI Assistant Chat"
        >
          {/* Glowing Ring */}
          <span className="absolute -inset-1 rounded-2xl bg-cyan-400 blur-md opacity-40 group-hover:opacity-80 transition-opacity -z-10 animate-pulse" />
          
          <Bot className="w-6 h-6 text-slate-950" />
          <span className="hidden sm:inline text-xs font-extrabold uppercase tracking-wider text-slate-950">
            Ask AI Assistant
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping" />
        </motion.button>
      )}

      {/* Interactive Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="w-[92vw] sm:w-[400px] h-[540px] glass-panel rounded-3xl border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl bg-slate-950/95"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/60 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
                  <Bot className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                    Vishal's AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </h3>
                  <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Gemini RAG Engine Online
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                  title="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none space-y-1'
                    }`}
                  >
                    <div className="whitespace-pre-line font-sans">
                      {msg.text}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] pl-2">
                  <Bot className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>AI thinking...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Preset Suggestions */}
            <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-900 overflow-x-auto whitespace-nowrap scrollbar-none">
              <div className="flex gap-1.5">
                {chatbotPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePresetClick(preset)}
                    className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-400" />
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Footer Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about skills, AdiBot, resume..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:scale-105 active:scale-95 transition-all shadow-md shadow-cyan-500/20"
                aria-label="Send Query"
              >
                <Send className="w-4 h-4 text-slate-950" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
