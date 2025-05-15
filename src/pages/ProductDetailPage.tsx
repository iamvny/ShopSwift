
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Star, 
  MinusCircle, 
  PlusCircle, 
  ShoppingCart,
  Check, 
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import ProductGallery from '@/components/product/ProductGallery';
import ProductCard from '@/components/product/ProductCard';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { getProductById, getRelatedProducts } from '@/data/products';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(parseInt(productId || '0'));
  const relatedProducts = getRelatedProducts(parseInt(productId || '0'), 4);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Button asChild className="bg-shop-primary hover:bg-blue-600">
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleToggleWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="container-custom py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex items-center text-sm">
          <li className="flex items-center">
            <Link to="/" className="text-gray-500 hover:text-shop-primary">
              Home
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
          </li>
          <li className="flex items-center">
            <Link 
              to="/products" 
              className="text-gray-500 hover:text-shop-primary"
            >
              Products
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
          </li>
          <li className="font-medium text-gray-900 truncate max-w-[200px]">
            {product.name}
          </li>
        </ol>
      </nav>
      
      {/* Product Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Gallery */}
        <div>
          <ProductGallery images={product.images} name={product.name} />
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-4">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.new && (
                <span className="bg-shop-primary text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
              {product.bestSeller && (
                <span className="bg-shop-secondary text-white text-xs px-2 py-1 rounded">
                  BEST SELLER
                </span>
              )}
              {product.discountedPrice && (
                <span className="bg-shop-accent text-white text-xs px-2 py-1 rounded">
                  SALE
                </span>
              )}
            </div>
            
            {/* Title and Rating */}
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                    stroke={i < Math.floor(product.rating) ? "#f59e0b" : "#d1d5db"}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.discountedPrice ? (
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-shop-accent">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-2 text-shop-accent font-medium">
                    Save ${(product.price - product.discountedPrice).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            {/* Availability */}
            <div className="mb-6 flex items-center">
              {product.inStock ? (
                <>
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-green-500 font-medium">In Stock</span>
                </>
              ) : (
                <span className="text-red-500 font-medium">Out of Stock</span>
              )}
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  <MinusCircle size={24} />
                </motion.button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="mx-2 w-16 text-center border rounded-md py-1"
                />
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange(1)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <PlusCircle size={24} />
                </motion.button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div whileTap={{ scale: 0.98 }} className="flex-1 md:flex-none">
                <Button 
                  onClick={handleAddToCart} 
                  disabled={!product.inStock}
                  className="w-full bg-shop-primary hover:bg-blue-600 flex items-center justify-center gap-2"
                  size="lg"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.98 }} className="flex-1 md:flex-none">
                <Button 
                  onClick={handleToggleWishlist}
                  variant={isInWishlist(product.id) ? "default" : "outline"}
                  size="lg"
                  className={`w-full flex items-center justify-center gap-2 ${
                    isInWishlist(product.id) 
                      ? "bg-red-500 hover:bg-red-600 border-red-500" 
                      : "hover:text-red-500 hover:border-red-500"
                  }`}
                >
                  <Heart 
                    size={20} 
                    className={isInWishlist(product.id) ? "fill-white" : ""} 
                  />
                  {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                </Button>
              </motion.div>
            </div>
            
            {/* Specs */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-gray-600">{key}:</span>{" "}
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="w-full border-b mb-6 bg-transparent p-0">
          <TabsTrigger 
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-shop-primary data-[state=active]:shadow-none"
          >
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="specifications"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-shop-primary data-[state=active]:shadow-none"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger 
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-shop-primary data-[state=active]:shadow-none"
          >
            Reviews ({product.reviews})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <div className="prose max-w-none">
            <h3 className="font-bold text-xl mb-4">Product Description</h3>
            <p>{product.description}</p>
            {/* Additional description content would go here */}
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi eu arcu 
              ultricies finibus. Proin facilisis, nisi nec faucibus dapibus, nibh nisi hendrerit 
              nisi, vel mattis nulla orci nec nunc. Vivamus hendrerit venenatis lectus, id egestas 
              tellus rutrum vel.
            </p>
            <p className="mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="specifications">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-4">Product Specifications</h3>
              {product.specs ? (
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specs).map(([key, value], index) => (
                        <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-3 text-sm font-medium text-gray-900">{key}</td>
                          <td className="px-6 py-3 text-sm text-gray-600">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No specifications available for this product.</p>
              )}
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Additional Information</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm font-medium text-gray-900">Weight</td>
                      <td className="px-6 py-3 text-sm text-gray-600">0.5 kg</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-3 text-sm font-medium text-gray-900">Dimensions</td>
                      <td className="px-6 py-3 text-sm text-gray-600">10 × 10 × 5 cm</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm font-medium text-gray-900">Color</td>
                      <td className="px-6 py-3 text-sm text-gray-600">Black</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-3 text-sm font-medium text-gray-900">Warranty</td>
                      <td className="px-6 py-3 text-sm text-gray-600">1 Year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-3 text-sm font-medium text-gray-900">SKU</td>
                      <td className="px-6 py-3 text-sm text-gray-600">PROD-{product.id}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-4">Customer Reviews</h3>
            
            {/* Review Summary */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-1/3">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-5xl font-bold mb-2">{product.rating.toFixed(1)}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                        stroke={i < Math.floor(product.rating) ? "#f59e0b" : "#d1d5db"}
                      />
                    ))}
                  </div>
                  <div className="text-gray-600">{product.reviews} reviews</div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center">
                      <div className="w-14 text-sm text-gray-600">
                        {star} star{star > 1 ? 's' : ''}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2 mr-4">
                        <div 
                          className="bg-yellow-400 h-2.5 rounded-full"
                          style={{ width: `${star * 20}%` }}
                        ></div>
                      </div>
                      <div className="w-14 text-sm text-gray-600 text-right">
                        {Math.round(star * 20)}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="bg-shop-primary hover:bg-blue-600">Write a Review</Button>
                </div>
              </div>
            </div>
            
            {/* Individual Reviews */}
            <div className="space-y-6">
              <div className="border-t pt-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">John D.</h4>
                  <span className="text-gray-500">2 days ago</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < 5 ? "#f59e0b" : "none"}
                      stroke={i < 5 ? "#f59e0b" : "#d1d5db"}
                    />
                  ))}
                </div>
                <p className="text-gray-700">
                  Great product! Exactly what I was looking for. The quality is excellent and 
                  it arrived quickly. Would definitely recommend.
                </p>
              </div>
              <div className="border-t pt-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Sarah M.</h4>
                  <span className="text-gray-500">1 week ago</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < 4 ? "#f59e0b" : "none"}
                      stroke={i < 4 ? "#f59e0b" : "#d1d5db"}
                    />
                  ))}
                </div>
                <p className="text-gray-700">
                  I'm very satisfied with this purchase. The product is well-made and looks 
                  even better in person. Shipping was fast.
                </p>
              </div>
              <div className="border-t pt-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Mike P.</h4>
                  <span className="text-gray-500">3 weeks ago</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < 5 ? "#f59e0b" : "none"}
                      stroke={i < 5 ? "#f59e0b" : "#d1d5db"}
                    />
                  ))}
                </div>
                <p className="text-gray-700">
                  Absolutely love this! It has exceeded my expectations in every way. The 
                  customer service was also excellent when I had questions before ordering.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Related Products */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="product-grid">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
