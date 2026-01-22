import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Layout from "./Layout";
import ErrorElement from "./ErrorElement";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorElement/>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
    ],
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);

export default router;
