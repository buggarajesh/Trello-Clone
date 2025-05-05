import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-20 h-8  text-white font-bold flex items-center justify-center transition"
        onClick={() => setOpen(!open)}
      >
        My Profile
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-zinc-900 text-white rounded-lg shadow-lg z-50 text-sm">
          {/* Account Section */}
          <div className="px-4 py-3 border-b border-zinc-700">
            <p className="font-semibold">ACCOUNT</p>
            <p className="mt-1 font-medium">Rajesh Bugga</p>
            <p className="text-gray-400 text-xs">buggarajesh0@gmail.com</p>
            <button className="text-blue-500 hover:underline text-xs mt-2">Manage account</button>
          </div>

          {/* Trello Section */}
          <div className="px-4 py-3 border-b border-zinc-700 space-y-2">
            <p className="font-semibold">TRELLO</p>
            <ul className="space-y-1">
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Profile and visibility</li>
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Activity</li>
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Cards</li>
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Settings</li>
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Theme</li>
            </ul>
          </div>

          {/* Others */}
          <div className="px-4 py-3 space-y-2">
            <ul className="space-y-1">
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Create Workspace</li>
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Help</li>
              <li className="hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer">Shortcuts</li>
              <li
                onClick={handleLogout}
                className="hover:bg-red-600 bg-red-500 text-white px-2 py-1 rounded cursor-pointer mt-1"
              >
                Log out
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
