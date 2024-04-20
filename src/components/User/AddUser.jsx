import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Users from "../../data/Users";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const usernameRef = useRef("");
  const userageRef = useRef("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (+userageRef < 0) {
      return;
    }

    if (!userageRef.current.value || !usernameRef.current.value) {
      return;
    }

    props.onAddUser(
      new Users(usernameRef.current.value, userageRef.current.value)
    );
    userageRef.current.value = "";
    usernameRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModel title="Error" content="there is something wrong!" />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={usernameRef} />
          <label htmlFor="userage">User age (years)</label>
          <input id="userage" type="number" ref={userageRef} />
          <div>
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
