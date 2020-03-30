import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo-text">
          Budgetify
        </Link>
      </div>
      <div className="navbar">
        <Link to="/login" className="navbar-link">
          Log in
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign up
        </Link>
      </div>
    </div>
  );
};
