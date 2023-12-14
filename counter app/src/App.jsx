import React, { useState, useEffect, useRef } from 'react';

const CounterApp = () => {
  // useState Hook to manage the counter value
  const [counter, setCounter] = useState(0);

  // useEffect Hook to update the document title with the counter value
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]); // useEffect will re-run whenever the counter changes

  // useRef Hook to access the DOM button element
  const buttonRef = useRef(null);

  // Increment function
  const increment = () => {
    setCounter(counter + 1);
  };

  // Decrement function
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      {/* Display the counter value */}
      <h1>Counter: {counter}</h1>

      {/* Button to increment the counter */}
      <button onClick={increment} ref={buttonRef}>
        Increment
      </button>

      {/* Button to decrement the counter */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;
