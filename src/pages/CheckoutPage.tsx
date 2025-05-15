
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { toast } from "sonner";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/context/CartContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  postalCode: z.string().min(5, 'Zip code is required'),
  country: z.string().min(2, 'Country is required'),
  paymentMethod: z.enum(['credit', 'paypal', 'crypto']),
  notes: z.string().optional(),
  saveInfo: z.boolean().default(false),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const CheckoutPage: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [orderProcessing, setOrderProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const shipping = cart.length > 0 ? 10 : 0;
  const tax = subtotal * 0.10;
  const orderTotal = subtotal + shipping + tax;

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'United States',
      paymentMethod: 'credit',
      notes: '',
      saveInfo: false,
    },
  });
  
  // Handle form submission
  const onSubmit = (values: CheckoutFormValues) => {
    console.log('Form values:', values);
    setOrderProcessing(true);
    
    // Simulate order processing with timeout
    setTimeout(() => {
      setOrderProcessing(false);
      toast.success("Order placed successfully!");
      clearCart();
      navigate('/checkout/success');
    }, 1500);
  };
  
  // Navigate to next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container-custom py-8">
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <div className="flex items-center">
              <div 
                className={`flex items-center justify-center rounded-full w-8 h-8 ${
                  currentStep >= 1 ? 'bg-shop-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {currentStep > 1 ? <Check size={16} /> : 1}
              </div>
              <div className={`h-1 w-12 ${currentStep >= 2 ? 'bg-shop-primary' : 'bg-gray-200'}`}></div>
              <div 
                className={`flex items-center justify-center rounded-full w-8 h-8 ${
                  currentStep >= 2 ? 'bg-shop-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {currentStep > 2 ? <Check size={16} /> : 2}
              </div>
              <div className={`h-1 w-12 ${currentStep >= 3 ? 'bg-shop-primary' : 'bg-gray-200'}`}></div>
              <div 
                className={`flex items-center justify-center rounded-full w-8 h-8 ${
                  currentStep >= 3 ? 'bg-shop-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                3
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(123) 456-7890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Street Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main Street" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="New York" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State / Province</FormLabel>
                              <FormControl>
                                <Input placeholder="NY" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postal / Zip Code</FormLabel>
                              <FormControl>
                                <Input placeholder="10001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="United States" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Order Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Special delivery instructions or notes" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button 
                        variant="outline"
                        asChild
                      >
                        <Link to="/cart">Back to Cart</Link>
                      </Button>
                      <Button 
                        type="button" 
                        className="bg-shop-primary hover:bg-blue-600"
                        onClick={() => {
                          form.trigger([
                            'firstName', 
                            'lastName', 
                            'email', 
                            'phone', 
                            'address', 
                            'city', 
                            'state', 
                            'postalCode', 
                            'country'
                          ]).then(isValid => {
                            if (isValid) nextStep();
                          });
                        }}
                      >
                        Continue to Payment
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-4"
                              >
                                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                                  <RadioGroupItem value="credit" id="payment-credit" />
                                  <FormLabel htmlFor="payment-credit" className="flex-1 cursor-pointer">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium">Credit / Debit Card</span>
                                      <div className="flex space-x-1">
                                        <img src="https://via.placeholder.com/40x25" alt="Visa" />
                                        <img src="https://via.placeholder.com/40x25" alt="Mastercard" />
                                        <img src="https://via.placeholder.com/40x25" alt="Amex" />
                                      </div>
                                    </div>
                                  </FormLabel>
                                </div>

                                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                                  <RadioGroupItem value="paypal" id="payment-paypal" />
                                  <FormLabel htmlFor="payment-paypal" className="flex-1 cursor-pointer">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium">PayPal</span>
                                      <div>
                                        <img src="https://via.placeholder.com/60x25" alt="PayPal" />
                                      </div>
                                    </div>
                                  </FormLabel>
                                </div>

                                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                                  <RadioGroupItem value="crypto" id="payment-crypto" />
                                  <FormLabel htmlFor="payment-crypto" className="flex-1 cursor-pointer">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium">Cryptocurrency</span>
                                      <div>
                                        <img src="https://via.placeholder.com/60x25" alt="Crypto" />
                                      </div>
                                    </div>
                                  </FormLabel>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Credit Card Fields (show conditionally) */}
                      {form.watch('paymentMethod') === 'credit' && (
                        <div className="space-y-4 pt-4">
                          <div>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input placeholder="1234 5678 9012 3456" />
                            </FormControl>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <FormLabel>Expiration Date</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/YY" />
                              </FormControl>
                            </div>
                            <div>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input placeholder="123" />
                              </FormControl>
                            </div>
                          </div>
                          <div>
                            <FormLabel>Name on Card</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" />
                            </FormControl>
                          </div>
                        </div>
                      )}

                      {/* PayPal info */}
                      {form.watch('paymentMethod') === 'paypal' && (
                        <div className="text-center p-4 text-gray-600 border rounded-lg mt-4">
                          <p>You will be redirected to PayPal to complete your payment.</p>
                        </div>
                      )}

                      {/* Crypto info */}
                      {form.watch('paymentMethod') === 'crypto' && (
                        <div className="text-center p-4 text-gray-600 border rounded-lg mt-4">
                          <p>You will receive payment instructions for cryptocurrency.</p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button 
                        variant="outline"
                        type="button"
                        onClick={prevStep}
                      >
                        Back to Shipping
                      </Button>
                      <Button 
                        type="button" 
                        className="bg-shop-primary hover:bg-blue-600"
                        onClick={() => {
                          form.trigger(['paymentMethod']).then(isValid => {
                            if (isValid) nextStep();
                          });
                        }}
                      >
                        Review Order
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {/* Step 3: Order Review */}
              {currentStep === 3 && (
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Review</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Shipping Information */}
                      <div className="space-y-2">
                        <h3 className="font-medium">Shipping Address</h3>
                        <div className="text-gray-600">
                          <p>{form.getValues('firstName')} {form.getValues('lastName')}</p>
                          <p>{form.getValues('address')}</p>
                          <p>{form.getValues('city')}, {form.getValues('state')} {form.getValues('postalCode')}</p>
                          <p>{form.getValues('country')}</p>
                          <p>{form.getValues('phone')}</p>
                          <p>{form.getValues('email')}</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      {/* Payment Method */}
                      <div className="space-y-2">
                        <h3 className="font-medium">Payment Method</h3>
                        <div className="text-gray-600">
                          {form.getValues('paymentMethod') === 'credit' && (
                            <p>Credit / Debit Card</p>
                          )}
                          {form.getValues('paymentMethod') === 'paypal' && (
                            <p>PayPal</p>
                          )}
                          {form.getValues('paymentMethod') === 'crypto' && (
                            <p>Cryptocurrency</p>
                          )}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      {/* Order Summary */}
                      <div className="space-y-4">
                        <h3 className="font-medium">Order Summary</h3>
                        
                        <div className="divide-y">
                          {cart.map((item) => (
                            <div key={item.id} className="flex py-3">
                              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                                <img
                                  src={item.images[0]}
                                  alt={item.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-1 flex-col">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.name}</h3>
                                  <p className="ml-4">${((item.discountedPrice || item.price) * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-2 pt-4">
                          <div className="flex justify-between text-sm">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-medium">${subtotal.toFixed(2)}</p>
                          </div>
                          <div className="flex justify-between text-sm">
                            <p className="text-gray-600">Shipping</p>
                            <p className="font-medium">${shipping.toFixed(2)}</p>
                          </div>
                          <div className="flex justify-between text-sm">
                            <p className="text-gray-600">Tax</p>
                            <p className="font-medium">${tax.toFixed(2)}</p>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg font-bold">
                            <p>Total</p>
                            <p>${orderTotal.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button 
                        variant="outline"
                        type="button"
                        onClick={prevStep}
                      >
                        Back to Payment
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-shop-primary hover:bg-blue-600"
                        disabled={orderProcessing}
                      >
                        {orderProcessing ? 'Processing...' : 'Place Order'}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
