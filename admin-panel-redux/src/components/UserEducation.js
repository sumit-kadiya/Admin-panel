import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import classes from "./styles/table.module.css";

const UserEducation = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Card className={classes.container}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School/Institute</th>
            <th>Course</th>
            <th>Percentage</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.institute}</td>
              <td>{user.course}</td>
              <td>{user.percentage}</td>
              <td>{user.start}</td>
              <td>{user.end}</td>
            </tr>
          }
        </tbody>
      </table>
    </Card>
  );
};

export default UserEducation;
