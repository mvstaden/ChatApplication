import "./Login.css";

import assets from "../../assets/assets";
import { useState } from "react";

import { signup, login } from "../../config/firebase";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (currState === "Sign up") {
      signup(userName, email, passowrd);
    } else {
      login(email, passowrd);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          onChange={(e) => setPassowrd(e.target.value)}
          value={passowrd}
          type="password"
          placeholder="Password"
          required
          className="form-input"
        />
        <button type="submit">
          {currState === "Sign up" ? "Create Account" : "Sign in"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account?
              <span onClick={() => setCurrState("Login")}> Login Here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account?
              <span onClick={() => setCurrState("Sign up")}> Sign up Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
