import React, { useState } from "react";

export const Count = () => {
  const [num, setnum] = useState(0);
  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setnum(num - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setnum(num + 5);
        }}
      >
        Dump by 5
      </button>
    </div>
  );
};
