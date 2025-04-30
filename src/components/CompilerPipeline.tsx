import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileCode, 
  List, 
  GitBranchPlus, 
  RefreshCcw, 
  Check, 
  Terminal
} from 'lucide-react';
import PhaseCard from './cards/PhaseCard';

const phases = [
  {
    title: 'Lexical Analysis',
    description: 'Converts source code into tokens, identifying keywords, operators, etc.',
    icon: <FileCode className="w-5 h-5 text-blue-400" />,
    color: '#3b82f6',
  },
  {
    title: 'Syntax Analysis',
    description: 'Builds abstract syntax trees from tokens using grammar rules.',
    icon: <GitBranchPlus className="w-5 h-5 text-green-400" />,
    color: '#22c55e',
  },
  {
    title: 'Semantic Analysis',
    description: 'Checks type constraints and other semantic requirements.',
    icon: <List className="w-5 h-5 text-yellow-400" />,
    color: '#eab308',
  },
  {
    title: 'Optimization',
    description: 'Improves code efficiency without changing behavior.',
    icon: <RefreshCcw className="w-5 h-5 text-purple-400" />,
    color: '#a855f7',
  },
  {
    title: 'Code Generation',
    description: 'Produces target language code from optimized representation.',
    icon: <Terminal className="w-5 h-5 text-red-400" />,
    color: '#ef4444',
  }
];

const CompilerPipeline: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <div className="relative mt-16 mb-12">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        <span className="relative">
          Compiler Pipeline
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></span>
        </span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 overflow-x-auto py-4 px-2">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="md:min-w-[250px] flex-1"
            onMouseEnter={() => setActivePhase(index)}
            onMouseLeave={() => setActivePhase(null)}
          >
            <PhaseCard 
              title={phase.title}
              description={phase.description}
              icon={phase.icon}
              color={phase.color}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Animated tokens visualization below the pipeline */}
      <div className="mt-8 h-16 relative overflow-hidden rounded-lg bg-blue-950/50 backdrop-blur-sm mx-2">
        <div className="absolute inset-0 overflow-hidden">
          {activePhase !== null && (
            <motion.div
              className="absolute top-2 left-0 h-12 flex items-center gap-2 px-4"
              initial={{ x: 0 }}
              animate={{ 
                x: `${(activePhase / (phases.length - 1)) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="bg-blue-500/80 text-white px-2 py-1 rounded text-xs font-mono">
                {activePhase === 0 ? "input" : 
                 activePhase === 1 ? "tokens" : 
                 activePhase === 2 ? "AST" : 
                 activePhase === 3 ? "IR" : "output"}
              </div>
            </motion.div>
          )}

          {/* Circuit lines */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="30%" y1="20%" x2="30%" y2="80%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="70%" y1="20%" x2="70%" y2="80%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
          </svg>
        </div>

        {/* Phase labels */}
        <div className="absolute inset-0 flex justify-between items-center px-8">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              className={`h-2 w-2 rounded-full ${activePhase === index ? 'scale-150' : 'scale-100'}`}
              style={{ 
                backgroundColor: phase.color,
                boxShadow: activePhase === index ? `0 0 10px ${phase.color}` : 'none'
              }}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompilerPipeline;