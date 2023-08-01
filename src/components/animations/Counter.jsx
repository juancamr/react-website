import React, { useState, useEffect } from "react";

const Counter = ({ start, end }) => {
  const [count, setCount] = useState(start);
  const duration = 2000;
  const step = (end - start) / duration;

  useEffect(() => {
    let startTime = null;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newCount = Math.min(start + progress * step, end);

      setCount(newCount);

      if (progress < duration) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [start, end]);

  return <span>{Math.round(count)}</span>;
};

export default Counter;
