
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BlogCard = ({ post }) => {
  const { category, date, title, description, image } = post;

  const handleReadMore = () => {
    toast({
      title: "Read Article",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img alt={`Blog post image for ${title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-blue-600 font-semibold text-sm">{category}</span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Button 
          onClick={handleReadMore}
          variant="ghost"
          className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group-hover:gap-2 transition-all"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
