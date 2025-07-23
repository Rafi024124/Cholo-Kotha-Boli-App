import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-100 via-purple-100 to-cyan-200 overflow-hidden font-sans">

      {/* Animated glowing background blobs */}
      <div className="absolute w-96 h-96 top-[-20%] left-[-20%] rounded-full bg-gradient-to-tr from-purple-300 to-cyan-200 opacity-30 blur-3xl animate-pulse" />
      <div className="absolute w-80 h-80 bottom-[-10%] right-[-10%] rounded-full bg-gradient-to-br from-pink-200 to-indigo-200 opacity-30 blur-2xl animate-pulse delay-1000" />
      <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 opacity-10 rounded-full blur-3xl animate-pulse delay-1500" />

      {/* Glassmorphic content card */}
      <div className="relative z-10 bg-white bg-opacity-60 backdrop-blur-xl border border-white/30 rounded-3xl p-10 max-w-lg text-center shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent tracking-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-cyan-700 text-lg md:text-xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
