import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Student", value: 320 },
    { title: "PTotal Course", value: 25 },
    { title: "pending Approval", value: 8 },
  ];
  return (
    <div className="space-y-8">
      <div id="welcomeCard" className="bg-gray-800  p-4 rounded-lg space-y-4">
        <h1 className="text-center text-3xl font-bold text-rose-500">
          Welcome, Admin
        </h1>
        {stats.map((item) => (
          <p className="text-md font-semibold text-teal-200">
            {item.title} : {item.value}
          </p>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-rose-500">Recent Students</h1>
      <div
        id="recent-student"
        className="bg-emerald-300 text-black rounded-lg flex gap-4 items-center p-4"
      >
        <div className="bg-amber-300 p-8 rounded-lg">Aman</div>
        <div className="bg-amber-300 p-8 rounded-lg">Raj</div>
        <div className="bg-amber-300 p-8 rounded-lg">Shiv</div>
      </div>
      <h1 className="text-3xl font-bold text-rose-500">Recent Courses</h1>

      <div
        id="recent-courses"
        className="bg-pink-400 text-black rounded-lg flex gap-4 items-center p-4"
      >
        <div className="bg-white p-8 rounded-lg">React</div>
        <div className="bg-white p-8 rounded-lg">Java</div>
        <div className="bg-white p-8 rounded-lg">DBMS</div>
      </div>
    </div>
  );
};

export default Dashboard;
