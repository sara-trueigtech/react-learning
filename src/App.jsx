import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./routing/About";
import Home from "./routing/Home";
import Services from "./routing/Services";
import router from "./routing/cbr.jsx";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
