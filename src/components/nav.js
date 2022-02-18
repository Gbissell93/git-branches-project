import React from "react";
import { Link } from "react-router-dom";
function nav() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default nav;
