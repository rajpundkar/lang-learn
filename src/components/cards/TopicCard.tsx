import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  progress: number;
}

const TopicCard: React.FC<TopicCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  progress 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl backdrop-blur-lg transition-all duration-300 ${
        isHovered ? 'scale-105' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: `linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))`,
        boxShadow: isHovered ? `0 0 30px ${color}40` : '0 0 15px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gray-700 w-full">
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            width: `${progress}%`, 
            background: `linear-gradient(90deg, ${color}, ${color}aa)` 
          }}
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div
            className="p-3 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${color}40, ${color}20)`,
              boxShadow: `0 0 15px ${color}40`
            }}
          >
            {icon}
          </div>
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="transparent"
                stroke="#2a3a5e"
                strokeWidth="4"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="transparent"
                stroke={color}
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
              {progress}%
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {Math.round(progress / 10)} / 10 modules
          </span>
          <motion.button
            className="flex items-center text-white rounded-full p-2 transition-all"
            style={{
              background: isHovered ? color : 'transparent',
              boxShadow: isHovered ? `0 0 15px ${color}60` : 'none',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Glowing border on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: `inset 0 0 0 1px ${color}80`,
          borderRadius: 'inherit',
        }}
      />
    </motion.div>
  );
};

export default TopicCard;