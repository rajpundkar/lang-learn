import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const AiTutor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI tutor for compiler design and language translators. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMsg: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Lexical analysis is the first phase of a compiler, where the source code is converted into tokens. These tokens are the smallest units of meaning in your programming language.",
        "The difference between a compiler and an interpreter is that a compiler translates the entire program to machine code before execution, while an interpreter executes the program line-by-line.",
        "Abstract Syntax Trees (ASTs) represent the hierarchical structure of your program. They're created during the syntax analysis phase and are crucial for semantic analysis and code generation.",
        "Let me explain how recursive descent parsing works. It's a top-down parsing technique where each non-terminal in your grammar has its own function.",
        "Type checking is a key part of semantic analysis. It ensures operations are performed on compatible data types, preventing runtime errors."
      ];
      
      const botMsg: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prevMessages => [...prevMessages, botMsg]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-blue-900/30 h-[500px] flex flex-col">
      <div className="bg-gray-800 p-3 border-b border-blue-900/20 flex items-center gap-3">
        <div className="bg-blue-600 rounded-full p-2">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-medium">AI Tutor</h3>
          <p className="text-gray-400 text-xs">Always here to help with compiler concepts</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.isBot 
                  ? 'bg-gray-800 text-gray-100' 
                  : 'bg-blue-600 text-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {message.isBot ? (
                  <Bot className="w-4 h-4" />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p>{message.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="p-3 border-t border-blue-900/20 bg-gray-800/50">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-gray-700 text-gray-100 rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
            placeholder="Ask about compiler concepts..."
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-2 bottom-2 text-blue-500 hover:text-blue-400 transition-colors p-1"
            disabled={!input.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiTutor;