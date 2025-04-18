import React from 'react';
import { motion } from 'framer-motion';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoCard = ({ icon, title, content }: ContactInfoCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-md h-full"
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 flex-shrink-0">
            {icon}
          </div>
          <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        </div>
        <div className="flex-1 flex items-center">
          {content}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;