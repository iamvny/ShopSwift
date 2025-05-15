
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
  specs?: Record<string, string>;
}

export type ProductCategory = 
  | 'electronics'
  | 'clothing'
  | 'accessories'
  | 'home'
  | 'beauty'
  | 'sports'
  | 'toys'
  | 'all';

export interface FilterOptions {
  category: ProductCategory;
  minPrice: number;
  maxPrice: number;
  rating: number;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
