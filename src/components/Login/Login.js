import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  return (
    <Card>
      <h3>Login</h3>
      <p>Email</p>
      <input></input>
      <p>Password</p>
      <input></input>
      <Button>Submit</Button>
    </Card>
  )
}



export default Login;