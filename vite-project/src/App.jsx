import { useState } from 'react';

const Counter = () => {
  // Initializing state with 0
  const [count, setCount] = useState(0);

  // Function to increase the counter
  const increase = () => {
    setCount(count + 1);
  };

  // Function to decrease the counter
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={increase}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={decrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
