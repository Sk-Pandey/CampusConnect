import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Topbar />
      <div className="flex items-center">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
