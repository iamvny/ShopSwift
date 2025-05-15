
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define form schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const signupSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

interface SignInPageProps {
  initialTab?: 'signin' | 'signup';
}

const SignInPage = ({ initialTab = 'signin' }: SignInPageProps) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    // Update active tab if initialTab prop changes
    setActiveTab(initialTab);
  }, [initialTab]);

  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Signup form
  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  // Handle login submission
  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Signed in successfully!');
      navigate('/');
    }, 1500);
  };

  // Handle signup submission
  const handleSignup = (values: z.infer<typeof signupSchema>) => {
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Account created successfully!');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="bg-white p-8 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          style={{ 
            transformStyle: 'preserve-3d',
            perspective: '1000px' 
          }}
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gradient">Welcome to ShopSwift</h1>
            <p className="text-muted-foreground mt-2">Sign in to continue your shopping experience</p>
          </div>

          <Tabs 
            defaultValue={initialTab} 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-8 w-full bg-gray-100">
              <TabsTrigger 
                value="signin" 
                className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-shop-primary rounded-none"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="signup" 
                className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-shop-primary rounded-none"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* Sign In Form */}
            <TabsContent value="signin" className="mt-0">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-5">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email Address
                        </label>
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="email"
                              type="email"
                              placeholder="name@example.com"
                              className="pl-10 transition-all duration-200 border-gray-200 focus:border-shop-primary rounded-none shadow-sm"
                              {...field}
                            />
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          </div>
                        </FormControl>
                        {loginForm.formState.errors.email && (
                          <p className="text-xs text-red-500 mt-1">{loginForm.formState.errors.email.message}</p>
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="block text-sm font-medium">
                            Password
                          </label>
                          <Link to="/forgot-password" className="text-sm text-shop-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="pl-10 transition-all duration-200 border-gray-200 focus:border-shop-primary rounded-none shadow-sm"
                              {...field}
                            />
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <button 
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                              onClick={() => setShowPassword(!showPassword)}
                              tabIndex={-1}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </FormControl>
                        {loginForm.formState.errors.password && (
                          <p className="text-xs text-red-500 mt-1">{loginForm.formState.errors.password.message}</p>
                        )}
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-shop-primary hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-none shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </span>
                    ) : 'Sign In'}
                  </Button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">or continue with</span>
                    </div>
                  </div>
                
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="w-full border border-gray-200 hover:bg-gray-50 transition-all rounded-none shadow-sm hover:shadow-md">
                      <svg className="w-5 h-5" fill="#4285F4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" className="w-full border border-gray-200 hover:bg-gray-50 transition-all rounded-none shadow-sm hover:shadow-md">
                      <svg className="w-5 h-5" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" className="w-full border border-gray-200 hover:bg-gray-50 transition-all rounded-none shadow-sm hover:shadow-md">
                      <svg className="w-5 h-5" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{' '}
                      <button 
                        type="button" 
                        onClick={() => setActiveTab('signup')} 
                        className="text-shop-primary hover:underline font-medium"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </form>
              </Form>
            </TabsContent>

            {/* Sign Up Form */}
            <TabsContent value="signup" className="mt-0">
              <Form {...signupForm}>
                <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                  <FormField
                    control={signupForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium">
                          Full Name
                        </label>
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="fullName"
                              type="text"
                              placeholder="John Doe"
                              className="pl-10 transition-all duration-200 border-gray-200 focus:border-shop-primary rounded-none shadow-sm"
                              {...field}
                            />
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          </div>
                        </FormControl>
                        {signupForm.formState.errors.fullName && (
                          <p className="text-xs text-red-500 mt-1">{signupForm.formState.errors.fullName.message}</p>
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <label htmlFor="signup-email" className="block text-sm font-medium">
                          Email Address
                        </label>
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="name@example.com"
                              className="pl-10 transition-all duration-200 border-gray-200 focus:border-shop-primary rounded-none shadow-sm"
                              {...field}
                            />
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          </div>
                        </FormControl>
                        {signupForm.formState.errors.email && (
                          <p className="text-xs text-red-500 mt-1">{signupForm.formState.errors.email.message}</p>
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <label htmlFor="signup-password" className="block text-sm font-medium">
                          Password
                        </label>
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="signup-password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="pl-10 transition-all duration-200 border-gray-200 focus:border-shop-primary rounded-none shadow-sm"
                              {...field}
                            />
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <button 
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                              onClick={() => setShowPassword(!showPassword)}
                              tabIndex={-1}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </FormControl>
                        <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
                        {signupForm.formState.errors.password && (
                          <p className="text-xs text-red-500 mt-1">{signupForm.formState.errors.password.message}</p>
                        )}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium">
                          Confirm Password
                        </label>
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="confirmPassword"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="pl-10 transition-all duration-200 border-gray-200 focus:border-shop-primary rounded-none shadow-sm"
                              {...field}
                            />
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          </div>
                        </FormControl>
                        {signupForm.formState.errors.confirmPassword && (
                          <p className="text-xs text-red-500 mt-1">{signupForm.formState.errors.confirmPassword.message}</p>
                        )}
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center mt-4">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="h-4 w-4 border-gray-300 text-shop-primary focus:ring-shop-primary"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-xs text-gray-500">
                      I agree to the <Link to="/terms" className="text-shop-primary hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-shop-primary hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-shop-primary hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-none shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating Account...
                        </span>
                      ) : 'Create Account'}
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{' '}
                      <button 
                        type="button" 
                        onClick={() => setActiveTab('signin')} 
                        className="text-shop-primary hover:underline font-medium"
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInPage;
