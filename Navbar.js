import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="position">
      <li>
            <a href="/">ArseBlog</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/line-up">Line-up</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;