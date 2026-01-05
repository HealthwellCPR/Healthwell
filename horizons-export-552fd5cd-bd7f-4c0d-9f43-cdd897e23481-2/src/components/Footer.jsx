
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://horizons-cdn.hostinger.com/552fd5cd-bd7f-4c0d-9f43-cdd897e23481/db97c712173d653ba1375ddcc8dbca34.png" 
                alt="HealthWell Logo" 
                className="w-auto h-24 brightness-0 invert" 
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Northern California's trusted provider for AHA-aligned CPR, BLS, and First Aid training. Empowering our community with lifesaving skills.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#courses" className="hover:text-red-500 transition-colors">All Courses</a></li>
              <li><a href="#calendar" className="hover:text-red-500 transition-colors">Class Calendar</a></li>
              <li><a href="#corporate" className="hover:text-red-500 transition-colors">Corporate Training</a></li>
              <li><a href="#verify" className="hover:text-red-500 transition-colors">Verify Certification</a></li>
              <li><a href="#blog" className="hover:text-red-500 transition-colors">Safety Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Sacramento, CA<br />Serving Northern California</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a href="tel:9168445480" className="hover:text-white">(916) 844-5480</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href="mailto:info@healthwell.com" className="hover:text-white">info@healthwell.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6">Join Our Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">Get the latest safety tips and course updates.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-red-500 text-sm"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 my-8"></div>

        {/* AHA Disclaimer - The Fine Print */}
        <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium uppercase tracking-wide">
              The American Heart Association strongly promotes knowledge and proficiency in all CPR and ECC courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the American Heart Association. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the Association.
            </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} HealthWell CPR & Blended Safety. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
