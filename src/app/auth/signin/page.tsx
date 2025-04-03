"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  // Password validation function
  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  // Handle input changes
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: "" }));
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // This would be replaced with your actual authentication API call
      const success = await mockAuthenticationService(email, password);

      if (success) {
        toast.success("Sign in successful", {
          description: "Welcome back!",
        });
        // Redirect to dashboard or home page after successful login
        router.push("/dashboard");
      } else {
        toast.error("Authentication failed", {
          description: "Invalid email or password. Please try again.",
        });
      }
    } catch (error) {
      toast.error("Sign in failed", {
        description: "An error occurred during sign in. Please try again.",
      });
      console.error("Sign in error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock authentication service (replace with your actual auth service)
  const mockAuthenticationService = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For demo purposes: accept any @gmail.com address with password longer than 6 chars
    return email.endsWith("@gmail.com") && password.length >= 6;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link href="/" className="inline-block">
              <div className="text-xl font-semibold px-4 py-2 border rounded-full">
                Crextio
              </div>
            </Link>
          </div>
          <CardTitle className="text-2xl text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="john.doe@example.com"
                className={`rounded-full h-12 ${
                  errors.email ? "border-red-500" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary underline underline-offset-4"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••••••••••"
                  className={`rounded-full h-12 pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
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
              className="w-full rounded-full h-12 bg-amber-300 hover:bg-amber-400 text-black mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex items-center gap-4 py-4 w-full">
            <div className="h-px bg-border flex-1"></div>
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <Button
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
                  d="M17.05 20.28c-.98.95-2.05 1.67-3.24 2.17-1.24.53-2.68.55-4.08.55-1.1 0-2.21-.39-3.23-.8-1.14-.46-2.13-1.17-2.96-2.07C1.64 18.11 1 15.47 1 12.8c0-1.37.15-2.83.78-4.05.6-1.17 1.48-2.15 2.47-2.98 1.14-.95 2.51-1.52 3.95-1.75C9.81 3.73 11.5 4 13.1 4.75c.92.43 1.78 1.05 2.45 1.85.64.77 1.1 1.73 1.1 2.8c0 1.04-.39 2.03-1.11 2.77-.7.71-1.7 1.08-2.65 1.08-1.38 0-2.72-.94-2.95-2.36-.03-.26-.04-.46.08-.7.13-.25.36-.42.63-.5.3-.09.63-.04.91.12.28.17.47.44.54.76.09.41.37.64.78.64.36 0 .69-.22.84-.56.17-.36.17-.8.01-1.16-.51-1.09-1.66-1.74-2.8-1.74-1.12 0-2.28.59-2.96 1.52-.31.42-.51.91-.51 1.42 0 .82.46 1.6 1.1 2.07.65.48 1.5.72 2.3.72.79 0 1.57-.24 2.23-.72.68-.49 1.18-1.27 1.18-2.07"
                  fill="currentColor"
                />
              </svg>
              Apple
            </Button>
            <Button
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

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-primary underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
