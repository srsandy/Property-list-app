import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/task1">Task1</Link>
          </li>
          <li>
            <Link to="/task2">Task2</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </div>
    </Router>
  );
}
