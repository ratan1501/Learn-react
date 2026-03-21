import React, { useState } from "react";

const Todo = () => {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteHandler = (idx) => {
    const copy = [...tasks];
    copy.splice(idx, 1);
    setTasks(copy);
  };

  const toggleComplete = (idx) => {
    const copy = [...tasks];
    copy[idx].completed = !copy[idx].completed;
    setTasks(copy);
  };

  return (
    <div className={dark ? "dark" : ""}>

      <div className="min-h-screen bg-amber-50 dark:bg-gray-900 flex items-center justify-center p-6 transition">

        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
              My Todo
            </h1>

            {/* <button
              onClick={() => setDark(!dark)}
              className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg"
            >
              {/* {dark ? "☀ Light" : "🌙 Dark"} */}
            {/* </button> */} 
          </div>

          <form onSubmit={submitHandler} className="flex gap-3 mb-6">

            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="Add a new task..."
            />

            <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-xl transition active:scale-95">
              Add
            </button>

          </form>

          <div className="space-y-3">

            {tasks.map((elem, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-amber-100/60 dark:bg-gray-700 px-4 py-3 rounded-xl hover:bg-amber-100 dark:hover:bg-gray-600 transition"
              >

                <span
                  onClick={() => toggleComplete(idx)}
                  className={`cursor-pointer ${
                    elem.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {elem.text}
                </span>

                <button
                  onClick={() => deleteHandler(idx)}
                  className="text-red-400 hover:text-red-500"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Todo;