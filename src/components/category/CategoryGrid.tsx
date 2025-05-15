
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryGridProps {
  title?: string;
  compact?: boolean;
  className?: string;
  limitCategories?: number;
}

const categoryImages = {
  electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1000&auto=format&fit=crop",
  clothing: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
  accessories: "https://images.unsplash.com/photo-1623857584158-23c769acb3c6?q=80&w=1000&auto=format&fit=crop",
  home: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1000&auto=format&fit=crop",
  beauty: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop",
  toys: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1000&auto=format&fit=crop",
  all: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop"
};

// Animation variants for item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      type: "spring", 
      stiffness: 100 
    } 
  }
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  title = "Shop by Category",
  compact = false,
  className = "",
  limitCategories
}) => {
  // Skip the "all" category which is usually the first one
  const displayCategories = limitCategories 
    ? categories.slice(1, limitCategories + 1) 
    : categories.slice(1);

  return (
    <div className={className}>
      {title && (
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
      )}
      <div className={`grid grid-cols-2 ${compact ? 'gap-2 md:grid-cols-4' : 'gap-4 md:grid-cols-3 lg:grid-cols-4'}`}>
        {displayCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            <Link 
              to={`/products?category=${category.id}`}
              className="relative overflow-hidden block rounded-none shadow-lg group transition-all duration-300"
            >
              <div className={`${compact ? 'h-32 md:h-40' : 'h-52 md:h-64'} overflow-hidden`}>
                <img
                  src={categoryImages[category.id as keyof typeof categoryImages] || categoryImages.all}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-all duration-300 group-hover:bg-black/40">
                <div className="p-4 w-full text-white">
                  <h3 className={`font-bold ${compact ? 'text-base' : 'text-lg md:text-xl'} group-hover:translate-y-0 transition-all duration-300`}>
                    {category.name}
                  </h3>
                  {!compact && (
                    <p className="text-sm text-white/80 hidden md:block">
                      Explore {category.name.toLowerCase()}
                    </p>
                  )}
                  <div className="flex items-center text-white/90 mt-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Shop now</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
