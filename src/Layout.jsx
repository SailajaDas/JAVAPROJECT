import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ScrollPage from "./components/scrollButton/ScrollPage";


const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar/>
      <Outlet />
      <ToastContainer/>
      {/* <ScrollPage/> */}
    </div>
  );
};

export default Layout;
