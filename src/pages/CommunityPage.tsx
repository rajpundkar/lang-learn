import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, MessageSquare, ThumbsUp, Award, UserPlus, Search, Filter } from 'lucide-react';

const CommunityPage: React.FC = () => {
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
          Community & Discussion
        </motion.h1>
        <motion.p 
          className="text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with compiler enthusiasts, share ideas, and get help from our vibrant community of language designers and developers.
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-blue-900/50">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Community</h3>
              </div>
              
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-blue-900/50 text-blue-400">
                  <span>All Discussions</span>
                  <span className="bg-blue-800 text-xs rounded-full px-2 py-0.5">128</span>
                </button>
                
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-800 transition-colors">
                  <span>Lexical Analysis</span>
                  <span className="bg-gray-700 text-xs rounded-full px-2 py-0.5">24</span>
                </button>
                
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-800 transition-colors">
                  <span>Syntax Analysis</span>
                  <span className="bg-gray-700 text-xs rounded-full px-2 py-0.5">36</span>
                </button>
                
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-800 transition-colors">
                  <span>Semantic Analysis</span>
                  <span className="bg-gray-700 text-xs rounded-full px-2 py-0.5">18</span>
                </button>
                
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-800 transition-colors">
                  <span>Code Generation</span>
                  <span className="bg-gray-700 text-xs rounded-full px-2 py-0.5">15</span>
                </button>
                
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-800/70 text-gray-300 hover:bg-gray-800 transition-colors">
                  <span>Language Design</span>
                  <span className="bg-gray-700 text-xs rounded-full px-2 py-0.5">35</span>
                </button>
              </div>
              
              <div className="border-t border-gray-800 pt-6">
                <h4 className="font-medium text-white mb-4">Top Contributors</h4>
                
                <div className="space-y-3">
                  {[
                    { name: 'Alex Chen', posts: 128, badge: 'Expert' },
                    { name: 'Maya Rodriguez', posts: 97, badge: 'Advanced' },
                    { name: 'Jamal Wilson', posts: 86, badge: 'Advanced' },
                    { name: 'Sarah Kim', posts: 72, badge: 'Intermediate' }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{user.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-xs">{user.posts} posts</span>
                          <span className="text-xs bg-blue-900/50 text-blue-400 px-1.5 py-0.5 rounded">
                            {user.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 p-2 border border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-gray-600 hover:text-gray-300 transition-colors flex items-center justify-center gap-2 text-sm">
                  <UserPlus className="w-4 h-4" />
                  <span>View All Members</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Recent Discussions</h3>
                
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Filter className="w-5 h-5 text-gray-400" />
                  </button>
                  <select className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-1 px-3 focus:outline-none focus:border-blue-500 text-sm">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Most Commented</option>
                  </select>
                </div>
              </div>
              
              {/* Discussion List */}
              <div className="space-y-6">
                {[
                  {
                    title: 'Building an efficient lexer for a custom language',
                    excerpt: 'I\'m working on a domain-specific language and struggling with the lexer performance. Has anyone implemented a custom lexer that can handle...',
                    author: 'Alex Chen',
                    time: '2 hours ago',
                    comments: 12,
                    likes: 24,
                    tags: ['Lexical Analysis', 'Performance', 'DSL']
                  },
                  {
                    title: 'Recursive descent vs table-driven parsing',
                    excerpt: 'What are the trade-offs between recursive descent parsing and table-driven approaches? I\'m implementing a parser for a small language and wondering which...',
                    author: 'Maya Rodriguez',
                    time: '5 hours ago',
                    comments: 18,
                    likes: 32,
                    tags: ['Syntax Analysis', 'Parsing', 'Compiler Design']
                  },
                  {
                    title: 'Type inference in statically typed languages',
                    excerpt: 'I\'m designing a statically typed language but want to implement type inference to reduce verbosity. What algorithms should I consider for...',
                    author: 'Jamal Wilson',
                    time: '1 day ago',
                    comments: 9,
                    likes: 15,
                    tags: ['Semantic Analysis', 'Type Systems', 'Language Design']
                  },
                  {
                    title: 'Code generation strategies for LLVM IR',
                    excerpt: 'What are the best practices for generating LLVM IR from an AST? I\'m particularly interested in handling control flow constructs like...',
                    author: 'Sarah Kim',
                    time: '2 days ago',
                    comments: 7,
                    likes: 11,
                    tags: ['Code Generation', 'LLVM', 'Optimization']
                  }
                ].map((discussion, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800/70 rounded-xl p-5 hover:bg-gray-800 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{discussion.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{discussion.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs bg-blue-900/40 text-blue-400 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                          {discussion.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{discussion.author}</p>
                          <div className="flex items-center text-gray-400 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{discussion.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-gray-400 text-sm">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>{discussion.comments}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          <span>{discussion.likes}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex">
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-l-lg hover:bg-gray-700 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white">1</button>
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">2</button>
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">3</button>
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-r-lg hover:bg-gray-700 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
            
            {/* Start Discussion */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Start a New Discussion</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="What's your question or topic?"
                    className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                  >
                    <option>Lexical Analysis</option>
                    <option>Syntax Analysis</option>
                    <option>Semantic Analysis</option>
                    <option>Optimization</option>
                    <option>Code Generation</option>
                    <option>Language Design</option>
                    <option>General Discussion</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
                    Content
                  </label>
                  <textarea
                    id="content"
                    rows={6}
                    placeholder="Describe your question or discussion topic in detail..."
                    className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    Post Discussion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;