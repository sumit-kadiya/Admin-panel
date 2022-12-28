import React from "react";
import classes from "./styles/navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user-Slice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const buttons = user ? (
    <>
      <Link to="/user">
        <button>User</button>
      </Link>
      <Link to="/education">
        <button>Education</button>
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
