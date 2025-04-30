import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Download, Copy, Save, Play, RefreshCw } from 'lucide-react';
import CodePlayground from '../components/CodePlayground';

const exampleCodes = [
  {
    name: 'Simple Lexer',
    code: `// Simple Lexer Example
function tokenize(sourceCode) {
  const tokens = [];
  let current = 0;
  
  while (current < sourceCode.length) {
    let char = sourceCode[current];
    
    // Handle whitespace
    if (/\\s/.test(char)) {
      current++;
      continue;
    }
    
    // Handle numbers
    if (/[0-9]/.test(char)) {
      let value = '';
      
      while (/[0-9]/.test(char)) {
        value += char;
        char = sourceCode[++current];
      }
      
      tokens.push({ type: 'number', value });
      continue;
    }
    
    // Handle identifiers
    if (/[a-z]/i.test(char)) {
      let value = '';
      
      while (/[a-z]/i.test(char)) {
        value += char;
        char = sourceCode[++current];
      }
      
      // Check if this is a keyword
      const isKeyword = ['let', 'if', 'else', 'return'].includes(value);
      
      tokens.push({
        type: isKeyword ? 'keyword' : 'identifier',
        value
      });
      
      continue;
    }
    
    // Handle simple operators
    if (['+', '-', '*', '/', '=', '(', ')', '{', '}', ';'].includes(char)) {
      tokens.push({ type: 'operator', value: char });
      current++;
      continue;
    }
    
    // Handle unknown characters
    tokens.push({ type: 'unknown', value: char });
    current++;
  }
  
  return tokens;
}

// Sample usage
const source = "let x = 5; if (x > 3) { return x; }";
console.log(tokenize(source));`
  },
  {
    name: 'Recursive Descent Parser',
    code: `// Recursive Descent Parser for a simple expression language
// Grammar:
// expr    → term { ("+" | "-") term }
// term    → factor { ("*" | "/") factor }
// factor  → NUMBER | "(" expr ")"

let tokens = [];
let current = 0;

function parse(sourceTokens) {
  tokens = sourceTokens;
  current = 0;
  return expression();
}

function expression() {
  let left = term();
  
  while (current < tokens.length &&
         (tokens[current].value === '+' || tokens[current].value === '-')) {
    const operator = tokens[current].value;
    current++;
    const right = term();
    left = {
      type: 'BinaryExpression',
      operator,
      left,
      right
    };
  }
  
  return left;
}

function term() {
  let left = factor();
  
  while (current < tokens.length &&
         (tokens[current].value === '*' || tokens[current].value === '/')) {
    const operator = tokens[current].value;
    current++;
    const right = factor();
    left = {
      type: 'BinaryExpression',
      operator,
      left,
      right
    };
  }
  
  return left;
}

function factor() {
  if (tokens[current].type === 'number') {
    return {
      type: 'NumberLiteral',
      value: tokens[current++].value
    };
  }
  
  if (tokens[current].value === '(') {
    current++; // Skip opening parenthesis
    const expression = expression();
    
    if (tokens[current].value !== ')') {
      throw new Error('Expected closing parenthesis');
    }
    
    current++; // Skip closing parenthesis
    return expression;
  }
  
  throw new Error('Unexpected token: ' + tokens[current].value);
}

// Sample usage with the lexer from previous example
const source = "3 + 4 * 2 - (1 + 2)";
// First tokenize, then parse
// const tokens = tokenize(source);
// const ast = parse(tokens);
// console.log(JSON.stringify(ast, null, 2));`
  },
  {
    name: 'Type Checker',
    code: `// Simple Type Checker for expressions
function typeCheck(ast, environment = {}) {
  switch (ast.type) {
    case 'NumberLiteral':
      return 'number';
      
    case 'StringLiteral':
      return 'string';
      
    case 'BooleanLiteral':
      return 'boolean';
      
    case 'Identifier':
      if (!environment[ast.name]) {
        throw new TypeError(\`Variable '\${ast.name}' is not defined\`);
      }
      return environment[ast.name];
      
    case 'BinaryExpression':
      const leftType = typeCheck(ast.left, environment);
      const rightType = typeCheck(ast.right, environment);
      
      // For arithmetic operators
      if (['+', '-', '*', '/'].includes(ast.operator)) {
        if (leftType !== 'number' || rightType !== 'number') {
          throw new TypeError(
            \`Cannot perform arithmetic on types '\${leftType}' and '\${rightType}'\`
          );
        }
        return 'number';
      }
      
      // For comparison operators
      if (['<', '>', '<=', '>='].includes(ast.operator)) {
        if (leftType !== 'number' || rightType !== 'number') {
          throw new TypeError(
            \`Cannot compare types '\${leftType}' and '\${rightType}'\`
          );
        }
        return 'boolean';
      }
      
      // For equality operators
      if (['==', '!='].includes(ast.operator)) {
        // Any types can be compared for equality
        return 'boolean';
      }
      
      // String concatenation
      if (ast.operator === '+' && leftType === 'string' && rightType === 'string') {
        return 'string';
      }
      
      throw new TypeError(
        \`Unsupported operation '\${ast.operator}' for types '\${leftType}' and '\${rightType}'\`
      );
      
    case 'VariableDeclaration':
      const declarationType = typeCheck(ast.init, environment);
      // Add to environment for future reference
      environment[ast.id.name] = declarationType;
      return declarationType;
      
    default:
      throw new TypeError(\`Unknown AST node type: \${ast.type}\`);
  }
}

// Sample AST for expression: 5 + 10 * 2
const sampleAST = {
  type: 'BinaryExpression',
  operator: '+',
  left: { type: 'NumberLiteral', value: '5' },
  right: {
    type: 'BinaryExpression',
    operator: '*',
    left: { type: 'NumberLiteral', value: '10' },
    right: { type: 'NumberLiteral', value: '2' }
  }
};

// console.log(typeCheck(sampleAST)); // Should return 'number'`
  }
];

const CodePlaygroundPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
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
          Code Playground
        </motion.h1>
        <motion.p 
          className="text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experiment with compiler concepts in our interactive playground. Write code and see it transform through each phase of the compilation process.
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-900/50">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Interactive Compiler</h2>
            </div>
            
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors" title="Save">
                <Save className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors" title="Download">
                <Download className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors" title="Copy">
                <Copy className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex border-b border-gray-700 mb-4">
              {exampleCodes.map((example, index) => (
                <button 
                  key={index}
                  className={`py-2 px-4 text-sm font-medium transition-colors ${
                    activeTab === index 
                      ? 'text-blue-400 border-b-2 border-blue-500' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {example.name}
                </button>
              ))}
              <button className="py-2 px-4 text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors">
                + New
              </button>
            </div>
          </div>
          
          <CodePlayground />
          
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-400">
              <span className="font-medium">Tip:</span> Click "Run" to see how your code is processed through the compiler pipeline.
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors flex items-center gap-2 text-sm">
                <RefreshCw className="w-4 h-4" /> Reset
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center gap-2 text-sm">
                <Play className="w-4 h-4" /> Run
              </button>
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6">
            <h3 className="text-xl font-bold mb-4">How to Use the Playground</h3>
            
            <ol className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <div className="bg-blue-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <strong className="text-white">Select an example</strong> or create a new one from the tabs above
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <strong className="text-white">Modify the code</strong> in the editor panel to experiment with different compiler concepts
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <strong className="text-white">Click "Run"</strong> to see your code processed through the compiler pipeline
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                <div>
                  <strong className="text-white">Watch the visualization</strong> to see how your code transforms through each phase
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                <div>
                  <strong className="text-white">Examine the output</strong> to understand the result of each compiler phase
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-900/30 p-6">
            <h3 className="text-xl font-bold mb-4">Learn Compiler Concepts</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/70 rounded-lg hover:bg-gray-800 transition-colors">
                <h4 className="font-medium text-blue-400 mb-2">Lexical Analysis</h4>
                <p className="text-gray-300 text-sm">Learn how compilers break down source code into tokens like keywords, identifiers, and operators.</p>
              </div>
              
              <div className="p-4 bg-gray-800/70 rounded-lg hover:bg-gray-800 transition-colors">
                <h4 className="font-medium text-green-400 mb-2">Parsing</h4>
                <p className="text-gray-300 text-sm">Discover how tokens are organized into a hierarchical structure using grammar rules.</p>
              </div>
              
              <div className="p-4 bg-gray-800/70 rounded-lg hover:bg-gray-800 transition-colors">
                <h4 className="font-medium text-yellow-400 mb-2">Semantic Analysis</h4>
                <p className="text-gray-300 text-sm">Explore how compilers check for type constraints and other semantic rules.</p>
              </div>
              
              <div className="p-4 bg-gray-800/70 rounded-lg hover:bg-gray-800 transition-colors">
                <h4 className="font-medium text-purple-400 mb-2">Code Optimization</h4>
                <p className="text-gray-300 text-sm">Learn techniques for improving code efficiency without changing behavior.</p>
              </div>
            </div>
            
            <button className="mt-4 w-full py-2 text-center bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm">
              View Learning Modules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlaygroundPage;