import React, { useState } from "react";
import classes from "./styles/form.module.css";
import classes2 from "./styles/personInfo.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleUserData } from "../store/user-Slice";

const Form = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    institute: "",
    percentage: "",
    course: "",
    start: "",
    end: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const FormDataSetHandler = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    setFormIsValid(formData.email.includes("@"));
  };
  const formStep = (e) => {
    if (page === 1 && formIsValid) {
      e.preventDefault();
      alert("Form Submitted");
      const MainFormData = {
        ...formData,
        id: Math.random().toString(),
      };

      dispatch(handleUserData(MainFormData));
      console.log(MainFormData);

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        institute: "",
        percentage: "",
        course: "",
        start: "",
        end: "",
      });
    } else {
      setPage((cur) => cur + 1);
    }
  };
  const PrevStep = () => {
    setPage((cur) => cur - 1);
  };

  return (
    <div>
      <div className={classes.form}>
        {page === 0 && (
          <div className={classes2.formInput}>
            <h1 className={classes.header}>Personal Information</h1>
            <label htmlFor="fname">First Name</label>
            <input
              placeholder="First Name"
              type="text"
              id="fname"
              name="firstname"
              value={formData.firstname}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="lname">Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              id="lname"
              name="lastname"
              value={formData.lastname}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="email">E-mail Name</label>
            <input
              placeholder="E-mail"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="email">Phone No.</label>
            <input
              placeholder="Phone No."
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="pwd">Password</label>
            <input
              placeholder="Password"
              type="password"
              id="pwd"
              name="password"
              value={formData.password}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="conpass">Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              id="conpass"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={FormDataSetHandler}
            />
          </div>
        )}
      </div>
      <div className={classes.form}>
        {page === 1 && (
          <div className={classes2.formInput}>
            <h1 className={classes.header}>Educational Information</h1>
            <label htmlFor="institute">Institute/College</label>
            <input
              placeholder="Institute/College"
              type="text"
              id="institute"
              name="institute"
              value={formData.institute}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="percentage">Percentage</label>
            <label htmlFor="percentage">
              (CGPA to Percentage conversion : (CGPA + 0.5) * 10)
            </label>
            <input
              placeholder="Percentage/CGPA"
              type="text"
              id="percentage"
              name="percentage"
              value={formData.percentage}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="course">Course</label>
            <input
              placeholder="Course"
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="start">Start Date</label>
            <input
              type="date"
              id="start"
              name="start"
              value={formData.start}
              onChange={FormDataSetHandler}
            />
            <label htmlFor="end">End Date</label>
            <input
              type="date"
              id="end"
              name="end"
              value={formData.end}
              onChange={FormDataSetHandler}
            />
          </div>
        )}
      </div>
      <div className={classes.footer}>
        <button
          onClick={PrevStep}
          type="button"
          className={page === 1 ? "" : classes.prev}
        >
          {page === 0 ? "" : "Prev"}
        </button>
        <button onClick={formStep} type="button" disabled={!formIsValid}>
          {page === 0 ? "Next" : "Submit"}
        </button>
        <Link to="/">Already User ? Login here</Link>
      </div>
    </div>
  );
};

export default Form;
