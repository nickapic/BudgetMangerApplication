import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../Redux/actions/auth";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const unAuthorizedLinks = (
    <div className="navbar">
      <Link to="/login" className="navbar-link">
        Log in
      </Link>
      <Link to="/signup" className="navbar-link">
        Sign up
      </Link>
    </div>
  );
  const AuthorisedLinks = (
    <div className="navbar">
      <a onClick={logout} href="#!" className="navbar-link">
        Logout{" "}
      </a>
    </div>
  );

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo-text">
          Budgetify
        </Link>
      </div>
      {!loading && (
        <Fragment>
          {isAuthenticated ? AuthorisedLinks : unAuthorizedLinks}
        </Fragment>
      )}
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
