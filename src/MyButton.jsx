import React, { useState } from "react";

const MyButton = ({count, onClick}) => {

  return (
    <>
      <button>MyButton</button>
      <button onClick={onClick}>count {count}</button>
    </>
  );
};

export default MyButton;
