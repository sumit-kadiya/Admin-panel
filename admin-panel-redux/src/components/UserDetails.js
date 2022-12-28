import React from "react";
import classes from "./styles/table.module.css";
import Card from "./Card";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const user = useSelector((state) => state.user.user);

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
