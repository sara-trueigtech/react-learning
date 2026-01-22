import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
]);

export default router;
