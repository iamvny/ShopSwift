
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from '@/components/product/ProductCard';
import CategoryGrid from '@/components/category/CategoryGrid';
import { 
  featuredProducts, 
  newArrivals, 
  bestSellers 
} from '@/data/products';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-shop-primary/10 to-shop-secondary/10 py-16">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Shop the Latest <span className="text-gradient">Trends</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover amazing products at unbeatable prices. Quality meets affordability with our extensive collection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-shop-primary hover:bg-blue-600">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products?category=featured">Featured Products</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop" 
              alt="Shopping hero" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-medium text-gray-800">Spring Collection</p>
              <p className="text-shop-primary font-bold">Up to 40% Off</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-shop-light">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link 
              to="/products?featured=true" 
              className="flex items-center text-shop-primary hover:underline"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-shop-primary to-shop-secondary rounded-xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Summer Sale
                </h2>
                <p className="text-white/90 mb-6">
                  Get up to 50% off on selected items. Limited time offer.
                </p>
                <Button asChild size="lg" className="bg-white text-shop-primary hover:bg-gray-100">
                  <Link to="/products?sale=true">Shop Sale</Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop" 
                  alt="Summer Sale"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link 
              to="/products?new=true" 
              className="flex items-center text-shop-primary hover:underline"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {newArrivals.map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-8" />
            <CarouselNext className="mr-8" />
          </Carousel>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-shop-light">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link 
              to="/products?bestseller=true" 
              className="flex items-center text-shop-primary hover:underline"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="product-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-shop-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-shop-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-shop-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-shop-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Customer service</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-shop-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-shop-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-shop-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-shop-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
