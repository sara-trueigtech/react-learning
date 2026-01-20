import React, { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button>MyButton</button>
      <button onClick={handleClick}>{"count " + count}</button>
    </>
  );
};

export default MyButton;
