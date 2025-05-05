// components/Sidebar.jsx
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  ClipboardList,
  Home,
  Users,
  Settings,
  CreditCard,
  ChevronDown,
  ChevronRight,
  User,
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const [workspaceOpen, setWorkspaceOpen] = useState(true);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  }

  return (
    <aside className="bg-[#1D2125] text-white w-64 min-h-full p-4 space-y-6 hidden md:block">
      {/* Top Logo */}
      <div className="flex items-center space-x-2">
        <LayoutGrid className="w-5 h-5" />
        <span className="font-semibold">Trello</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <Link
          to="/boards"
          className="flex items-center space-x-2 w-full p-2 bg-[#2C2E32] rounded-md text-white"
        >
          <ClipboardList className="w-4 h-4" />
          <span>Boards</span>
        </Link>

        <Link
          to="/templates"
          className="flex items-center space-x-2 p-2 hover:bg-[#2C2E32] rounded-md"
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Templates</span>
        </Link>

        <Link
          to="/home"
          className="flex items-center space-x-2 p-2 hover:bg-[#2C2E32] rounded-md"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </nav>

      {/* Workspaces */}
      <div>
        <p className="text-sm text-gray-400 mb-1">Workspaces</p>
        <div className="space-y-2">
          <div
            className="flex items-center justify-between p-2 hover:bg-[#2C2E32] rounded-md cursor-pointer"
            onClick={() => setWorkspaceOpen(!workspaceOpen)}
          >
            <div className="flex items-center space-x-2">
              <div className="bg-green-800 text-sm w-6 h-6 rounded-sm flex items-center justify-center font-bold">
                T
              </div>
              <span>Trello Workspace</span>
            </div>
            {workspaceOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </div>

          {workspaceOpen && (
            <div className="pl-8 space-y-1 text-sm text-gray-300">
              <Link
                to="/boards"
                className="flex items-center space-x-2 hover:text-white py-1 px-1"
              >
                <ClipboardList className="w-4 h-4" />
                <span>Boards</span>
              </Link>
             
              <Link 
                to="/members" 
                className="flex items-center space-x-2 hover:text-white hover:bg-[#22272b] text-white py-1 px-1">
                <Users className='w-4 h-4' />
                <span>Members</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center space-x-2 hover:text-white hover:bg-[#22272b] text-white py-1 px-1"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Link>
              <Link
                to="/billing"
                className="flex items-center space-x-2 hover:text-white hover:bg-[#22272b] text-white w-full py-1 px-1 text-left rounded"
              >
                <CreditCard className="w-4 h-4" />
                <span>Billing</span>
              </Link>
              <button
                onClick={handleHome}
                className="flex items-center space-x-2 hover:text-white hover:bg-[#22272b] text-white w-full py-1 px-1 text-left rounded"
              >
                <User className="w-4 h-4" />
                <span>Logout</span>
              </button>

            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
