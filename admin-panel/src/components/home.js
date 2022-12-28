import React from "react";
import { useGlobalContext } from "../store/UserContext";
import Card from "./card";
import classes from "./home.module.css";

const Home = () => {
  const { user } = useGlobalContext();
  return (
    <Card className={classes.home}>
      <h1>
        Welcome {user.firstname} {user.lastname}!
      </h1>
    </Card>
  );
};

export default Home;
