import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  correctAnswer
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    setIsCorrect(index === correctAnswer);
    
    setTimeout(() => {
      setIsFlipped(true);
    }, 500);
  };

  return (
    <div className="h-[300px] w-full [perspective:1000px]">
      <motion.div 
        className={`relative w-full h-full [transform-style:preserve-3d] transition-all duration-500 ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of card (question) */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-900/30 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">{question}</h3>
          
          <div className="space-y-3">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  selectedOption === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                disabled={selectedOption !== null}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-800/50 flex items-center justify-center mr-3 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Back of card (answer) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-900/30 shadow-xl flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">Answer:</h3>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            {isCorrect ? (
              <>
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <p className="text-green-400 text-xl font-bold">Correct!</p>
                <p className="text-gray-300 mt-2">{options[correctAnswer]}</p>
              </>
            ) : (
              <>
                <XCircle className="w-16 h-16 text-red-500 mb-4" />
                <p className="text-red-400 text-xl font-bold">Incorrect</p>
                <p className="text-white mt-2">The correct answer is:</p>
                <p className="text-gray-300 font-medium mt-1">{options[correctAnswer]}</p>
              </>
            )}
          </div>
          
          <button
            onClick={() => {
              setIsFlipped(false);
              setSelectedOption(null);
              setIsCorrect(null);
            }}
            className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </motion.div>

      {/* Glow effect for card */}
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: isCorrect === true
            ? '0 0 20px rgba(34, 197, 94, 0.4)'
            : isCorrect === false
            ? '0 0 20px rgba(239, 68, 68, 0.4)'
            : 'none',
          opacity: selectedOption !== null ? 1 : 0,
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
};

export default QuizCard;