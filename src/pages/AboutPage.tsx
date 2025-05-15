
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInDelayed = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const teamMembers = [
    {
      name: "Jennifer Lee",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
      bio: "With 15+ years in retail, Jennifer founded our company with a vision to create an exceptional online shopping experience."
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000",
      bio: "Michael brings over a decade of tech expertise, ensuring our platform delivers a seamless shopping experience."
    },
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000",
      bio: "With an eye for design and market trends, Sarah leads our creative team to showcase products in their best light."
    },
    {
      name: "David Williams",
      position: "Customer Experience Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
      bio: "David ensures that every customer interaction with our platform exceeds expectations through thoughtful service design."
    }
  ];

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="container-custom py-10">
      {/* Hero Section */}
      <div className="relative mb-16 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000" 
            alt="Our Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shop-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 py-20 px-6 md:px-10 lg:px-16 text-white max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Our Store
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Connecting you with quality products since 2015. Our mission is to provide exceptional products with outstanding service.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <motion.div 
        className="grid md:grid-cols-2 gap-10 mb-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.div variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2015, our e-commerce platform began with a simple idea: to create an online shopping destination that combines quality products, competitive prices, and exceptional customer service.
          </p>
          <p className="text-muted-foreground mb-4">
            What started as a small venture with just a handful of products has grown into a comprehensive online store featuring thousands of items across multiple categories. Throughout our journey, our core values have remained unchanged—we believe in authenticity, quality, and putting our customers first.
          </p>
          <p className="text-muted-foreground">
            Today, we're proud to serve customers nationwide, connecting them with products they love while continuously evolving to meet the changing needs of online shoppers.
          </p>
        </motion.div>
        <motion.div variants={fadeInDelayed} className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000" 
            alt="Our beginnings" 
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Our Values Section */}
      <motion.div 
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeIn}
        >
          Our Values
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            variants={fadeIn}
          >
            <div className="h-14 w-14 rounded-full bg-shop-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shop-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Quality</h3>
            <p className="text-muted-foreground">
              We carefully select every product in our catalog to ensure it meets our high standards of quality and value.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            variants={fadeIn}
          >
            <div className="h-14 w-14 rounded-full bg-shop-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shop-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Reliability</h3>
            <p className="text-muted-foreground">
              From secure checkout to prompt delivery, we aim to make every aspect of your shopping experience dependable.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border md:col-span-2 lg:col-span-1"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            variants={fadeIn}
          >
            <div className="h-14 w-14 rounded-full bg-shop-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shop-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-muted-foreground">
              We're constantly evolving, seeking out new products and improving our platform to deliver the best possible experience.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Team Section */}
      <motion.div 
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          variants={fadeIn}
        >
          Meet Our Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="card-hover"
            >
              <Card className="h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-shop-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="py-12 bg-shop-light rounded-xl mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5 }
              }
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-shop-primary mb-2">7+</div>
            <div className="text-muted-foreground">Years in Business</div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5, delay: 0.2 }
              }
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-shop-primary mb-2">5k+</div>
            <div className="text-muted-foreground">Products</div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5, delay: 0.4 }
              }
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-shop-primary mb-2">50k+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5, delay: 0.6 }
              }
            }}
          >
            <div className="text-4xl md:text-5xl font-bold text-shop-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
