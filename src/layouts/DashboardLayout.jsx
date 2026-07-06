import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Topbar />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
