import React from "react";

const Settings = () => {
  return (
    <div className="bg-[#1d2125] text-white min-h-screen w-full px-6 py-8">
      <h1 className="text-xl font-semibold mb-6">Workspace settings</h1>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#579dff] text-black font-bold rounded w-12 h-12 flex items-center justify-center text-lg">
          T
        </div>
        <div>
          <h2 className="text-lg font-semibold">Trello Workspace</h2>
          <p className="text-sm text-[#b6c2cf]">Premium · Private</p>
        </div>
      </div>

      {/* Atlassian Intelligence */}
      <div className="border-t border-[#a6c5e229] pt-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold">Atlassian Intelligence</h3>
          <span className="bg-[#1d7afc] text-white text-xs px-2 py-0.5 rounded font-medium">
            PREMIUM
          </span>
        </div>
        <p className="text-sm text-[#b6c2cf] mb-2">
          Atlassian Intelligence is <span className="text-green-400">activated</span> for all boards in this Workspace.
          Atlassian Intelligence (AI) is an artificial intelligence tool to help generate, improve, and summarize content while writing on Trello.
        </p>
        <a
          href="#"
          className="text-[#1d7afc] text-smhover:underline hover:underline"
        >
          Learn About Atlassian Intelligence →
        </a>
      </div>

      {/* Visibility Settings */}
      <div className="border-t border-[#a6c5e229] pt-6 space-y-6">
        {/* Workspace Visibility */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="font-medium mb-1">Workspace visibility</h4>
            <p className="text-sm text-[#b6c2cf]">
              🔒 Private – This Workspace is private. It's not indexed or visible to those outside the Workspace.
            </p>
          </div>
          <button className="bg-[#2c3e50] hover:bg-[#3a4a5a] text-sm px-4 py-2 mt-2 md:mt-0 rounded self-start">
            Change
          </button>
        </div>

        {/* Membership Restrictions */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="font-medium mb-1">Workspace membership restrictions</h4>
            <p className="text-sm text-[#b6c2cf]">Anyone can be added to this Workspace.</p>
          </div>
          <button className="bg-[#2c3e50] hover:bg-[#3a4a5a] text-sm px-4 py-2 mt-2 md:mt-0 rounded self-start">
            Change
          </button>
        </div>

        {/* Board Creation Restrictions */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="font-medium mb-1">Board creation restrictions</h4>
            <ul className="text-sm text-[#b6c2cf] list-disc list-inside space-y-1">
              <li>🌏 Any Workspace member can create public boards.</li>
              <li>👤 Any Workspace member can create Workspace visible boards.</li>
              <li>🔒 Any Workspace member can create private boards.</li>
            </ul>
          </div>
          <button className="bg-[#2c3e50] hover:bg-[#3a4a5a] text-sm px-4 py-2 mt-2 md:mt-0 rounded self-start">
            Change
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="font-medium mb-1">Board deletion restrictions</h4>
            <ul className="text-sm text-[#b6c2cf] list-disc list-inside space-y-1">
              <li>🌏 Any Workspace member can create public boards.</li>
              <li>👤 Any Workspace member can create Workspace visible boards.</li>
              <li>🔒 Any Workspace member can create private boards.</li>
            </ul>
          </div>
          <button className="bg-[#2c3e50] hover:bg-[#3a4a5a] text-sm px-4 py-2 mt-2 md:mt-0 rounded self-start">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;


