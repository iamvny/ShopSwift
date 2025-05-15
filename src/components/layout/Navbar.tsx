
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { categories } from '@/data/products';

const Navbar = () => {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Would typically navigate to search results page with query
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-30">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient">ShopSwift</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-shop-primary transition-colors">Home</Link>
            <Link to="/products" className="hover:text-shop-primary transition-colors">Shop</Link>
            <div className="group relative">
              <span className="cursor-pointer hover:text-shop-primary transition-colors">
                Categories
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2 space-y-1">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block px-4 py-2 text-sm hover:bg-shop-light rounded-md"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="hover:text-shop-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-shop-primary transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Search, Cart, User */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="w-40 lg:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
              >
                <Search size={18} />
              </Button>
            </form>

            <div className="group relative">
              <Link to="/signin">
                <Button variant="ghost" size="icon">
                  <User size={20} />
                </Button>
              </Link>
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2 space-y-1">
                  <Link 
                    to="/signin"
                    className="block px-4 py-2 text-sm hover:bg-shop-light rounded-md"
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup"
                    className="block px-4 py-2 text-sm hover:bg-shop-light rounded-md"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/wishlist" className="relative">
              <Button variant="ghost" size="icon">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-shop-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="py-2 hover:text-shop-primary transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/products" className="py-2 hover:text-shop-primary transition-colors" onClick={toggleMenu}>Shop</Link>
              <details className="group">
                <summary className="py-2 list-none cursor-pointer flex items-center justify-between hover:text-shop-primary transition-colors">
                  Categories
                  <span className="transform transition-transform duration-200 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block py-1 text-sm"
                      onClick={toggleMenu}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </details>
              <Link to="/about" className="py-2 hover:text-shop-primary transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="py-2 hover:text-shop-primary transition-colors" onClick={toggleMenu}>Contact</Link>
              <Link to="/wishlist" className="py-2 hover:text-shop-primary transition-colors" onClick={toggleMenu}>
                Wishlist
                {wishlist.length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              
              <div className="pt-4 flex space-x-4 items-center">
                <Link to="/signin" onClick={toggleMenu}>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <User size={16} />
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to="/cart" className="relative" onClick={toggleMenu}>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <ShoppingCart size={16} />
                    <span>Cart</span>
                    {totalItems > 0 && (
                      <span className="ml-1 bg-shop-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>

              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="pt-2">
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" variant="default">
                    <Search size={16} />
                  </Button>
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
