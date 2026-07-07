import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Enrolled Courses", value: 5 },
    { title: "Pending Assignments", value: 3 },
    { title: "Completed Courses", value: 8 },
  ];
  const recentAssignments = [
    { id: 1, name: "DBMS" },
    { id: 2, name: "JAVA" },
    { id: 3, name: "DSA" },
  ];

  const recentCourse = [
    { id: 1, name: "JAVA" },
    { id: 2, name: "DBMS" },
    { id: 3, name: "React" },
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
        {recentCourse.map((course) => (
          <div key={course.id} className="bg-amber-300 p-8 rounded-lg">
            {course.name}
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-rose-500">Recent Assignmnent</h1>

      <div
        id="recent-assignment"
        className="bg-pink-400 text-black rounded-lg flex gap-4 items-center p-4"
      >
        {recentAssignments.map((assignment) => (
          <div key={assignment.id} className="bg-white p-8 rounded-lg">
            {assignment.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
