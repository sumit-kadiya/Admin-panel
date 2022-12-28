import React, { useState } from "react";
import { useGlobalContext } from "../store/UserContext";
import { Link } from "react-router-dom";
import Card from "./card";
import classes from "./form.module.css";

const Form = () => {
  const { setState } = useGlobalContext();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const FormDataSetHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormIsValid(formData.email.includes("@"));
  };

  const formStep = () => {
    if (formIsValid) {
      alert("Form Submitted");
      const MainFormData = {
        ...formData,
      };
      setState((prevData) => {
        return [MainFormData, ...prevData];
      });
      console.log(MainFormData);

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      placeholder: "Phone No.",
      errorMessage: "It should be a valid Phone number",
      label: "Phone No.",
      required: true,
    },

    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      label: "Confirm Password",
      pattern: formData.password,
      required: true,
    },
  ];

  return (
    <Card className={classes.formcon}>
      <div className={classes.form}>
        {
          <div className={classes.formInput}>
            <h1 className={classes.header}>Personal Information</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                onChange={FormDataSetHandler}
              />
            ))}
          </div>
        }
      </div>

      <div className={classes.footer}>
        <button onClick={formStep} type="button" disabled={!formIsValid}>
          Submit
        </button>
        <Link to="/">Already User ? Login here</Link>
      </div>
    </Card>
  );
};

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={classes.formInput}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Form;
