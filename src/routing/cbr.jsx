import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Layout from "./Layout";
import ErrorElement from "./ErrorElement";
import NotFound from "./NotFound";
import Profile from "./Profile";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login";
import RoleProtectedRoutes from "./RoleProtectedRoutes";
import Admin from "./Admin";
import Unauth from "../Unauth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    errorElement: <ErrorElement />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "services", element: <Services /> },
          {
            element: <RoleProtectedRoutes allowed={["admin"]} />,
            children: [
              {
                path: "admin",
                element: <Admin />,
              },
            ],
          },
        ],
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/unauthorised",
    element: <Unauth />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
