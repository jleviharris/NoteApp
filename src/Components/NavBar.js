import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/myNotes">
        <button>My Notes</button>
      </Link>
      <Link to="/userPage">
        <button>My Account</button>
      </Link>
    </div>
  );
};

export default NavBar;
