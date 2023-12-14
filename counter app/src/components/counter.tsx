import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>The counted value is: {counter}</h1>
      <div>{counter}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
