import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routing/About";
import Home from "./routing/Home";
import Services from "./routing/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
