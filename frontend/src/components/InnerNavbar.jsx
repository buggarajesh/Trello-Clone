import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsTag } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { FaBullhorn } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown"; // Make sure this path is correct

const InnerNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col bg-[#1d2125] text-white relative">
      {/* Navbar */}
      <nav className="bg-[#1d2125] text-white px-4 py-2 flex items-center justify-between flex-wrap w-full shadow-sm border-b border-[#a6c5e229]">
        {/* Left Section */}
        <div className="flex items-center gap-3 min-w-[150px]">
          <HiViewGrid className="text-gray-400 text-xl" />
          <img
            src="https://cdn.worldvectorlogo.com/logos/trello.svg"
            alt="Trello"
            className="w-6 h-6"
          />
          <span className="font-semibold text-white text-lg hidden sm:inline">Trello</span>
        </div>

        {/* Search & Create Section */}
        <div className="flex-grow max-w-[500px] flex items-center gap-2 mx-4 w-full">
          <div className="flex items-center bg-[#22272b] border border-[#a6c5e229] rounded px-2 py-1 w-full">
            <FiSearch className="text-[#b6c2cf]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-white px-2 w-full focus:outline-none placeholder:text-[#b6c2cf]"
            />
          </div>
          <button className="bg-[#579dff] text-[#1d2125] font-medium text-sm px-4 py-1.5 rounded hover:bg-[#85b8ff] whitespace-nowrap">
            Create
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 min-w-[120px] justify-end relative" ref={dropdownRef}>
          <button className="hover:bg-[#a6c5e229] p-2 rounded">
            <FaBullhorn className="text-[#b6c2cf]" />
          </button>
          <button className="hover:bg-[#a6c5e229] p-2 rounded">
            <BsTag className="text-[#b6c2cf]" />
          </button>
          <button className="hover:bg-[#a6c5e229] p-2 rounded">
            <FaRegQuestionCircle className="text-[#b6c2cf]" />
          </button>

          {/* RB Button triggers dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-[#faa53d] w-8 h-8 flex items-center justify-center text-black font-bold text-sm rounded-full"
            >
              RB
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-12 z-50">
                <ProfileDropdown />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default InnerNavbar;
