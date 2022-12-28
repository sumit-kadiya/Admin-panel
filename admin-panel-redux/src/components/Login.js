import React, { useState } from "react";
import styles from "./styles/login.module.css";
import Card from "./Card";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/user-Slice";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.data);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const currentUser = state.find((element) => {
      return (
        element.email === enteredEmail && element.password === enteredPassword
      );
    });
    if (currentUser) {
      dispatch(login(currentUser));
      navigate("/home");
    } else {
      alert("invalid User");
    }
  };

  return (
    <Card className={styles.home}>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.formInput}>
          <h1 className={styles.header}>Login</h1>
          <label htmlFor="e-mail">E-Mail</label>
          <input
            type="email"
            id="e-mail"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />

          <div className={styles.links}>
            <Link to="/">Forgot Password ?</Link>
            <Link to="/register">Create an Account</Link>
          </div>
        </div>

        <div className={styles.footer}>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
