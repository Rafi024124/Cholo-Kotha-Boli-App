import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <nav
      className="
        bg-gradient-to-br from-cyan-100 via-purple-100 to-cyan-100
        text-cyan-900
        px-6 py-3
        shadow-md border border-purple-100
        flex justify-between items-center
        relative z-30
      "
    >
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide text-cyan-800 drop-shadow-sm">
        <Link to="/" className="hover:text-cyan-700 transition">
          Cholo-Kotha-Boli
        </Link>
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-4 relative">
        {/* Settings Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hover:text-cyan-700 transition focus:outline-none"
          aria-label="Settings"
          title="Settings"
        >
          <Settings className="w-6 h-6 drop-shadow-sm" />
        </button>

        {/* Dropdown if user exists */}
        {authUser && menuOpen && (
          <div
            className="
              absolute right-0 top-12
              bg-gradient-to-br from-cyan-100 via-purple-200 to-cyan-300
              border border-cyan-400
              rounded-lg p-3 w-44 z-50
              shadow-md text-cyan-900
              backdrop-blur-md
            "
          >
            <Link
              to="/profile"
              className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-cyan-300 hover:text-cyan-900 transition"
              onClick={() => setMenuOpen(false)}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Profile</span>
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false);
                logout();
                 navigate("/"); 
              }}
              className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-cyan-300 hover:text-cyan-900 transition w-full text-left font-medium"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
