import React from 'react';
import { motion } from 'framer-motion';
import { StatsCardProps } from '../types/statsprops';

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color = 'primary' }) => {
  const colors = {
    primary: 'bg-blue-50 text-blue-600',
    secondary: 'bg-purple-50 text-purple-600',
    error: 'bg-red-50 text-red-600',
    warning: 'bg-orange-50 text-orange-600',
    success: 'bg-green-50 text-green-600',
    info: 'bg-cyan-50 text-cyan-600',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-lg p-6 shadow-sm ${colors[color as keyof typeof colors]}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 rounded-full bg-white bg-opacity-50">
        {React.isValidElement(icon) 
          ? React.cloneElement(icon) 
          : icon}
      </div>



      </div>
    </motion.div>
  );
};

export default StatsCard;