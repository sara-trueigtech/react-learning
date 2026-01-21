import { useState } from "react";
import Admin from "./Admin";
import "./App.css";
import Login from "./Login";
import MyButton from "./MyButton";
import RenderingLists from "./RenderingLists";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1 className="name">sara</h1>
      <MyButton count = {count} onClick = {handleClick} />
      <MyButton count = {count} onClick = {handleClick} />
      {/* <RenderingLists/> */}
    </>
  );
}

export default App;
