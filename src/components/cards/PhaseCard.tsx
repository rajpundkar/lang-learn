import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PhaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="rounded-xl overflow-hidden relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          delay: index * 0.1,
          duration: 0.5
        }
      }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: `linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))`,
        boxShadow: isHovered 
          ? `0 0 25px ${color}40` 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Connector line */}
      {index > 0 && (
        <div className="absolute -left-8 top-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-500/50" />
      )}

      <div className="p-5">
        <div className="flex items-center gap-4 mb-3">
          <div
            className="p-2 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${color}40, ${color}20)`,
              boxShadow: `0 0 10px ${color}40`
            }}
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-gray-300 text-sm mb-3">{description}</p>
        
        <motion.button
          className="w-full mt-2 py-1.5 px-3 rounded-lg text-xs font-medium transition-all"
          style={{
            background: isHovered 
              ? `linear-gradient(90deg, ${color}80, ${color})` 
              : `linear-gradient(90deg, ${color}40, ${color}60)`,
            boxShadow: isHovered ? `0 0 15px ${color}40` : 'none',
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Phase number */}
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          boxShadow: `0 0 10px ${color}40`
        }}>
        {index + 1}
      </div>

      {/* Glowing border on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: `inset 0 0 0 1.5px ${color}80`,
          borderRadius: 'inherit',
        }}
      />
    </motion.div>
  );
};

export default PhaseCard;