
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CreditCard 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-shop-dark text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ShopSwift</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for quality products at competitive prices.
              We're dedicated to providing an exceptional shopping experience.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-shop-primary p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-shop-primary p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-shop-primary p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-shop-primary p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  123 Commerce Street, Shopping District, City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@shopswift.com" className="text-gray-300 hover:text-white transition-colors">
                  info@shopswift.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get special offers, free giveaways, and product launches.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-shop-primary"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-shop-primary hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 mt-10 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ShopSwift. All rights reserved.
          </p>
          <div className="flex items-center mt-3 md:mt-0 space-x-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-white p-1 rounded hover:shadow-lg transition-shadow">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/visa-2.svg" 
                  alt="Visa" 
                  className="h-6 w-12 object-contain" 
                />
              </div>
              <div className="bg-white p-1 rounded hover:shadow-lg transition-shadow">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" 
                  alt="Mastercard" 
                  className="h-6 w-12 object-contain" 
                />
              </div>
              <div className="bg-white p-1 rounded hover:shadow-lg transition-shadow">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/american-express-1.svg" 
                  alt="American Express" 
                  className="h-6 w-12 object-contain" 
                />
              </div>
              <div className="bg-white p-1 rounded hover:shadow-lg transition-shadow">
                <img 
                  src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg" 
                  alt="PayPal" 
                  className="h-6 w-12 object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
