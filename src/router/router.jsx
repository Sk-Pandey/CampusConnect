import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";
import Profile from "../pages/shared/Profile";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Students from "../pages/admins/Students";
import Analytics from "../pages/admins/Analytics";
import Settings from "../pages/shared/Settings";
import Assignments from "../pages/students/Assignments";
import CourseDetail from "../pages/shared/CourseDetail";
import DashboardHome from "../pages/shared/DashboardHome";
import CoursesHome from "../pages/shared/CoursesHome";
import ProtectedRoute from "../components/ProtectedRoute";
import ErrorPage from "../pages/public/ErrorPage";
import PublicRoute from "../components/PublicRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "courses",
        element: <CoursesHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "assignments",
        element: <Assignments />,
      },
      {
        path: "coursedetail",
        element: <CourseDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
