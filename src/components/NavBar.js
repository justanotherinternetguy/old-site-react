import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="bg-gradient-to-b from-blue-500 to-blue-600">
        <li>
          <Link className="link hvr-underline-from-center text-2xl" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link hvr-underline-from-center text-2xl" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className="link hvr-underline-from-center text-2xl"
            to="/projects"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
