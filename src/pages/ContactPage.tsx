
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Address",
      details: "123 E-Commerce Street, Digital City, 10001"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: "contact@shoponline.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Monday-Friday: 9am - 5pm EST"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialIcons = [
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
  ];

  return (
    <div className="container-custom py-10">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help! Get in touch with our friendly team.
        </p>
      </motion.div>

      {/* Contact Information Cards */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {contactInfo.map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-shop-primary/10 rounded-full flex items-center justify-center mb-4 text-shop-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.details}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form and Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-primary transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-primary transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-primary transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-shop-primary transition-colors"
                    rows={5}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-shop-primary hover:bg-shop-primary/90 text-white" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="rounded-md overflow-hidden h-[400px] border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596245525!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1649359400243!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div 
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeIn}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-3">What are your shipping times?</h3>
            <p className="text-muted-foreground">We process most orders within 1-2 business days. Standard shipping typically takes 3-5 business days, while express shipping delivers within 1-2 business days.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-3">How do I return an item?</h3>
            <p className="text-muted-foreground">You can initiate a return through your account dashboard within 30 days of purchase. Once approved, you'll receive a return label to ship the item back to us.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-3">Do you ship internationally?</h3>
            <p className="text-muted-foreground">Yes, we ship to over 50 countries worldwide. International shipping times vary by location but typically take 7-14 business days.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-3">How can I track my order?</h3>
            <p className="text-muted-foreground">Once your order ships, you'll receive a tracking number via email. You can also view tracking information in your account dashboard.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Social Media Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
        <div className="flex justify-center space-x-4">
          {socialIcons.map((social, index) => (
            <motion.a 
              key={index}
              href="#" 
              className="w-10 h-10 bg-shop-primary text-white rounded-full flex items-center justify-center hover:bg-shop-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
