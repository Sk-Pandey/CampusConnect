import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  const savedData = localStorage.getItem("user");
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
