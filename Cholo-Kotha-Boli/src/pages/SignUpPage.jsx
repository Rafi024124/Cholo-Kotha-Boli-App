import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, User, Mail, Eye, EyeOff, Loader, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return toast.error("Please enter a valid email address");
    }
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) {
      signup(formData);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-cyan-100 via-purple-200 to-cyan-200">
      {/* Left Panel */}
      <div className="flex flex-col justify-center items-center px-6 py-10 sm:px-12 bg-white bg-opacity-60 backdrop-blur-xl lg:rounded-l-3xl shadow-lg border border-cyan-200">
        <div className="w-full max-w-md space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-3xl bg-gradient-to-tr from-purple-200 to-cyan-300 flex items-center justify-center shadow-md shadow-cyan-500/40">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-cyan-900 drop-shadow-sm">
              Create Account
            </h1>
            <p className="text-cyan-700 tracking-wide text-base">
              Get started with your free account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Group Template */}
            {[
              {
                id: "fullName",
                type: "text",
                icon: <User className="w-5 h-5" />,
                placeholder: "Full Name",
                value: formData.fullName,
              },
              {
                id: "email",
                type: "email",
                icon: <Mail className="w-5 h-5" />,
                placeholder: "Email",
                value: formData.email,
              },
            ].map(({ id, type, icon, placeholder, value }) => (
              <div className="relative" key={id}>
                <span className="absolute left-4 top-4 text-cyan-600">
                  {icon}
                </span>
                <input
                  id={id}
                  name={id}
                  type={type}
                  value={value}
                  onChange={(e) =>
                    setFormData({ ...formData, [id]: e.target.value })
                  }
                  placeholder={placeholder}
                  className="w-full h-14 px-12 pt-4 text-base text-cyan-900 bg-transparent border border-cyan-300 rounded-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                />
              </div>
            ))}

            {/* Password Field */}
            <div className="relative">
              <span className="absolute left-4 top-4 text-cyan-600">
                <Lock className="w-5 h-5" />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Password"
                className="w-full h-14 px-12 pt-4 text-base text-cyan-900 bg-transparent border border-cyan-300 rounded-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
              <span
                className="absolute right-4 top-4 text-cyan-600 cursor-pointer hover:text-cyan-700 transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSigningUp}
              className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-300 via-purple-200 to-cyan-300 hover:from-cyan-400 hover:to-purple-300 text-cyan-900 font-semibold shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSigningUp ? (
                <Loader className="w-6 h-6 animate-spin" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* Bottom Link */}
          <p className="text-center text-cyan-700 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-500 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Graphic Panel */}
      <AuthImagePattern
        title="Join our Community"
        subtitle="Connect with friends, share moments, and stay in touch with you"
      />
    </div>
  );
};

export default SignUpPage;
