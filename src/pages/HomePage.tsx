import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Terminal, Award, Users, Bot, ArrowRight, CheckCircle } from 'lucide-react';
import TopicCard from '../components/cards/TopicCard';
import CompilerPipeline from '../components/CompilerPipeline';
import CodePlayground from '../components/CodePlayground';
import AiTutor from '../components/AiTutor';

const topics = [
  {
    title: 'Lexical Analysis',
    description: 'Learn how compilers break down source code into tokens.',
    icon: <Code className="w-6 h-6 text-blue-400" />,
    color: '#3b82f6',
    progress: 85
  },
  {
    title: 'Syntax Analysis',
    description: 'Understand how parser generators build abstract syntax trees.',
    icon: <BookOpen className="w-6 h-6 text-green-400" />,
    color: '#22c55e',
    progress: 60
  },
  {
    title: 'Semantic Analysis',
    description: 'Explore type checking and semantic validation techniques.',
    icon: <Terminal className="w-6 h-6 text-yellow-400" />,
    color: '#eab308',
    progress: 40
  },
  {
    title: 'Code Generation',
    description: 'Master the art of translating ASTs into executable code.',
    icon: <Award className="w-6 h-6 text-red-400" />,
    color: '#ef4444',
    progress: 25
  }
];

const features = [
  {
    title: 'Interactive Modules',
    description: 'Learn compiler design with step-by-step guidance and hands-on exercises.',
    icon: <BookOpen className="w-6 h-6" />,
    path: '/learning-modules'
  },
  {
    title: 'Code Playground',
    description: 'Test and visualize compiler phases in real-time with our interactive playground.',
    icon: <Terminal className="w-6 h-6" />,
    path: '/code-playground'
  },
  {
    title: 'Quizzes & Challenges',
    description: 'Test your knowledge with our gamified quizzes and real-world challenges.',
    icon: <Award className="w-6 h-6" />,
    path: '/quizzes'
  },
  {
    title: 'Community Forum',
    description: 'Join a community of compiler enthusiasts to share ideas and get help.',
    icon: <Users className="w-6 h-6" />,
    path: '/community'
  },
  {
    title: 'AI Tutor',
    description: 'Get personalized assistance with our AI-powered compiler design tutor.',
    icon: <Bot className="w-6 h-6" />,
    path: '/ai-tutor'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-red-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-2/3 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          
          {/* Circuit board pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <pattern id="circuit-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(30)">
              <path d="M 0,50 L 100,50 M 50,0 L 50,100" stroke="white" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="3" fill="white" />
              <circle cx="0" cy="50" r="3" fill="white" />
              <circle cx="100" cy="50" r="3" fill="white" />
              <circle cx="50" cy="0" r="3" fill="white" />
              <circle cx="50" cy="100" r="3" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Master Language</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                  Translators & Compilers
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                Discover the art and science of language translation with our interactive
                learning platform. From lexical analysis to code generation, we've got you covered.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/learning-modules"
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/20 flex items-center space-x-2"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/code-playground"
                  className="bg-transparent text-white border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <span>Try Playground</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] w-full"
            >
              <div className="absolute inset-0 bg-gray-800/70 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-10 bg-gray-900/70 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto font-mono text-sm text-gray-400">compiler.js</div>
                </div>
                
                <div className="p-6 pt-12 font-mono text-sm overflow-hidden h-full">
                  <div className="text-blue-400">class <span className="text-green-400">Compiler</span> {`{`}</div>
                  <div className="pl-4 text-yellow-300">constructor<span className="text-white">(</span>sourceCode<span className="text-white">) {`{`}</span></div>
                  <div className="pl-8 text-gray-300">this.sourceCode = sourceCode;</div>
                  <div className="pl-8 text-gray-300">this.tokens = [];</div>
                  <div className="pl-8 text-gray-300">this.ast = null;</div>
                  <div className="pl-4 text-white">{`}`}</div>
                  <div className="mt-2 pl-4 text-yellow-300">tokenize<span className="text-white">() {`{`}</span></div>
                  <div className="pl-8 text-purple-400">// Lexical Analysis Phase</div>
                  <div className="pl-8 text-gray-300">console.log('Tokenizing source code...');</div>
                  <div className="pl-8 text-red-400">for <span className="text-white">(let i = 0; i &lt; this.sourceCode.length; i++) {`{`}</span></div>
                  <div className="pl-12 text-gray-300">// Process each character...</div>
                  <div className="pl-8 text-white">{`}`}</div>
                  <div className="pl-8 text-gray-300">return this.tokens;</div>
                  <div className="pl-4 text-white">{`}`}</div>
                  <div className="mt-2 pl-4 text-yellow-300">parse<span className="text-white">() {`{`}</span></div>
                  <div className="pl-8 text-purple-400">// Syntax Analysis Phase</div>
                  <div className="pl-8 text-gray-300">this.ast = {};</div>
                  <div className="pl-4 text-white">{`}`}</div>
                  <div className="text-white">{`}`}</div>
                </div>
                
                {/* Animated cursor */}
                <div 
                  className="absolute h-4 w-2 bg-blue-500 opacity-75"
                  style={{
                    top: '232px',
                    left: '220px',
                    animation: 'blink 1s infinite'
                  }}
                ></div>
              </div>
              
              {/* Animated particles */}
              <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-red-500 animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-green-500 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="relative">
                Master Key Compiler Concepts
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></span>
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive curriculum covering all aspects of compiler design and language translation, from tokenization to optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic, index) => (
              <TopicCard
                key={index}
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                color={topic.color}
                progress={topic.progress}
              />
            ))}
          </div>
          
          <CompilerPipeline />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="relative">
                Platform Features
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></span>
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our innovative tools and resources make learning compiler design engaging and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center mb-5">
                  {React.cloneElement(feature.icon, { className: 'w-7 h-7 text-blue-400' })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-5">{feature.description}</p>
                
                <Link
                  to={feature.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Playground Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="relative">
                Interactive Code Playground
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></span>
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Experience real-time visualization of compiler phases. Write code and see it transform through each stage of the compilation process.
            </p>
            
            <CodePlayground />
          </div>
        </div>
      </section>

      {/* AI Tutor Preview */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="relative">
                  AI-Powered Tutoring
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></span>
                </span>
              </h2>
              <p className="text-gray-300 mb-6">
                Get personalized assistance with our AI tutor that specializes in compiler design and language translation concepts. Ask questions, get explanations, and receive guided learning tailored to your needs.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Ask questions about compiler concepts',
                  'Get step-by-step explanations',
                  'Request code examples and analysis',
                  'Receive personalized learning paths',
                  'Practice with AI-generated challenges'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/ai-tutor"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Bot className="w-5 h-5 mr-2" />
                <span>Talk to AI Tutor</span>
              </Link>
            </div>
            
            <div>
              <AiTutor />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-gray-900/50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-10"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master Language Translators?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of developers learning the art and science of compiler design. Start your journey today with our interactive platform.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/learning-modules"
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/20"
            >
              Start Learning Now
            </Link>
            
            <Link
              to="/community"
              className="bg-transparent text-white border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;