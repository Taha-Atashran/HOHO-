import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header className="bg-gray-800 p-4">
          <nav className="flex space-x-4">
            <NavLink
              exact="true"
              to="/"
              //   className={({ isActive }) =>
              //     isActive ? "relative text-red-500" : "text-white"
              //   }
              className={`${({ isActive }) =>
                isActive ? "relative text-red-500" : "text-white"} text-red-600`}
            >
              ff
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "relative text-red-500" : "text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "relative text-red-500" : "text-white"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "relative text-red-500" : "text-white"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "relative text-red-500" : "text-white"
              }
            >
              Blog
            </NavLink>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
