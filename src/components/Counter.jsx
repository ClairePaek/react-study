import React, { useState } from 'react';

export default function Counter({ totalCount, onClick }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <span className="number">
        {count} / {totalCount}
      </span>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
