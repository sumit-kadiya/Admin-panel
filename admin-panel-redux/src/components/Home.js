import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import classes from "./styles/home.module.css";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Card className={classes.home}>
      <h1>
        Welcome {user.firstname} {user.lastname}!
      </h1>
    </Card>
  );
};

export default Home;
