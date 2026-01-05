
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, ChevronDown, ChevronUp, Check, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseCard = ({ course }) => {
  // FIX: Hooks must be called unconditionally at the top level
  const [isExpanded, setIsExpanded] = useState(false);

  // Safety check to prevent crash if course is undefined
  // This must come AFTER all hooks are declared
  if (!course) {
    return null;
  }

  const { title, duration, price, description, details, icon: Icon, badge, color } = course;

  // Updated Acuity Scheduling Link
  const scheduleLink = "https://app.acuityscheduling.com/schedule.php?owner=37981943";

  const handleBookClass = (e) => {
    e.stopPropagation();
    window.open(scheduleLink, '_blank');
  };

  const isBlue = color === 'blue';
  const themeColor = isBlue ? 'text-blue-600' : 'text-red-600';
  const themeBg = isBlue ? 'bg-blue-600' : 'bg-red-600';
  const themeLightBg = isBlue ? 'bg-blue-50' : 'bg-red-50';
  const themeHover = isBlue ? 'hover:bg-blue-700' : 'hover:bg-red-700';

  // Fallback icon if Icon is undefined
  const DisplayIcon = Icon || HelpCircle;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col group relative">
      {/* Top Accent Line */}
      <div className={`h-1.5 w-full ${themeBg}`}></div>
      
      <div className={`p-8 ${themeLightBg} relative transition-colors duration-300`}>
        {badge && (
          <div className="absolute top-4 right-4 bg-[#0f2a4a] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider shadow-md uppercase z-10">
            {badge}
          </div>
        )}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-2 bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300`}>
          <DisplayIcon className={`w-7 h-7 ${themeColor}`} />
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col pt-6">
        <h3 className="text-xl font-bold text-[#0f2a4a] mb-3 leading-tight min-h-[56px] flex items-center">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-500 mb-5 text-sm font-medium bg-gray-50 px-3 py-1.5 rounded-md self-start border border-gray-100">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          <span>{duration}</span>
        </div>
        
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {description}
        </p>

        <AnimatePresence>
          {isExpanded && details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-6 space-y-2 border-t border-dashed border-gray-200">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 mt-4">What you'll learn:</p>
                {details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${themeColor}`} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Course Fee</span>
              {price.includes('Contact') ? (
                <span className="text-lg font-bold text-gray-700">{price}</span>
              ) : (
                <span className="text-3xl font-extrabold text-[#0f2a4a]">{price}</span>
              )}
            </div>
            <Button 
              onClick={handleBookClass}
              className={`${themeBg} ${themeHover} text-white font-semibold px-6 rounded-lg shadow-lg shadow-gray-200 group-hover:shadow-xl transition-all`}
            >
              Book Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {details && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center w-full py-2 text-xs font-bold text-gray-500 hover:text-[#0f2a4a] transition-colors uppercase tracking-wide gap-1 group/btn"
            >
              {isExpanded ? 'Show Less' : 'View Course Details'}
              {isExpanded ? (
                <ChevronUp className="w-3 h-3 group-hover/btn:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
