import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../store/UserContext";
import classes from "./navbar.module.css";

const Navbar = () => {
  const { user, logoutHandler } = useGlobalContext();

  const buttons = user ? (
    <>
      <Link to="/user">
        <button>User</button>
      </Link>
      <button onClick={logoutHandler}>Logout</button>
    </>
  ) : (
    <Link to="/register">
      <button>Register</button>
    </Link>
  );
  return (
    <div className={classes.navbar}>
      <h2 className={classes.heading}>Admin Panel</h2>
      <div className={classes.buttons}>{buttons}</div>
    </div>
  );
};

export default Navbar;
