import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, Mail, Eye, EyeOff, Loader, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return toast.error("Please enter a valid email address");
    }
    if (!formData.password.trim()) return toast.error("Password is required");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      login(formData);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-cyan-100 via-purple-200 to-cyan-300">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center p-8 sm:p-12 bg-white bg-opacity-60 backdrop-blur-lg rounded-none lg:rounded-l-3xl shadow-md border border-cyan-300">
        <div className="w-full max-w-md space-y-12">
          {/* Header */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-14 h-14 rounded-3xl bg-gradient-to-tr from-purple-200 to-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/80 transition-shadow">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-extrabold text-cyan-900 tracking-wide drop-shadow-md">
                Welcome Back
              </h1>
              <p className="text-cyan-700 text-lg tracking-wide">
                Login to continue your journey
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-14 px-14 text-lg bg-transparent border border-cyan-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-transparent text-cyan-900"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label
                htmlFor="email"
                className="absolute left-14 top-3 text-cyan-600 text-sm transition-all pointer-events-none"
              >
                
              </label>
              <Mail className="absolute left-4 top-4 text-cyan-600 w-6 h-6" />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full h-14 px-14 text-lg bg-transparent border border-cyan-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-transparent text-cyan-900"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <label
                htmlFor="password"
                className="absolute left-14 top-3 text-cyan-600 text-sm transition-all pointer-events-none"
              >
                
              </label>
              <Lock className="absolute left-4 top-4 text-cyan-600 w-6 h-6" />
              <div
                className="absolute right-4 top-4 text-cyan-600 cursor-pointer hover:text-cyan-700 transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-6 h-6" />
                ) : (
                  <Eye className="w-6 h-6" />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-300 via-purple-200 to-cyan-300 hover:from-cyan-400 hover:via-purple-300 hover:to-cyan-400 transition text-cyan-900 font-semibold flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? (
                <Loader className="w-6 h-6 animate-spin" />
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Bottom Link */}
          <div className="text-center text-cyan-700 text-sm tracking-wide">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-400 font-semibold hover:underline hover:text-purple-400 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Graphic */}
      <AuthImagePattern
        title="Welcome Back!"
        subtitle="Sign in and continue your journey"
      />
    </div>
  );
};

export default LoginPage;
