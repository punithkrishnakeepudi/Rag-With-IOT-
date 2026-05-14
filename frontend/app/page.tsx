"use client";

import React, { useState, useEffect } from 'react';
import { Send, User, Bot, Sparkles, Sidebar as SidebarIcon, Plus, History, GraduationCap, Settings, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
type Message = {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
};

const CLASS_LEVELS = [
  "2nd Class", "3rd Class", "4th Class", "5th Class", "6th Class",
  "7th Class", "8th Class", "9th Class", "10th Class",
  "Intermediate", "Diploma", "Engineering"
];

export default function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: "Hello! I'm your AI Robotics Mentor. I can help you understand sensors, electronics, and engineering. What would you like to learn about today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [classLevel, setClassLevel] = useState("Engineering");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      let apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl && typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        apiUrl = `http://${hostname}:8000`;
      }
      apiUrl = apiUrl || 'http://localhost:8000';
      
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          class_level: classLevel,
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let text = '';

      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: botMsgId,
        role: 'bot',
        content: '',
        timestamp: new Date(),
      }]);
      setIsLoading(false);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          text += chunk;
          setMessages(prev => prev.map(msg => 
            msg.id === botMsgId ? { ...msg, content: text } : msg
          ));
        }
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      setMessages(prev => [...prev, {
        id: 'error',
        role: 'bot',
        content: "Sorry, I'm having trouble connecting to my brain right now. Please make sure the backend is running!",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#09090b] text-white overflow-hidden selection:bg-orange-500/30">
      {/* --- Sidebar --- */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="w-72 border-r border-zinc-800 bg-[#09090b] flex flex-col z-20"
          >
            <div className="p-4 flex items-center gap-3 border-b border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h1 className="font-bold text-lg tracking-tight">RoboMentor</h1>
            </div>

            <div className="p-4">
              <button className="w-full flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all text-sm font-medium group">
                <Plus className="w-4 h-4 text-orange-500 group-hover:rotate-90 transition-transform" />
                New Session
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">History</div>
              {[1, 2, 3].map(i => (
                <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-900 transition-colors text-sm text-zinc-400 text-left">
                  <History className="w-4 h-4" />
                  <span className="truncate">Understanding Resistors</span>
                </button>
              ))}
            </div>

            <div className="p-4 border-t border-zinc-800 space-y-2">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 text-sm text-zinc-400">
                <Settings className="w-4 h-4" /> Settings
              </button>
              <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-xs font-medium">Student Mode</span>
                </div>
                <Moon className="w-4 h-4 text-zinc-500" />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* --- Main Chat --- */}
      <main className="flex-1 flex flex-col relative min-w-0">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-800 glass z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <SidebarIcon className="w-5 h-5 text-zinc-400" />
            </button>
            <div className="h-4 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <select 
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                className="bg-transparent border-none text-sm font-semibold focus:ring-0 cursor-pointer text-zinc-200"
              >
                {CLASS_LEVELS.map(lvl => (
                  <option key={lvl} value={lvl} className="bg-zinc-900 text-white">{lvl}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] font-bold text-cyan-500 tracking-widest uppercase">
              RAG Active
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth custom-scrollbar">
          {messages.map((msg) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={msg.id}
              className={cn(
                "flex gap-4 max-w-4xl mx-auto w-full",
                msg.role === 'user' ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                msg.role === 'user' ? "bg-zinc-800" : "bg-cyan-500/10 border border-cyan-500/30"
              )}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-zinc-400" /> : <Sparkles className="w-5 h-5 text-cyan-500" />}
              </div>
              <div className={cn(
                "px-6 py-4 text-sm leading-relaxed shadow-sm",
                msg.role === 'user' ? "chat-bubble-user text-zinc-200" : "chat-bubble-bot text-zinc-100"
              )}>
                <div className="prose prose-invert max-w-none">
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex gap-4 max-w-4xl mx-auto w-full">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="chat-bubble-bot px-6 py-4 flex items-center gap-1.5">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 bg-gradient-to-t from-[#09090b] via-[#09090b] to-transparent">
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-focus-within:opacity-50" />
            <div className="relative flex items-end gap-2 bg-[#0d0d10] border border-zinc-800 rounded-2xl p-2 transition-all focus-within:border-zinc-700">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask me anything about robotics..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-4 resize-none max-h-40 min-h-[56px] text-zinc-200 placeholder:text-zinc-600"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={cn(
                  "p-3 rounded-xl transition-all mb-1 mr-1",
                  input.trim() && !isLoading 
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95" 
                    : "bg-zinc-800 text-zinc-600 grayscale"
                )}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-zinc-600 mt-3 text-center uppercase tracking-widest font-bold">
              Powered by Qwen 2.5 • Educational RAG Engine v1.0
            </p>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}</style>
    </div>
  );
}
