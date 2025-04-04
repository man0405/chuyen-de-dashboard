"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UserService } from "@/utils/services/UserService";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  // Validation functions
  const validatename = (name: string) => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 3)
      return "Full name must be at least 3 characters";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const validatephone = (phone: string) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
    return "";
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all inputs
    const nameError = validatename(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const phoneError = validatephone(formData.phone);

    // Update errors state
    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      phone: phoneError,
    });

    // If any errors, stop submission
    if (nameError || emailError || passwordError || phoneError) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Mock signup service
      const success = await mockSignupService(formData);

      if (success) {
        toast.success("Account created successfully", {
          description: "Welcome to Crextio!",
        });
        // Redirect to dashboard or signin page
        router.push("/dashboard");
      } else {
        toast.error("Signup failed", {
          description: "This email may already be registered.",
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
      console.error("Signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock signup service
  const mockSignupService = async (data: typeof formData) => {
    // Simulate API call delay
    const user = UserService.create(data);
    console.log("User created:", user);
    if (!user) return false;

    return true;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl border shadow-lg flex">
        {/* Left side - Sign up form */}
        <div className="w-full md:w-2/5 p-8 md:p-12 bg-muted/20">
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <div className="text-xl font-semibold px-4 py-2 border rounded-full">
                Crextio
              </div>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium">Create an account</h1>
              <p className="text-muted-foreground">
                Sign up and get 30 day free trial
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className={`rounded-full h-12 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className={`rounded-full h-12 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm">
                  Phone number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1234567890"
                  className={`rounded-full h-12 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    className={`rounded-full h-12 pr-10 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    disabled={isSubmitting}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full rounded-full h-12 bg-amber-300 hover:bg-amber-400 text-black"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </Button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-px bg-border flex-1"></div>
                <span className="text-xs text-muted-foreground">or</span>
                <div className="h-px bg-border flex-1"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full h-12"
                  disabled={isSubmitting}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="mr-2"
                  >
                    <path
                      d="M17.05 20.28c-.98.95-2.05 1.67-3.24 2.17-1.24.53-2.68.55-4.08.55-1.1 0-2.21-.39-3.23-.8-1.14-.46-2.13-1.17-2.96-2.07C1.64 18.11 1 15.47 1 12.8c0-1.37.15-2.83.78-4.05.6-1.17 1.48-2.15 2.47-2.98 1.14-.95 2.51-1.52 3.95-1.75C9.81 3.73 11.5 4 13.1 4.75c.92.43 1.78 1.05 2.45 1.85.64.77 1.1 1.73 1.1 2.8 0 1.04-.39 2.03-1.11 2.77-.7.71-1.7 1.08-2.65 1.08-1.38 0-2.72-.94-2.95-2.36-.03-.26-.04-.46.08-.7.13-.25.36-.42.63-.5.3-.09.63-.04.91.12.28.17.47.44.54.76.09.41.37.64.78.64.36 0 .69-.22.84-.56.17-.36.17-.8.01-1.16-.51-1.09-1.66-1.74-2.8-1.74-1.12 0-2.28.59-2.96 1.52-.31.42-.51.91-.51 1.42 0 .82.46 1.6 1.1 2.07.65.48 1.5.72 2.3.72.79 0 1.57-.24 2.23-.72.68-.49 1.18-1.27 1.18-2.07"
                      fill="currentColor"
                    />
                  </svg>
                  Apple
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full h-12"
                  disabled={isSubmitting}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="mr-2"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
              </div>
            </form>

            <div className="text-sm text-center mt-8">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Have any account?</span>
                <Link
                  href="/signin"
                  className="text-primary underline underline-offset-4"
                >
                  Sign in
                </Link>
              </div>
              <div className="mt-4 text-right">
                <Link
                  href="/terms"
                  className="text-primary underline underline-offset-4"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Preview */}
        <div className="hidden md:block md:w-3/5 relative">
          <button className="absolute top-4 right-4 p-2 rounded-full bg-background/80 z-10">
            <X className="h-4 w-4" />
          </button>

          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-10"></div>
            <div className="relative z-20 h-full flex items-center justify-center p-8">
              <div className="w-full max-w-md">
                {/* Calendar and task cards */}
                <div className="relative">
                  {/* Task Review Card */}
                  <div className="absolute -top-32 right-0 bg-amber-300 rounded-xl p-3 shadow-lg w-64">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Task Review With Team</h3>
                      <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                    </div>
                    <p className="text-sm text-amber-800">09:30am-10:00am</p>
                  </div>

                  {/* Small time indicator */}
                  <div className="absolute -top-16 right-24 bg-black/70 text-white rounded-lg px-3 py-1 text-xs">
                    09:30am-10:00am
                  </div>

                  {/* Calendar */}
                  <div className="mt-48 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                    <div className="grid grid-cols-7 gap-2 text-center">
                      <div className="text-xs">Sun</div>
                      <div className="text-xs">Mon</div>
                      <div className="text-xs">Tue</div>
                      <div className="text-xs">Wed</div>
                      <div className="text-xs">Thu</div>
                      <div className="text-xs">Fri</div>
                      <div className="text-xs">Sat</div>

                      <div className="p-2">22</div>
                      <div className="p-2">23</div>
                      <div className="p-2">24</div>
                      <div className="p-2 bg-white/20 rounded-full">25</div>
                      <div className="p-2">26</div>
                      <div className="p-2">27</div>
                      <div className="p-2">28</div>
                    </div>
                  </div>

                  {/* Daily Meeting Card */}
                  <div className="mt-4 bg-white rounded-xl p-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800">
                        Daily Meeting
                      </h3>
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    </div>
                    <p className="text-sm text-gray-600">12:00pm-01:00pm</p>

                    <div className="flex -space-x-2 mt-2">
                      <Avatar className="border-2 border-white w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-white w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>U2</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-white w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>U3</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-white w-8 h-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>U4</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
