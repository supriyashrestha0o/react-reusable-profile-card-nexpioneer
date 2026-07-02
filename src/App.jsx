import React from "react";
import Mentors from "./pages/Mentors";
import Students from "./pages/Students";
import Alumni from "./pages/Alumni";
import './App.css';
import Instructors from "./pages/Instructors";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="hero__logo">NexPioneer</p>
        <h1>One card. Every person.</h1>
        <p className="hero__subtitle">
          Mentors, students, alumni, and instructors .
        </p>
      </header>

      <Mentors />
      <Students />
      <Alumni />
      <Instructors />

      <footer className="footer">
        <p>Built with one component, reused everywhere. — NexPioneer</p>
      </footer>
    </div>
  );
}

export default App;