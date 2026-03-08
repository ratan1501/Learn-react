import React, { useState } from "react";


export const Marks = () => {
  const [marks, setMarks] = useState([89, 42, 53, 8, 11, 94]);

  function graceStudent() {
    const newMarks = marks.map(function (elem) {
      if (elem > 95) {
        return elem;
      } else {
        return elem + 5;
      }
    });
    setMarks(newMarks);
  }
  return (
    <div>
      {marks.map(function (elem, idx) {
        return (
          <h1 key={idx}>
            Student {idx + 1} = {elem} ({elem > 33 ? "PASS" : "FAIL"})
          </h1>
        );
      })}
      <button
        onClick={graceStudent}
        className="mt-4 px-6 py-2 rounded-xl bg-indigo-500 text-white font-medium shadow-md 
  hover:bg-indigo-600 hover:scale-105 active:scale-95 transform transition-all duration-200"
      >
        Give them grace
      </button>
    </div>
  );
};
