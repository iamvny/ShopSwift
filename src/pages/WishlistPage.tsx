
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Heart, 
  Trash, 
  ShoppingBag, 
  AlertCircle,
  Star
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (productId: number) => {
    const product = wishlist.find(item => item.id === productId);
    if (product) {
      addToCart(product, 1);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="container-custom py-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          My Wishlist
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Items you've saved for later
        </p>
      </motion.div>

      {wishlist.length === 0 ? (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-6 flex justify-center">
            <Heart size={64} className="text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-8">
            Items added to your wishlist will be saved here
          </p>
          <Button asChild className="bg-shop-primary hover:bg-blue-600">
            <Link to="/products">
              <ShoppingBag className="mr-2" size={18} />
              Continue Shopping
            </Link>
          </Button>
        </motion.div>
      ) : (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}
            </h2>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                  <Trash size={16} className="mr-2" /> Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear your wishlist?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will remove all items from your wishlist. This cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-red-500 hover:bg-red-600"
                    onClick={clearWishlist}
                  >
                    Clear Wishlist
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {wishlist.map((product) => (
                <motion.div 
                  key={product.id}
                  variants={itemVariants}
                  exit="exit"
                  layout
                  className="bg-white rounded-none shadow-md overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 md:w-56 h-48 sm:h-auto overflow-hidden">
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="flex-grow p-4 sm:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              <Link 
                                to={`/product/${product.id}`} 
                                className="hover:text-shop-primary transition-colors"
                              >
                                {product.name}
                              </Link>
                            </h3>
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                  <Star
                                    size={16}
                                    fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                                    stroke={i < Math.floor(product.rating) ? "#f59e0b" : "#d1d5db"}
                                    className="mr-1"
                                  />
                                </span>
                              ))}
                              <span className="text-xs text-gray-500 ml-1">
                                ({product.reviews})
                              </span>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-400 hover:text-red-500"
                            onClick={() => removeFromWishlist(product.id)}
                          >
                            <Trash size={18} />
                          </Button>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center">
                          {product.discountedPrice ? (
                            <>
                              <span className="text-xl font-bold text-shop-accent mr-2">
                                ${product.discountedPrice.toFixed(2)}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                ${product.price.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="text-xl font-bold">
                              ${product.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            asChild
                          >
                            <Link to={`/product/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button 
                            onClick={() => handleAddToCart(product.id)}
                            size="sm"
                            className="bg-shop-primary hover:bg-blue-600"
                            disabled={!product.inStock}
                          >
                            <ShoppingCart size={14} className="mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                      {!product.inStock && (
                        <div className="mt-2 flex items-center text-red-500 text-sm">
                          <AlertCircle size={14} className="mr-1" />
                          Out of Stock
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
