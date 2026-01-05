
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scheduleLink = "https://app.acuityscheduling.com/schedule.php?owner=37981943";

  const handleRegister = () => {
    window.open(scheduleLink, '_blank');
  };

  const navigation = [
    { name: 'Health Care Providers', href: '#courses' },
    { name: 'Child Care Providers', href: '#courses' },
    { name: 'Course Calendar', href: '#courses' },
    { name: 'Corporate Training', href: '#courses' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar - Blue Section with AHA Logo */}
      <div className="bg-[#0f2a4a] text-white py-2 border-b border-white/5 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-6 opacity-90 text-xs font-medium">
              <a href="tel:9168445480" className="flex items-center gap-2 hover:text-red-400 transition-colors duration-300">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sacramento</span>
                <span className="opacity-50 mx-1">|</span>
                <Phone className="w-3.5 h-3.5" />
                <span>(916) 844-5480</span>
              </a>
            </div>

            {/* Middle: AHA Logo (Removed as requested to move it to the Hero section) */}
             <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 items-center justify-center">
                {/* No longer displaying AHA logo here based on latest instructions */}
            </div>


            {/* Right: Social Media */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="hover:text-red-400 transition-colors duration-300 transform hover:scale-110">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-40 shadow-sm backdrop-blur-md bg-white/95 h-[120px] flex items-center">
        <nav className="container mx-auto px-4 w-full h-full">
          <div className="flex items-center justify-between w-full h-full">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center gap-6">
              <img 
                src="https://horizons-cdn.hostinger.com/552fd5cd-bd7f-4c0d-9f43-cdd897e23481/db97c712173d653ba1375ddcc8dbca34.png" 
                alt="HealthWell CPR & Blended Safety Logo" 
                className="h-24 w-auto" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6">
              <div className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative px-3 py-2 text-[13px] font-bold text-[#1e3a5f] uppercase tracking-wide transition-colors hover:text-red-600"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                ))}
              </div>
              <Button 
                onClick={handleRegister}
                className="bg-red-600 text-white hover:bg-red-700 text-sm px-6 py-2.5 h-auto font-bold tracking-wide rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Register for Classes
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-[#1e3a5f] hover:bg-gray-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="xl:hidden overflow-hidden border-t border-gray-100 absolute left-0 right-0 top-[120px] bg-white shadow-xl"
              >
                <div className="py-4 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="px-4 pt-2 pb-4">
                    <Button 
                      onClick={() => { handleRegister(); setMobileMenuOpen(false); }}
                      className="w-full bg-red-600 text-white hover:bg-red-700 font-bold"
                    >
                      Register for Classes
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
