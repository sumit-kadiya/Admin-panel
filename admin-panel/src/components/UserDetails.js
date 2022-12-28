import React from "react";
import classes from "./table.module.css";
import Card from "./card";
import { useGlobalContext } from "../store/UserContext";

const UserDetails = (props) => {
  const { user } = useGlobalContext();
  return (
    <Card className={classes.container}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          }
        </tbody>
      </table>
    </Card>
  );
};

export default UserDetails;
