import React from "react";

const Sidebar = () => {
  return (
    <>
      <header className="p-2">
        <nav className="flex flex-col h-[100vh] justify-around text-xl font-semibold font-serif p-4 list-none">
          <li>Dashboard</li>
          <li>Courses</li>
          <li>Assignments</li>
          <li>Students</li>
          <li>Anlytics</li>
          <li>Profile</li>
          <li>Settings</li>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
