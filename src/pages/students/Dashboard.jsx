import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Enrolled Courses", value: 5 },
    { title: "Pending Assignments", value: 3 },
    { title: "Completed Courses", value: 8 },
  ];
  return (
    <div className="space-y-8">
      <div id="welcomeCard" className="bg-gray-800  p-4 rounded-lg space-y-4">
        <h1 className="text-center text-3xl font-bold text-rose-500">
          Welcome, Shashikant
        </h1>
        {stats.map((item) => (
          <p className="text-md font-semibold text-teal-200">
            {item.title} : {item.value}
          </p>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-rose-500">Recent Courses</h1>

      <div
        id="recent-courses"
        className="bg-emerald-300 text-black rounded-lg flex gap-4 items-center p-4"
      >
        <div className="bg-amber-300 p-8 rounded-lg">React</div>
        <div className="bg-amber-300 p-8 rounded-lg">Java</div>
        <div className="bg-amber-300 p-8 rounded-lg">DBMS</div>
      </div>
      <h1 className="text-3xl font-bold text-rose-500">Recent Assignmnent</h1>

      <div
        id="recent-assignment"
        className="bg-pink-400 text-black rounded-lg flex gap-4 items-center p-4"
      >
        <div className="bg-white p-8 rounded-lg">React Assignment</div>
        <div className="bg-white p-8 rounded-lg">Java Assignment</div>
        <div className="bg-white p-8 rounded-lg">DBMS Assignment</div>
      </div>
    </div>
  );
};

export default Dashboard;
