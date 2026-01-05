
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import { Users, Building2, Phone, Activity, Heart, Baby, Stethoscope, FileCheck, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrainingPrograms = () => {
  const courses = [
    {
      title: "BLS for Providers",
      duration: "3.5 Hours",
      description: "Basic Life Support certification for healthcare professionals. Covers CPR, AED, and airway management.",
      price: "$90",
      details: ["AHA Certification", "Same Day Card", "Hands-on Skills"],
      tags: ["Healthcare", "Medical"],
      icon: Activity,
      color: "blue",
      badge: "Most Popular"
    },
    {
      title: "Adult CPR & First Aid",
      duration: "4 Hours",
      description: "Comprehensive training for teachers, coaches, and general public. OSHA compliant.",
      price: "$90",
      details: ["Adult CPR/AED", "First Aid Basics", "2-Year Card"],
      tags: ["Teachers", "Workplace"],
      icon: Heart,
      color: "red",
      badge: null
    },
    {
      title: "Family Childcare EMSA Approved Preventative Health",
      duration: "8 Hours",
      description: "EMSA Approved for Childcare Providers. Covers Pediatric First Aid, CPR, and Preventative Health & Safety.",
      price: "$100",
      details: ["EMSA Approved", "Childcare Licensing", "Pediatric CPR"],
      tags: ["Childcare", "Preschool"],
      icon: Baby,
      color: "red",
      badge: "EMSA Approved"
    },
    {
      title: "Heartsaver Pediatric First Aid CPR AED Childcare CPR in Sacramento, California",
      duration: "8 Hours",
      description: "The Heartsaver Pediatric First Aid CPR AED is a classroom-based course designed to meet the 8 hours of EMSA child care training that includes Pediatric First Aid CPR and AED use. This American Heart Association course meets part of the EMSA regulatory requirements for child care workers in the state of California. It teaches child care providers and others to respond to and manage illnesses and injuries in a child or infant in the first few minutes until professional help arrives.",
      price: "$100",
      details: ["State Licensing", "Pediatric Focus", "Emergency Response"],
      tags: ["Daycare", "Nannies"],
      icon: Users, // Changed icon to differentiate
      color: "blue",
      badge: "Licensing Ready"
    },
    {
      title: "Skills Sessions",
      duration: "1-2 Hours",
      description: "Hands-on skills verification for those who have completed the online portion of the course (HeartCode).",
      price: "$55",
      details: ["Skills Check", "Online Completion Reqd", "Quick Certification"],
      tags: ["Renewal", "Online+Skills"],
      icon: ClipboardList,
      color: "blue",
      badge: null
    },
     {
      title: "First Aid Only",
      duration: "2-3 Hours",
      description: "Standalone First Aid certification. Learn how to respond to common injuries and emergencies.",
      price: "$55",
      details: ["Injury Care", "Medical Emergencies", "Environmental Emergencies"],
      tags: ["General Safety"],
      icon: FileCheck,
      color: "red",
      badge: null
    }
  ];

  return (
    <section id="courses" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Our Certification Programs
          </h2>
          <p className="text-lg text-slate-600">
            Choose the right course for your profession. All certifications are AHA aligned and valid for 2 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {/* Corporate & Group Training Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Corporate Training</h3>
            <div className="inline-flex items-center text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit mb-4">
              <span className="mr-2">🕒</span> Flexible
            </div>
            <p className="text-slate-600 mb-6 flex-grow">
              We come to you. Flexible onsite scheduling for groups of any size. Ensure your workplace is compliant and safe.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Course Fee</p>
                <p className="text-xl font-bold text-[#1e3a4f]">Contact Us</p>
              </div>
              <Button 
                onClick={() => window.location.href = 'tel:9168445480'}
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Group Classes</h3>
            <div className="inline-flex items-center text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit mb-4">
              <span className="mr-2">🕒</span> Varies
            </div>
            <p className="text-slate-600 mb-6 flex-grow">
              Discounted rates for groups of 5+. Perfect for schools, small businesses, and community organizations.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Course Fee</p>
                <p className="text-xl font-bold text-[#1e3a4f]">Contact Us</p>
              </div>
              <Button 
                onClick={() => window.location.href = 'tel:9168445480'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
