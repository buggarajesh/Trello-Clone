// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Login from './components/Login';
// import Signup from './components/Signup';
// import InnerNavbar from './components/InnerNavbar';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/innernavbar' element={<InnerNavbar />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Login from './components/Login';
// import Signup from './components/Signup';
// import InnerNavbar from './components/InnerNavbar';
// //import { useEffect } from 'react';
// import Boards from './components/Boards';
// //import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import Templates from './components/Templates';

// const AppLayout = () => {
//   const location = useLocation();
//   const hideNavbarRoutes = ['/dashboard, /innernavbar', "/boards", "templates"];// Add routes where Navbar should be hidden

//   return (
//     <>
//       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/innernavbar" element={<InnerNavbar />} />
//         {/* <Route path="sidebar" element={<Sidebar />} /> */}
//         <Route path="/boards" element={<Boards />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/templates" element={<Templates />} />
//       </Routes>
//     </>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Boards from './components/Boards';
import Templates from './components/Templates';
import Members from './components/Members';
import HomePage from './components/HomePage';
import Settings from './components/Settings';
import Billing from './components/Billing';
import Inbox from './components/Inbox';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/members" element={<Members />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/inbox" element={<Inbox />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



