import React from 'react';
import { motion } from 'framer-motion';
import { Layers, FileCode, GitBranchPlus, List, RefreshCcw, Terminal, ChevronRight } from 'lucide-react';
import PhaseCard from '../components/cards/PhaseCard';

const phases = [
  {
    title: 'Lexical Analysis',
    description: 'Converts source code into tokens, identifying keywords, operators, etc.',
    icon: <FileCode className="w-5 h-5 text-blue-400" />,
    color: '#3b82f6',
    modules: [
      'Introduction to Lexical Analysis',
      'Regular Expressions',
      'Finite Automata',
      'Lexer Implementation'
    ]
  },
  {
    title: 'Syntax Analysis',
    description: 'Builds abstract syntax trees from tokens using grammar rules.',
    icon: <GitBranchPlus className="w-5 h-5 text-green-400" />,
    color: '#22c55e',
    modules: [
      'Context-Free Grammars',
      'Top-Down Parsing',
      'Bottom-Up Parsing',
      'Parser Generators'
    ]
  },
  {
    title: 'Semantic Analysis',
    description: 'Checks type constraints and other semantic requirements.',
    icon: <List className="w-5 h-5 text-yellow-400" />,
    color: '#eab308',
    modules: [
      'Type Systems',
      'Symbol Tables',
      'Type Checking',
      'Static Analysis'
    ]
  },
  {
    title: 'Optimization',
    description: 'Improves code efficiency without changing behavior.',
    icon: <RefreshCcw className="w-5 h-5 text-purple-400" />,
    color: '#a855f7',
    modules: [
      'Intermediate Representations',
      'Local Optimizations',
      'Global Optimizations',
      'Register Allocation'
    ]
  },
  {
    title: 'Code Generation',
    description: 'Produces target language code from optimized representation.',
    icon: <Terminal className="w-5 h-5 text-red-400" />,
    color: '#ef4444',
    modules: [
      'Target Architectures',
      'Instruction Selection',
      'Memory Management',
      'Runtime Systems'
    ]
  }
];

const LearningModulesPage: React.FC = () => {
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
          Learning Modules
        </motion.h1>
        <motion.p 
          className="text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our comprehensive curriculum covering all aspects of compiler design and language translation.
          Each module builds on previous concepts and includes interactive exercises.
        </motion.p>
      </div>

      {/* Learning Path Overview */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-blue-900/50">
              <Layers className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Compiler Design Learning Path</h2>
              <p className="text-gray-400">From source code to executable in 5 key phases</p>
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-600 to-red-500 rounded-full"></div>
            
            <div className="space-y-8 relative z-10">
              {phases.map((phase, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-6 items-start pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center z-20 flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${phase.color}, ${phase.color}80)`,
                      boxShadow: `0 0 10px ${phase.color}40`
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-5 w-full hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          background: `linear-gradient(135deg, ${phase.color}40, ${phase.color}20)`,
                          boxShadow: `0 0 10px ${phase.color}40`
                        }}
                      >
                        {phase.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Modules:</h4>
                      {phase.modules.map((module, moduleIndex) => (
                        <div 
                          key={moduleIndex}
                          className="flex items-center justify-between bg-gray-800/70 rounded-lg p-3 hover:bg-gray-700/50 transition-colors cursor-pointer"
                        >
                          <span className="text-gray-300">{module}</span>
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <button 
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                        style={{
                          background: `linear-gradient(90deg, ${phase.color}40, ${phase.color}60)`,
                          boxShadow: `0 0 10px ${phase.color}20`
                        }}
                      >
                        Start Learning
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Modules */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Modules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Building a Lexer with Regex',
              level: 'Intermediate',
              duration: '45 mins',
              icon: <FileCode className="w-5 h-5 text-blue-400" />,
              color: '#3b82f6'
            },
            {
              title: 'Recursive Descent Parsing',
              level: 'Advanced',
              duration: '1 hour',
              icon: <GitBranchPlus className="w-5 h-5 text-green-400" />,
              color: '#22c55e'
            },
            {
              title: 'Type Inference Systems',
              level: 'Advanced',
              duration: '1.5 hours',
              icon: <List className="w-5 h-5 text-yellow-400" />,
              color: '#eab308'
            }
          ].map((module, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-5 hover:border-blue-500/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, ${module.color}40, ${module.color}20)`,
                    boxShadow: `0 0 10px ${module.color}40`
                  }}
                >
                  {module.icon}
                </div>
                <div className="bg-gray-900/70 px-3 py-1 rounded-full text-xs font-medium text-gray-300">
                  {module.level}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{module.title}</h3>
              
              <div className="text-gray-400 text-sm mb-4">
                Duration: {module.duration}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1.5 h-6 rounded-full"
                      style={{
                        backgroundColor: i < 4 ? module.color : '#374151',
                        opacity: i < 4 ? (i + 1) * 0.2 + 0.2 : 0.3
                      }}
                    />
                  ))}
                </div>
                
                <button 
                  className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: `linear-gradient(90deg, ${module.color}40, ${module.color}60)`,
                    boxShadow: `0 0 10px ${module.color}20`
                  }}
                >
                  View Module
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Specialized Learning Paths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Frontend Development',
              description: 'Focus on parsing techniques and AST manipulation for frontend tools.',
              icon: <FileCode className="w-5 h-5 text-blue-400" />,
              color: '#3b82f6',
              modules: 4
            },
            {
              title: 'Language Design',
              description: 'Learn how to design and implement your own programming language.',
              icon: <Layers className="w-5 h-5 text-purple-400" />,
              color: '#a855f7',
              modules: 6
            },
            {
              title: 'Optimization Expert',
              description: 'Master advanced optimization techniques for high-performance compilers.',
              icon: <RefreshCcw className="w-5 h-5 text-green-400" />,
              color: '#22c55e',
              modules: 5
            }
          ].map((path, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/70 rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/30 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="h-20 flex items-center px-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(to right, ${path.color}50, ${path.color}10)`
                }}
              >
                <div 
                  className="absolute top-0 right-0 w-40 h-40 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${path.color}30 0%, transparent 70%)`,
                    transform: 'translate(30%, -60%)'
                  }}
                />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${path.color}, ${path.color}80)`,
                      boxShadow: `0 0 15px ${path.color}40`
                    }}
                  >
                    {path.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{path.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{path.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    {path.modules} modules
                  </span>
                  
                  <button 
                    className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    View Path
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningModulesPage;