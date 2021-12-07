import React from "react";
import "./navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navigation">
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
    );
  }
}
