
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Package, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const OrderSuccessPage = () => {
  // Generate random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="container-custom py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
          <p className="text-gray-600 mb-4">
            Your order has been received and is now being processed.
          </p>
          <div className="inline-block bg-gray-100 rounded-lg px-4 py-2">
            <span className="text-gray-600 font-medium">Order Number:</span>{' '}
            <span className="font-bold">{orderNumber}</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Order Details</h2>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Shipping Address</h3>
                  <p className="text-gray-600">
                    John Doe<br />
                    123 Main Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Shipping Method</h3>
                  <p className="text-gray-600">Standard Shipping</p>
                  <p className="text-gray-600">Delivery estimate: 3-5 business days</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Payment Method</h3>
                  <p className="text-gray-600">Credit Card ending in •••• 1234</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Order Summary</h3>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>$199.98</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>$10.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>$20.00</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>$229.98</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Order processing steps */}
        <div className="bg-white rounded-lg shadow-sm mb-8 p-6">
          <h2 className="text-lg font-bold mb-4">What's Next?</h2>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-shop-primary text-white flex items-center justify-center">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Order Confirmation</h3>
                <p className="text-gray-600">We've received your order and are processing it.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Order Processing</h3>
                <p className="text-gray-600">Your order is being prepared for shipping.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Shipped</h3>
                <p className="text-gray-600">Your order has been shipped. You'll receive tracking information via email.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                4
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Delivered</h3>
                <p className="text-gray-600">Your order has been delivered. Enjoy your purchase!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <p>
            An order confirmation has been sent to your email address.
          </p>
          <p>
            If you have any questions about your order, please contact our support team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-shop-primary hover:bg-blue-600">
              <Link to="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/account/orders" className="flex items-center">
                View Order Status
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
