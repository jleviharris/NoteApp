import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/myNotes">
      <button>My Notes</button>
    </Link>
  );
};

export default NavBar;
