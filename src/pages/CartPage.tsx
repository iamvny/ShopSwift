
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  MinusCircle, 
  PlusCircle, 
  ArrowLeft, 
  ShoppingBag 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    subtotal 
  } = useCart();

  const shipping = cart.length > 0 ? 10 : 0;
  const tax = subtotal * 0.10; // 10% tax rate
  const orderTotal = subtotal + shipping + tax;
  
  if (cart.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <ShoppingBag size={36} className="text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild className="bg-shop-primary hover:bg-blue-600">
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="hidden md:flex border-b pb-4 mb-4 text-gray-600">
              <div className="w-2/5">Product</div>
              <div className="w-1/5 text-center">Price</div>
              <div className="w-1/5 text-center">Quantity</div>
              <div className="w-1/5 text-right">Total</div>
            </div>
            
            {cart.map((item) => (
              <div key={item.id} className="border-b py-4 last:border-b-0 last:pb-0">
                <div className="md:flex md:items-center">
                  {/* Product info - always visible */}
                  <div className="md:w-2/5 flex">
                    <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-4">
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Link 
                        to={`/product/${item.id}`} 
                        className="font-medium hover:text-shop-primary"
                      >
                        {item.name}
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">
                        Category: {item.category}
                      </p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 flex items-center text-sm mt-2 md:hidden"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Mobile view - price, quantity, total */}
                  <div className="flex justify-between items-center mt-4 md:hidden">
                    <div>
                      <div className="text-gray-600 text-sm">Price:</div>
                      <div className="font-medium">
                        ${(item.discountedPrice || item.price).toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Quantity:</div>
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <MinusCircle size={20} />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="mx-2 w-12 text-center border rounded-md py-1"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <PlusCircle size={20} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Total:</div>
                      <div className="font-medium">
                        ${((item.discountedPrice || item.price) * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop view - additional columns */}
                  <div className="hidden md:block md:w-1/5 text-center">
                    ${(item.discountedPrice || item.price).toFixed(2)}
                  </div>
                  <div className="hidden md:block md:w-1/5 text-center">
                    <div className="flex items-center justify-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <MinusCircle size={20} />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="mx-2 w-12 text-center border rounded-md py-1"
                      />
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <PlusCircle size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/5 md:justify-end md:items-center">
                    <div className="font-medium">
                      ${((item.discountedPrice || item.price) * item.quantity).toFixed(2)}
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-gray-400 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Cart actions */}
            <div className="flex justify-between items-center mt-6">
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="text-sm flex items-center gap-1"
              >
                <Trash2 size={14} />
                Clear Cart
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="text-sm flex items-center gap-1"
              >
                <Link to="/products">
                  <ArrowLeft size={14} />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-xl font-bold">${orderTotal.toFixed(2)}</span>
            </div>
            
            {/* Promotion code */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-shop-primary"
                />
                <Button 
                  className="rounded-l-none bg-gray-800 hover:bg-gray-900"
                >
                  Apply
                </Button>
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full bg-shop-primary hover:bg-blue-600" 
              size="lg"
            >
              <Link to="/checkout">
                Checkout
              </Link>
            </Button>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Secure checkout. 100% guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
