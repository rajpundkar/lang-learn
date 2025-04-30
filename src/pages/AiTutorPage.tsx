import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, MessageSquare, ChevronRight, ArrowRight, Bookmark, Clock, Info, Zap } from 'lucide-react';
import AiTutor from '../components/AiTutor';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const AiTutorPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI tutor for compiler design and language translators. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  
  const suggestedQuestions = [
    "What is the difference between a compiler and an interpreter?",
    "How does lexical analysis work?",
    "Explain abstract syntax trees (ASTs)",
    "What are the phases of a compiler?",
    "How do I implement a recursive descent parser?",
    "What is the role of semantic analysis?"
  ];

  const learningPaths = [
    { 
      title: "Compiler Basics", 
      description: "Learn fundamental compiler concepts",
      modules: 4,
      time: "2 hours",
      icon: <Bot className="w-5 h-5 text-blue-400" />,
      color: '#3b82f6'
    },
    { 
      title: "Parser Deep Dive", 
      description: "Advanced parsing techniques",
      modules: 6,
      time: "3 hours",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      color: '#eab308'
    },
    { 
      title: "Type Systems", 
      description: "Understanding type checking and inference",
      modules: 5,
      time: "2.5 hours",
      icon: <Info className="w-5 h-5 text-green-400" />,
      color: '#22c55e'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Tutor
        </motion.h1>
        <motion.p 
          className="text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get personalized assistance with our AI-powered compiler design tutor. Ask questions, get explanations, and receive guided learning.
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Learning Resources */}
          <div className="col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-400" />
                <span>AI Learning Resources</span>
              </h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-white mb-3">Suggested Questions</h4>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="w-full p-2 text-left text-sm rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors flex items-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{question}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-white mb-3">AI Learning Paths</h4>
                <div className="space-y-3">
                  {learningPaths.map((path, index) => (
                    <div 
                      key={index}
                      className="rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all group"
                    >
                      <div 
                        className="p-3 flex items-center gap-3"
                        style={{
                          background: `linear-gradient(to right, ${path.color}30, transparent)`
                        }}
                      >
                        <div
                          className="p-2 rounded-lg"
                          style={{
                            background: `linear-gradient(135deg, ${path.color}40, ${path.color}20)`,
                            boxShadow: `0 0 10px ${path.color}20`
                          }}
                        >
                          {path.icon}
                        </div>
                        <div>
                          <h5 className="font-medium text-white">{path.title}</h5>
                          <p className="text-gray-400 text-xs">{path.description}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-3 flex justify-between items-center text-xs">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center text-gray-400">
                            <Bookmark className="w-3 h-3 mr-1" />
                            <span>{path.modules} modules</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{path.time}</span>
                          </div>
                        </div>
                        
                        <button className="text-blue-400 group-hover:text-blue-300">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-3 p-2 text-center text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center">
                  <span>View all learning paths</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/30">
                <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-400" />
                  <span>About AI Tutor</span>
                </h4>
                <p className="text-gray-300 text-sm">
                  Our AI tutor is specialized in compiler design and language translation concepts. It can help with explanations, code examples, and guide you through complex topics.
                </p>
              </div>
            </div>
          </div>
          
          {/* Main Chat Area */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 overflow-hidden h-[700px] flex flex-col">
              <div className="bg-gray-800 p-4 border-b border-blue-900/20 flex items-center gap-3">
                <div className="bg-blue-600 rounded-full p-2">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">CompilerGPT Assistant</h3>
                  <p className="text-gray-400 text-xs">Specialized in compiler design and language translation</p>
                </div>
              </div>
              
              <AiTutor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTutorPage;