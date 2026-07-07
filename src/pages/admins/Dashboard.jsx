import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Student", value: 320 },
    { title: "PTotal Course", value: 25 },
    { title: "pending Approval", value: 8 },
  ];
  const recentStudents = [
    { id: 1, name: "Akash" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Abhay" },
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
        {recentStudents.map((student) => (
          <div className="bg-amber-300 p-8 rounded-lg" key={student.id}>
            {student.name}
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-rose-500">Recent Courses</h1>

      <div
        id="recent-courses"
        className="bg-pink-400 text-black rounded-lg flex gap-4 items-center p-4"
      >
        {recentCourse.map((course) => (
          <div key={course.id} className="bg-white p-8 rounded-lg">
            {course.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
