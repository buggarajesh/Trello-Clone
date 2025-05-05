import React from "react";
import { ChevronDown, Star, Share2, MoreHorizontal } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#002c4b] text-white flex flex-wrap items-center justify-between px-4 py-2 shadow-md sticky top-0 z-50">
      {/* Left Section - Board Info */}
      <div className="flex items-center space-x-3">
        <h1 className="text-lg font-semibold">Basic Board</h1>
        <span className="bg-[#1a4469] text-sm px-2 py-1 rounded">Template</span>
        <div className="flex items-center bg-[#1a4469] px-2 py-1 rounded text-sm cursor-pointer hover:bg-[#2567a0] transition">
          <span>Workspace visible</span>
          <ChevronDown size={16} className="ml-1" />
        </div>
      </div>

      {/* Right Section - Actions & Members */}
      <div className="flex items-center space-x-3 mt-2 md:mt-0">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {["DO", "JH", "ZS", "CC"].map((initials, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center ring-2 ring-white"
            >
              {initials}
            </div>
          ))}
        </div>

        {/* Icons */}
        <Star className="cursor-pointer hover:text-yellow-300" />
        <Share2 className="cursor-pointer hover:text-blue-300" />
        <MoreHorizontal className="cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
};

export default Navbar;
