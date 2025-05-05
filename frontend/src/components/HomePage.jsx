import React from "react";

const HomePage = () => {
  return (
    <div className="flex bg-[#1d2125] text-white min-h-screen w-full">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full px-4 py-6 gap-6">
        {/* Center Section */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <div className="text-sm text-[#b6c2cf] flex items-center gap-2">
            <span className="text-white font-medium">✓ Your Items</span>
            <span role="img" aria-label="lock">
              🔒
            </span>
          </div>
          <p className="text-[#b6c2cf] text-sm">
            When you're added to a checklist item, it’ll show up here.
          </p>

          {/* Image Card */}
          <div className="bg-[#22272b] border border-[#a6c5e229] rounded-md overflow-hidden shadow-md w-full">
            <img
              src="https://www.atlassian.com/blog/wp-content/uploads/2024/01/2017-04-03_unsplash_cover-1.png"
              alt="Trello Illustration"
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">Stay on track and up to date</h2>
              <p className="text-[#b6c2cf] mt-1 text-sm">
                Invite people to boards and cards, leave comments, add due dates,
                and we'll show the most important activity here.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Recently Viewed */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-[#b6c2cf]">Recently viewed</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="text-sm text-white">Basic Board</span>
                <span className="ml-auto text-xs text-[#b6c2cf] bg-[#a6c5e229] px-2 py-0.5 rounded">
                  Template
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                <div className="flex flex-col">
                  <span className="text-sm text-white">My Trello board</span>
                  <span className="text-xs text-[#b6c2cf]">Trello Workspace</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-[#b6c2cf]">Links</h3>
            <button className="flex items-center gap-2 text-sm text-white bg-[#22272b] border border-[#a6c5e229] px-3 py-2 rounded hover:bg-[#2c3237]">
              <span className="text-lg font-bold">+</span> Create a board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
