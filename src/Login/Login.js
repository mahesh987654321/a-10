import React, { useState } from "react";
import "./Login.css";
import { getAuth } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import app from "../firebase.init";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);
const Login = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelButton = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();
  const handelRegester = () => {
    navigate("/regester");
  };
  return (
    <div>
      <div className="all">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form onSubmit={handelButton}>
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input
            onBlur={handelEmail}
            type="text"
            placeholder="Email or Phone"
            id="username"
          />

          <label htmlFor="password">Password</label>
          <input
            onBlur={handelPassword}
            type="password"
            placeholder="Password"
            id="password"
          />

          <button>Log In</button>
          <button onClick={handelRegester}>Create Another Account</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google"></i> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
