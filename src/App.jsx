import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./routing/About";
import Home from "./routing/Home";
import Services from "./routing/Services";
import router from "./routing/cbr.jsx";
import ThemeButton from "./context API/ThemeContext/ThemeButton.jsx";
import Counter from "./redux/feature/Counter.jsx";

function App() {
  return (
    <>
    <Counter/>
    </>
  );
}

export default App;
