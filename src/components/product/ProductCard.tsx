
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart(product, 1);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link 
        to={`/product/${product.id}`} 
        className="block group"
      >
        <div className="bg-white rounded-none overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Image container with fixed height */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Product badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.discountedPrice && (
                <span className="bg-shop-accent text-white text-xs font-bold px-2 py-1">
                  {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                </span>
              )}
              {product.new && (
                <span className="bg-shop-primary text-white text-xs font-bold px-2 py-1">
                  NEW
                </span>
              )}
              {product.bestSeller && (
                <span className="bg-shop-secondary text-white text-xs font-bold px-2 py-1">
                  BEST SELLER
                </span>
              )}
            </div>

            {/* Wishlist button */}
            <button 
              onClick={handleToggleWishlist} 
              className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
            >
              <Heart 
                size={18} 
                className={`${isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'} transition-colors`} 
              />
            </button>

            {/* Quick add button (appears on hover) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white py-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-shop-primary hover:bg-blue-600 flex items-center justify-center gap-1"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Product details */}
          <div className="p-4">
            <h3 className="font-medium text-gray-900 truncate group-hover:text-shop-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="mt-1 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                    stroke={i < Math.floor(product.rating) ? "#f59e0b" : "#d1d5db"}
                    className="w-4 h-4"
                  />
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500">
                ({product.reviews})
              </span>
            </div>
            
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center">
                {product.discountedPrice ? (
                  <>
                    <span className="text-lg font-bold text-shop-accent">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
