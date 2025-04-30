import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Trophy, Gift, Zap, Brain } from 'lucide-react';
import QuizCard from '../components/QuizCard';

const quizzes = [
  {
    category: 'Lexical Analysis',
    questions: [
      {
        question: 'What is the primary purpose of lexical analysis in a compiler?',
        options: [
          'To optimize the code for better performance',
          'To check for syntax errors in the program',
          'To convert source code into tokens',
          'To generate machine code'
        ],
        correctAnswer: 2
      },
      {
        question: 'Which data structure is commonly used to implement a lexical analyzer?',
        options: [
          'Binary Search Tree',
          'Finite Automaton',
          'Hash Table',
          'Linked List'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    category: 'Syntax Analysis',
    questions: [
      {
        question: 'Which of the following parsing techniques builds the parse tree from the bottom up?',
        options: [
          'Recursive Descent Parsing',
          'Predictive Parsing',
          'LL Parsing',
          'LR Parsing'
        ],
        correctAnswer: 3
      },
      {
        question: 'What is the output of the syntax analysis phase?',
        options: [
          'Machine code',
          'Abstract Syntax Tree',
          'List of tokens',
          'Optimized code'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    category: 'Semantic Analysis',
    questions: [
      {
        question: 'Which of the following is NOT typically checked during semantic analysis?',
        options: [
          'Type compatibility',
          'Variable declaration before use',
          'Syntax correctness of statements',
          'Scope rules'
        ],
        correctAnswer: 2
      }
    ]
  }
];

const achievements = [
  {
    title: 'Lexical Master',
    description: 'Complete all lexical analysis quizzes',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    progress: 75
  },
  {
    title: 'Parser Pro',
    description: 'Score 90% or higher on syntax analysis',
    icon: <Brain className="w-6 h-6 text-green-400" />,
    progress: 50
  },
  {
    title: 'Semantic Sage',
    description: 'Complete all semantic analysis challenges',
    icon: <Trophy className="w-6 h-6 text-blue-400" />,
    progress: 30
  },
  {
    title: 'Compiler Guru',
    description: 'Complete all quizzes with perfect scores',
    icon: <Gift className="w-6 h-6 text-purple-400" />,
    progress: 15
  }
];

const QuizzesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Lexical Analysis');
  
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
          Interactive Quizzes
        </motion.h1>
        <motion.p 
          className="text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Test your knowledge and reinforce your understanding of compiler concepts with our interactive quizzes. Earn badges and track your progress!
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        {/* Progress Stats */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="transparent"
                    stroke="#2a3a5e"
                    strokeWidth="12"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="transparent"
                    stroke="url(#progress-gradient)"
                    strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 42 / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">42%</span>
                  <span className="text-xs text-gray-400">Completed</span>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xl font-bold text-white mb-4">Your Quiz Progress</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/70 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-gray-300 font-medium">Quizzes Taken</h4>
                    <div className="bg-blue-900/60 text-blue-400 text-xs font-medium px-2 py-1 rounded">
                      5/12
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-800/70 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-gray-300 font-medium">Success Rate</h4>
                    <div className="bg-green-900/60 text-green-400 text-xs font-medium px-2 py-1 rounded">
                      85%
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-800/70 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-gray-300 font-medium">Badges Earned</h4>
                    <div className="bg-yellow-900/60 text-yellow-400 text-xs font-medium px-2 py-1 rounded">
                      3/10
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
                  <span>View detailed stats</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quiz Categories */}
          <div className="col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Quiz Categories</span>
              </h3>
              
              <div className="space-y-3">
                {quizzes.map((quiz, index) => (
                  <button
                    key={index}
                    className={`w-full p-3 text-left rounded-lg transition-all ${
                      activeCategory === quiz.category
                        ? 'bg-blue-900/50 text-blue-400'
                        : 'bg-gray-800/70 text-gray-300 hover:bg-gray-800'
                    }`}
                    onClick={() => setActiveCategory(quiz.category)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{quiz.category}</span>
                      <span className="text-xs bg-gray-700 rounded-full px-2 py-0.5">
                        {quiz.questions.length} Q's
                      </span>
                    </div>
                  </button>
                ))}
                
                <button
                  className="w-full p-3 text-left rounded-lg bg-gray-800/50 text-gray-500 border border-dashed border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="flex justify-center items-center">
                    <span>More coming soon...</span>
                  </div>
                </button>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-white mb-4">Your Achievements</h4>
                
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gray-800/70 rounded-lg p-3">
                      <div className="flex items-start gap-3">
                        <div 
                          className="p-2 rounded-full flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${
                              achievement.progress >= 100 ? '#22c55e20' : '#64748b20'
                            }, transparent)`,
                            boxShadow: achievement.progress >= 100 ? '0 0 10px rgba(34, 197, 94, 0.4)' : 'none'
                          }}
                        >
                          {achievement.icon}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h5 className="font-medium text-white">{achievement.title}</h5>
                            <span className="text-xs text-gray-400">{achievement.progress}%</span>
                          </div>
                          
                          <p className="text-gray-400 text-xs mb-2">{achievement.description}</p>
                          
                          <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full"
                              style={{ 
                                width: `${achievement.progress}%`,
                                background: 'linear-gradient(to right, #3b82f6, #ef4444)' 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Quiz Cards */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">{activeCategory} Quizzes</h3>
                <span className="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  {quizzes.find(q => q.category === activeCategory)?.questions.length || 0} questions
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {quizzes
                  .find(q => q.category === activeCategory)
                  ?.questions.map((question, index) => (
                    <QuizCard
                      key={index}
                      question={question.question}
                      options={question.options}
                      correctAnswer={question.correctAnswer}
                    />
                  ))}
              </div>
              
              <div className="mt-8 flex justify-between items-center">
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm">
                  Previous
                </button>
                
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                </div>
                
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;