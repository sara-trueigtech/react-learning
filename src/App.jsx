import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import About from "./routing/About";
import Home from "./routing/Home";
import Services from "./routing/Services";
import router from "./routing/cbr.jsx";
import ThemeButton from "./context API/ThemeContext/ThemeButton.jsx";
import Counter from "./redux/feature/Counter.jsx";
import { useGetTodoQuery } from "./redux/services/api.js";

function App() {
  const {data, error, isLoading} = useGetTodoQuery();
  return (
    <>
    {/* <Counter/> */}
    <div>
      {error ? (
        <p>erro occured</p>)
        : isLoading ? (
          <p>loading...</p>
        ) : data ? (
          <div>
            {data.map((t) => {
              return <h3 key={t.id}>{t.title}</h3>
            })}
          </div>
        ) : null}
    </div>
    </>
  );
}

export default App;
