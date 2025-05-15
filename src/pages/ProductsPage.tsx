import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  X, 
  ChevronDown, 
  StarIcon,
  SlidersHorizontal 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';
import { Product, ProductCategory } from '@/types/product';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortOption, setSortOption] = useState('newest');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [onlyNewArrivals, setOnlyNewArrivals] = useState(false);
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);

  // Set initial filters from URL params
  useEffect(() => {
    const category = searchParams.get('category') as ProductCategory || 'all';
    setSelectedCategory(category);
    
    if (searchParams.get('featured') === 'true') {
      setOnlyFeatured(true);
    }
    
    if (searchParams.get('new') === 'true') {
      setOnlyNewArrivals(true);
    }
    
    if (searchParams.get('bestseller') === 'true') {
      setOnlyBestSellers(true);
    }

    const minPrice = Number(searchParams.get('minPrice')) || 0;
    const maxPrice = Number(searchParams.get('maxPrice')) || 1500;
    setPriceRange([minPrice, maxPrice]);
    
    const rating = Number(searchParams.get('rating')) || 0;
    setSelectedRating(rating);
    
    const sort = searchParams.get('sort') || 'newest';
    setSortOption(sort);
    
    const inStock = searchParams.get('inStock') === 'true';
    setOnlyInStock(inStock);
  }, [searchParams]);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Price range filter
    filtered = filtered.filter(product => {
      const price = product.discountedPrice || product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter(product => product.rating >= selectedRating);
    }
    
    // In stock filter
    if (onlyInStock) {
      filtered = filtered.filter(product => product.inStock);
    }
    
    // Special filters
    if (onlyFeatured) {
      filtered = filtered.filter(product => product.featured);
    }
    
    if (onlyNewArrivals) {
      filtered = filtered.filter(product => product.new);
    }
    
    if (onlyBestSellers) {
      filtered = filtered.filter(product => product.bestSeller);
    }
    
    // Sort products
    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => {
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filtered.sort((a, b) => {
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceB - priceA;
        });
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For demo purposes, we'll just keep the existing order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [
    selectedCategory, 
    priceRange, 
    selectedRating, 
    sortOption, 
    onlyInStock,
    onlyFeatured,
    onlyNewArrivals,
    onlyBestSellers
  ]);

  // Update URL with filters
  const updateFilters = () => {
    const params = new URLSearchParams();
    
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }
    
    if (priceRange[0] > 0) {
      params.set('minPrice', priceRange[0].toString());
    }
    
    if (priceRange[1] < 1500) {
      params.set('maxPrice', priceRange[1].toString());
    }
    
    if (selectedRating > 0) {
      params.set('rating', selectedRating.toString());
    }
    
    if (sortOption !== 'newest') {
      params.set('sort', sortOption);
    }
    
    if (onlyInStock) {
      params.set('inStock', 'true');
    }
    
    if (onlyFeatured) {
      params.set('featured', 'true');
    }
    
    if (onlyNewArrivals) {
      params.set('new', 'true');
    }
    
    if (onlyBestSellers) {
      params.set('bestseller', 'true');
    }
    
    setSearchParams(params);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 1500]);
    setSelectedRating(0);
    setSortOption('newest');
    setOnlyInStock(false);
    setOnlyFeatured(false);
    setOnlyNewArrivals(false);
    setOnlyBestSellers(false);
    setSearchParams({});
  };

  // Apply filters
  const applyFilters = () => {
    updateFilters();
    setIsFilterOpen(false);
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>
      
      {/* Mobile filter button */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <Button 
          variant="outline" 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2"
        >
          <Filter size={16} />
          Filters
        </Button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort:</span>
          <Select value={sortOption} onValueChange={(value) => {
            setSortOption(value);
            updateFilters();
          }}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white p-5 rounded-lg shadow-sm sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center">
                <SlidersHorizontal size={18} className="mr-2" />
                Filters
              </h3>
              <Button 
                variant="ghost" 
                onClick={resetFilters} 
                className="text-sm text-gray-500 hover:text-shop-primary"
              >
                Reset all
              </Button>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="space-y-1">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox 
                      id={`category-${category.id}`}
                      checked={selectedCategory === category.id}
                      onCheckedChange={() => {
                        setSelectedCategory(category.id as ProductCategory);
                        updateFilters();
                      }}
                    />
                    <label 
                      htmlFor={`category-${category.id}`}
                      className="ml-2 text-sm cursor-pointer"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price Range</h4>
              <Slider
                defaultValue={priceRange}
                min={0}
                max={1500}
                step={10}
                onValueChange={(value) => {
                  setPriceRange(value as number[]);
                  updateFilters();
                }}
                className="my-4"
              />
              <div className="flex items-center justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            {/* Rating */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Rating</h4>
              <div className="space-y-1">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <Checkbox 
                      id={`rating-${rating}`}
                      checked={selectedRating === rating}
                      onCheckedChange={() => {
                        setSelectedRating(selectedRating === rating ? 0 : rating);
                        updateFilters();
                      }}
                    />
                    <label 
                      htmlFor={`rating-${rating}`}
                      className="ml-2 text-sm cursor-pointer flex items-center"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          size={14}
                          className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-1">& Up</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Availability</h4>
              <div className="flex items-center">
                <Checkbox 
                  id="in-stock"
                  checked={onlyInStock}
                  onCheckedChange={(checked) => {
                    setOnlyInStock(checked === true);
                    updateFilters();
                  }}
                />
                <label 
                  htmlFor="in-stock"
                  className="ml-2 text-sm cursor-pointer"
                >
                  In Stock Only
                </label>
              </div>
            </div>
            
            {/* Special Filters */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Special</h4>
              <div className="space-y-1">
                <div className="flex items-center">
                  <Checkbox 
                    id="featured"
                    checked={onlyFeatured}
                    onCheckedChange={(checked) => {
                      setOnlyFeatured(checked === true);
                      updateFilters();
                    }}
                  />
                  <label 
                    htmlFor="featured"
                    className="ml-2 text-sm cursor-pointer"
                  >
                    Featured
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="new-arrivals"
                    checked={onlyNewArrivals}
                    onCheckedChange={(checked) => {
                      setOnlyNewArrivals(checked === true);
                      updateFilters();
                    }}
                  />
                  <label 
                    htmlFor="new-arrivals"
                    className="ml-2 text-sm cursor-pointer"
                  >
                    New Arrivals
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="best-sellers"
                    checked={onlyBestSellers}
                    onCheckedChange={(checked) => {
                      setOnlyBestSellers(checked === true);
                      updateFilters();
                    }}
                  />
                  <label 
                    htmlFor="best-sellers"
                    className="ml-2 text-sm cursor-pointer"
                  >
                    Best Sellers
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile filter menu */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white p-5 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Filters</h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setIsFilterOpen(false)}
                  size="icon"
                >
                  <X size={20} />
                </Button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Categories</h4>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox 
                        id={`mobile-category-${category.id}`}
                        checked={selectedCategory === category.id}
                        onCheckedChange={() => {
                          setSelectedCategory(category.id as ProductCategory);
                        }}
                      />
                      <label 
                        htmlFor={`mobile-category-${category.id}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={1500}
                  step={10}
                  onValueChange={(value) => setPriceRange(value as number[])}
                  className="my-4"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Rating</h4>
                <div className="space-y-1">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox 
                        id={`mobile-rating-${rating}`}
                        checked={selectedRating === rating}
                        onCheckedChange={() => {
                          setSelectedRating(selectedRating === rating ? 0 : rating);
                        }}
                      />
                      <label 
                        htmlFor={`mobile-rating-${rating}`}
                        className="ml-2 text-sm cursor-pointer flex items-center"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon
                            key={i}
                            size={14}
                            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-1">& Up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Availability */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Availability</h4>
                <div className="flex items-center">
                  <Checkbox 
                    id="mobile-in-stock"
                    checked={onlyInStock}
                    onCheckedChange={(checked) => {
                      setOnlyInStock(checked === true);
                    }}
                  />
                  <label 
                    htmlFor="mobile-in-stock"
                    className="ml-2 text-sm cursor-pointer"
                  >
                    In Stock Only
                  </label>
                </div>
              </div>
              
              {/* Special Filters */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Special</h4>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <Checkbox 
                      id="mobile-featured"
                      checked={onlyFeatured}
                      onCheckedChange={(checked) => {
                        setOnlyFeatured(checked === true);
                      }}
                    />
                    <label 
                      htmlFor="mobile-featured"
                      className="ml-2 text-sm cursor-pointer"
                    >
                      Featured
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="mobile-new-arrivals"
                      checked={onlyNewArrivals}
                      onCheckedChange={(checked) => {
                        setOnlyNewArrivals(checked === true);
                      }}
                    />
                    <label 
                      htmlFor="mobile-new-arrivals"
                      className="ml-2 text-sm cursor-pointer"
                    >
                      New Arrivals
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="mobile-best-sellers"
                      checked={onlyBestSellers}
                      onCheckedChange={(checked) => {
                        setOnlyBestSellers(checked === true);
                      }}
                    />
                    <label 
                      htmlFor="mobile-best-sellers"
                      className="ml-2 text-sm cursor-pointer"
                    >
                      Best Sellers
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="w-1/2" 
                  onClick={resetFilters}
                >
                  Reset
                </Button>
                <Button 
                  className="w-1/2 bg-shop-primary hover:bg-blue-600" 
                  onClick={applyFilters}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Products */}
        <div className="flex-1">
          {/* Desktop Sort and Results count */}
          <div className="hidden md:flex justify-between items-center mb-6">
            <span className="text-sm text-gray-600">
              Showing {filteredProducts.length} products
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortOption} onValueChange={(value) => {
                setSortOption(value);
                updateFilters();
              }}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Active filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {selectedCategory !== 'all' && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                Category: {categories.find(c => c.id === selectedCategory)?.name}
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    updateFilters();
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 1500) && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                Price: ${priceRange[0]} - ${priceRange[1]}
                <button 
                  onClick={() => {
                    setPriceRange([0, 1500]);
                    updateFilters();
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {selectedRating > 0 && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                Rating: {selectedRating}+ Stars
                <button 
                  onClick={() => {
                    setSelectedRating(0);
                    updateFilters();
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {onlyInStock && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                In Stock Only
                <button 
                  onClick={() => {
                    setOnlyInStock(false);
                    updateFilters();
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {onlyFeatured && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                Featured
                <button 
                  onClick={() => {
                    setOnlyFeatured(false);
                    updateFilters();
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {onlyNewArrivals && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                New Arrivals
                <button 
                  onClick={() => {
                    setOnlyNewArrivals(false);
                    updateFilters();
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {onlyBestSellers && (
              <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                Best Sellers
                <button 
                  onClick={() => {
                    setOnlyBestSellers(false);
                    updateFilters();
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
          
          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to find what you're looking for.
              </p>
              <Button onClick={resetFilters} className="bg-shop-primary hover:bg-blue-600">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
