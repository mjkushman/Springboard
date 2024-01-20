import React, { useState } from "react";

// define the hook
const useCounter = () => {
  const [count, setCount] = useState(0);
// detail what the hook does
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
// return the state and the functions
  return [count, onIncrease, onDecrease];
};

// import the hook. Normally this would go in another file
const CounterHooks = () => {
  const [count, onIncrease, onDecrease] = useCounter();

  return (
    <div>
      <div>Current count: {count}</div>
      <div>
        {/* assign the hook functions to whatever we want, like buttons */}
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default CounterHooks;
