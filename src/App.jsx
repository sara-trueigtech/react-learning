import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./routing/About";
import Home from "./routing/Home";
import Services from "./routing/Services";
import router from "./routing/cbr.jsx";
import ThemeButton from "./context API/ThemeContext/ThemeButton.jsx";

function App() {
  return (
    <>
    <ThemeButton/>
    </>
  );
}

export default App;
