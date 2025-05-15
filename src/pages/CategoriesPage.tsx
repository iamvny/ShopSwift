
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CategoryGrid from '@/components/category/CategoryGrid';
import { categories } from '@/data/products';

const CategoriesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="container-custom py-10">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          Product Categories
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our wide range of product categories and find what you're looking for
        </p>
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-md animate-pulse">
              <div className="w-full h-48 bg-gray-300"></div>
              <div className="p-5">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <CategoryGrid />
          
          <motion.div 
            className="mt-16 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6"
              variants={itemVariants}
            >
              Why Shop With Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={itemVariants}
              >
                <div className="text-shop-primary text-3xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your items delivered right to your doorstep with our quick shipping options.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={itemVariants}
              >
                <div className="text-shop-primary text-3xl mb-4">💯</div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">All our products are carefully selected to ensure premium quality and longevity.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                variants={itemVariants}
              >
                <div className="text-shop-primary text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600">Not satisfied? Return or exchange your purchase within 30 days, no questions asked.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CategoriesPage;
