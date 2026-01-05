
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, CalendarCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  // Updated Acuity Scheduling Link
  const scheduleLink = "https://app.acuityscheduling.com/schedule.php?owner=37981943";

  const handleGetCertified = () => {
    window.open(scheduleLink, '_blank');
  };

  const handleViewCalendar = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-[#0f2a4a] min-h-[650px] flex items-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1e4b8a] via-[#0f2a4a] to-[#0a1c33]"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Abstract Shapes */}
      <motion.div 
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }} 
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} 
        className="absolute top-20 right-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }} 
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} 
        className="absolute bottom-[-50px] left-[10%] w-96 h-96 bg-red-600/10 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }} 
              className="flex flex-wrap gap-3 mb-8"
            >
              {/* AHA Logo above "AHA Approved Training Site" text */}
              <div className="flex flex-col items-center justify-center bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-0" /> {/* Subtle gradient overlay */}
                <img 
                   src="https://horizons-cdn.hostinger.com/552fd5cd-bd7f-4c0d-9f43-cdd897e23481/b5e0dea1f398a33bc22c2b29e7e84951.png" 
                   alt="American Heart Association Aligned Training Site Logo" 
                   className="h-16 w-16 object-contain mb-2 relative z-10" 
                 />
                <div className="inline-flex items-center gap-2 text-white relative z-10">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-bold tracking-widest uppercase">AHA Approved Training Site</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold tracking-widest uppercase">EMSA Approved</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
              Lifesaving Training That Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Real-World Demands</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed font-light max-w-lg">
              Professional CPR & First Aid certification for healthcare, childcare, and workplaces in Northern California.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleGetCertified} 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-7 text-lg font-bold rounded-lg shadow-xl shadow-red-900/20 hover:shadow-2xl hover:shadow-red-900/40 transition-all transform hover:-translate-y-1"
              >
                GET CERTIFIED NOW
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleViewCalendar} 
                variant="outline" 
                className="border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-[#0f2a4a] px-8 py-7 text-lg font-bold rounded-lg transition-all hover:border-white"
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                VIEW COURSE CALENDAR
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Removed explicit AHA Logo placement here as it's now with text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.2 }} 
            className="hidden lg:flex items-center justify-center relative min-h-[400px]"
          >
             {/* Glow effect behind logo - kept for visual interest if no image */}
             <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full" />
             
            {/* Keeping this as a placeholder, perhaps for a future image, or removed if not needed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
