import React, { useState } from "react";
import "./Regester.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);
const Regester = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [wrong, setWrong] = useState();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handelButton = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    if (password !== confirmPassword) {
      setWrong("password is not match");
      return;
    }
  };
  const handelLogin = () => {
    navigate("/login");
  };

  if (user || user1) {
    navigate("/home");
  }
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
          <label htmlFor="password">Confirm Password</label>
          <input
            onBlur={handelConfirmPassword}
            type="password"
            placeholder="Password"
            id="password"
          />

          <button>Regester</button>
          <button onClick={handelLogin}>Please Login</button>
          <p>{wrong}</p>
          <div className="social">
            <div className="go">
              <i className="fab fa-google"></i>{" "}
              <button onClick={() => signInWithGoogle()}>Google</button>
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

export default Regester;
