import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import Levels from "../pages/Levels";
import Profile from "../pages/Profile";
import TeachersLayout from "../pages/TeachersLayout";
import Students from "../pages/Students";
import Attendis from "../pages/Attendis";
import Subjects from "../pages/Subjects";
import Performance from "../pages/Performance";
import Exams from "../pages/Exams";
import Logout from "../pages/Logout";
import TeacherForm from "../react-query/Forms/TeacherForm";
import Teacher from "../pages/Teacher";
import Courses from "../pages/Courses";
import Announcements from "../pages/Announcements";
import Conversations from "../pages/Conversations";
import Events from "../pages/Events";
import Fees from "../pages/Fees";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "Teachers",
        element: <TeachersLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <Teacher />,
          },
          {
            path: "teacherForm",
            element: <TeacherForm />,
          },
        ],
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "conversations",
        element: <Conversations />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "attendis",
        element: <Attendis />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "levels",
        element: <Levels />,
      },
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "exams",
        element: <Exams />,
      },
      {
        path: "performance",
        element: <Performance />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "fees",
        element: <Fees />,
      },
      {
        path: "Logout",
        element: <Logout />,
      },
    ],
  },
]);
export default router;
