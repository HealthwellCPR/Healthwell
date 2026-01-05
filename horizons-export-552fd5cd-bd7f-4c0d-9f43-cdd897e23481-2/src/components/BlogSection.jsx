
import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Workplace Safety',
      date: 'December 15, 2025',
      title: 'Why Every Workplace Needs CPR Training',
      description: 'Learn how CPR training can save lives in the workplace and why it should be a priority for every business.',
      image: 'Professional workplace setting with employees in business attire during CPR training session'
    },
    {
      id: 2,
      category: 'Community Safety',
      date: 'December 10, 2025',
      title: 'The Importance of AED Access in Public Spaces',
      description: 'Discover how automated external defibrillators are saving lives and why accessibility matters.',
      image: 'Public space with AED emergency device mounted on wall in accessible location'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">QUICK & EASY</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-3 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and insights on CPR and health safety
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
