import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import InnerNavbar from "./InnerNavbar";

const templateCards = [
  {
    title: "Basic Board",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqsDDeqlfuXNT6PpH04pnFhUKEnxSQCrleA&s",
  },
  {
    title: "Kanban Template",
    image: "https://embed-ssl.wistia.com/deliveries/d5ae8190f0aa7dfbe0b01f336f29d44094b967b5.webp?image_crop_resized=1280x720",
  },
  {
    title: "Daily Task Management Template | Trello",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRdSr98HGfNc-NFmmLXDDDD16Ey3usgAJDRS5INKKuFr0bqYHtqXzCsVlo3zd5Y2ScWQ&usqp=CAU",
  },
  {
    title: "Remote Team Hub",
    image: "https://c0.wallpaperflare.com/preview/851/32/900/israel-tel-aviv-yafo-building-office.jpg",
  },
];

const recentlyViewed = [
    {
      title: "Basic Board",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtml_JcgLUWFK5EXNMpQokQjiy0DfpvU8FzbcCBTB1xFbDAV-g4YXh-8gxOsjTVeEYQK8&usqp=CAU",
    },
    {
      title: "My Trello board",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREURhzevr74QMiqcvd9KdQcYnPB4U3Mu4wNUChgcQ_yUvWC5haQB0xGFvd__YE0LuYrxU&usqp=CAU"
    },
  ];

const Boards = () => {
  const navigate = useNavigate();

  const handleTemplateClick = () => {
    navigate("/inbox");
  };

  return (
    <div className="flex">
      <div className="flex-1 p-4 text-white bg-[#1d2125] min-h-screen">
        <div className="bg-[#1d2125] text-white min-h-screen px-6 py-4">
          {/* Most Popular Templates */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-1">📋 Most popular templates</h2>
            <p className="text-sm text-[#b6c2cf] mb-4">
              Get going faster with a template from the Trello community or
            </p>
            <select className="bg-[#22272b] text-sm border border-[#a6c5e229] px-3 py-2 rounded mb-6 w-full max-w-xs focus:outline-none">
              <option value="">choose a category</option>
              <option value="popular">Popular</option>
              <option value="small business">Small Business</option>
              <option value="design">Design</option>
              <option value="education">Education</option>
              <option value="marketing">Marketing</option>
              <option value="human resources">Human Resources</option>
              <option value="productivity">Productivity</option>
            </select>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {templateCards.map((card, index) => (
                <div
                  key={index}
                  onClick={handleTemplateClick}
                  className="cursor-pointer bg-[#2c2e33] rounded overflow-hidden shadow hover:shadow-lg transition duration-200"
                >
                  <img src={card.image} alt={card.title} className="w-full h-28 object-cover" />
                  <div className="p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{card.title}</span>
                      <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded">TEMPLATE</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="text-[#579dff] hover:underline text-sm">
              Browse the full template gallery
            </a>
          </div>

          {/* Recently Viewed */}
          <div className="mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">🕒 Recently viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentlyViewed.map((board, index) => (
            <div
              key={index}
              className="bg-[#2c2e33] rounded overflow-hidden shadow hover:shadow-lg transition duration-200"
            >
              <img src={board.image} alt={board.title} className="w-full h-28 object-cover" />
              <div className="p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{board.title}</span>
                  {board.title === "Basic Board" && (
                    <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded">TEMPLATE</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Workspaces */}
      <div className="mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">🧩 YOUR WORKSPACES</h2>
        <div className="flex items-center gap-3">
          <div className="bg-green-800 rounded text-black font-bold w-8 h-8 flex items-center justify-center">T</div>
          <span className="text-sm font-medium">Trello Workspace</span>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="bg-[#2c2e33] text-white text-sm px-3 py-1.5 rounded hover:bg-[#3a3d42]">
            🗂 Boards
          </button>
          <button className="bg-[#2c2e33] text-white text-sm px-3 py-1.5 rounded hover:bg-[#3a3d42]">
            👥 Members
          </button>
          <button className="bg-[#2c2e33] text-white text-sm px-3 py-1.5 rounded hover:bg-[#3a3d42]">
            ⚙️ Settings
          </button>
          </div>
        </div>
          {/* ... keep rest unchanged ... */}
        </div>
      </div>
    </div>
  );
};

export default Boards;
