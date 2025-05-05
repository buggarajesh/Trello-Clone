import React from 'react'
import InnerNavbar from './InnerNavbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Boards from './Boards';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1d2125] text-white">
      {/* <InnerNavbar /> */}
      <Boards/>
      {/* <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div> */}
    </div>
  )
}

export default Dashboard
