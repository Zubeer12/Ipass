import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright © 2023</p>
        <ul>
          <li>
            <a href="/">News</a>
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
      </div>
    </footer>
  );
}

export default Footer;