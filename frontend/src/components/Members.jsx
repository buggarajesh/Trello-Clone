import React, { useState } from "react";

const Members = () => {
  const [activeTab, setActiveTab] = useState("members");

  const membersList = [
    {
      name: "Rajesh Bugga",
      username: "@buggarajesh0",
      lastActive: "Last active April 2025",
      avatar: "RB",
    },
  ];

  return (
    <div className="flex bg-[#1d2125] text-white min-h-screen w-full">
      <div className="flex flex-col w-full px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Collaborators (1)</h1>
          <button className="bg-[#579dff] hover:bg-[#85b8ff] text-black px-4 py-2 rounded text-sm font-medium">
            👥 Invite Workspace members
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 border-b border-[#a6c5e229]">
          {["members", "guests", "requests"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm px-4 py-2 rounded-t-md ${
                activeTab === tab
                  ? "bg-[#22272b] text-white font-semibold"
                  : "text-[#b6c2cf] hover:text-white"
              }`}
            >
              {tab === "members" && "Workspace members (1)"}
              {tab === "guests" && "Guests (0)"}
              {tab === "requests" && "Join requests (0)"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "members" && (
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-white font-medium mb-2">
                Workspace members (1)
              </h2>
              <p className="text-sm text-[#b6c2cf]">
                Workspace members can view and join all Workspace visible boards
                and create new boards in the Workspace. Adding new members will
                automatically update your billing.
              </p>
            </div>

            {/* Invite Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-white font-medium mb-2">
                Invite members to join you
              </h2>
              <p className="text-sm text-[#b6c2cf] mb-4">
                Anyone with an invite link can join this paid Workspace. You’ll
                be billed for each member that joins. You can also disable and
                create a new invite link for this Workspace at any time.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Filter by name"
                  className="bg-[#22272b] border border-[#a6c5e229] px-3 py-2 rounded w-full text-sm text-white"
                />
              </div>
              {/* Member Entry */}
              <div className="bg-[#22272b] rounded p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center">
                    {membersList[0].avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {membersList[0].name}
                    </div>
                    <div className="text-xs text-[#b6c2cf]">
                      {membersList[0].username} • {membersList[0].lastActive}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-[#2c3e50] text-sm px-3 py-1 rounded hover:bg-[#3a4a5a]">
                    View boards (1)
                  </button>
                  <select className="bg-[#2c3e50] text-sm px-2 py-1 rounded">
                    <option>Admin</option>
                    <option>Normal</option>
                  </select>
                  <button className="bg-[#2c3e50] text-sm px-3 py-1 rounded hover:bg-[#3a4a5a]">
                    Leave...
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "guests" && (
          <div className="text-sm text-[#b6c2cf] mt-4">
            No guests have been added to this workspace.
          </div>
        )}

        {activeTab === "requests" && (
          <div className="text-sm text-[#b6c2cf] mt-4">
            No join requests at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
