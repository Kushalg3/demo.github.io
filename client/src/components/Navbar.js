import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo2.png";
import { UserContext } from "../App";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(UserContext);

  const Render = () => {
    if (state) {
      return (
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"/logout"}>
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/signup"}>
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/login"}>
                  Log In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand ps-2" to={"/"}>
            <img src={logo} alt="logo" className="App-logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Render />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
