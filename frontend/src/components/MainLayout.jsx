import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default MainLayout;
