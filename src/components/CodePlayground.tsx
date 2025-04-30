import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, AlertCircle, ChevronRight, Code, ArrowRight } from 'lucide-react';

const CodePlayground: React.FC = () => {
  const [code, setCode] = useState(`// Sample code
function lexicalAnalysis(sourceCode) {
  let tokens = [];
  // Tokenization logic here
  return tokens;
}

function syntaxAnalysis(tokens) {
  let ast = {};
  // Parsing logic here
  return ast;
}

// The rest of the compiler pipeline...`);

  const [activePhase, setActivePhase] = useState(0);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const phases = [
    { name: 'Source Code', icon: <Code className="w-4 h-4" /> },
    { name: 'Lexical Analysis', icon: <ChevronRight className="w-4 h-4" /> },
    { name: 'Syntax Analysis', icon: <ChevronRight className="w-4 h-4" /> },
    { name: 'Semantic Analysis', icon: <ChevronRight className="w-4 h-4" /> },
    { name: 'Output', icon: <ArrowRight className="w-4 h-4" /> },
  ];

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        if (activePhase < phases.length - 1) {
          setActivePhase(prev => prev + 1);
        } else {
          setIsAnimating(false);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [activePhase, isAnimating, phases.length]);

  const handleRun = () => {
    setError('');
    setActivePhase(0);
    setIsAnimating(true);
    
    // Simulate compiler output
    const outputResult = `// Compiled output
function lexicalAnalysis(n){return[]}function syntaxAnalysis(n){return{}}`;
    
    setTimeout(() => {
      setOutput(outputResult);
    }, phases.length * 1000);
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-blue-900/30">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-blue-900/20">
        <h3 className="text-white font-medium flex items-center gap-2">
          <Code className="text-blue-400 w-5 h-5" />
          <span>Interactive Compiler</span>
        </h3>
        <button
          onClick={handleRun}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded flex items-center gap-1 text-sm transition-colors"
        >
          <Play className="w-4 h-4" />
          <span>Run</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-blue-900/20">
        {/* Source code panel */}
        <div className="h-full">
          <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-300 border-b border-blue-900/20">
            Input
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[300px] bg-gray-900 text-gray-300 p-4 resize-none focus:outline-none font-mono text-sm"
            placeholder="Enter your code here..."
          />
        </div>

        {/* Visualization panel */}
        <div className="h-full flex flex-col">
          <div className="bg-gray-800/50 px-4 py-2 text-sm text-gray-300 border-b border-blue-900/20">
            Compiler Pipeline
          </div>
          
          {/* Pipeline visualization */}
          <div className="relative h-24 bg-gray-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>
            
            <div className="relative z-10 flex justify-between w-4/5">
              {phases.map((phase, index) => (
                <motion.div 
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= activePhase 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}
                  animate={{ 
                    scale: index === activePhase ? 1.2 : 1,
                    boxShadow: index === activePhase 
                      ? '0 0 15px rgba(59, 130, 246, 0.7)' 
                      : 'none'
                  }}
                >
                  {phase.icon}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Phase name */}
          <div className="text-center py-2 text-blue-400 font-medium">
            {phases[activePhase].name}
          </div>
          
          {/* Output area */}
          <div className="flex-1 bg-gray-900 p-4 relative font-mono text-sm">
            {error ? (
              <div className="text-red-500 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <pre className="overflow-auto">{error}</pre>
              </div>
            ) : (
              <pre className="text-gray-300 overflow-auto h-full">{output}</pre>
            )}
            
            {/* Animation overlay */}
            {isAnimating && activePhase > 0 && activePhase < phases.length - 1 && (
              <motion.div 
                className="absolute inset-0 bg-blue-500/10 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-blue-400 animate-pulse">
                  Processing... {phases[activePhase].name}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;