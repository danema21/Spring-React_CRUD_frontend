import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialList from "./components/TutorialList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navBar-brand">
          Logo
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div> 
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialList/>} />
          <Route path="/tutorials" element={<TutorialList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
