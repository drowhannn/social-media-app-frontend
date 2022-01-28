import { useRef } from "react";
import "./Login.css";
import { loginCall } from "../../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { CircularProgress } from "@mui/material";
const Login = () => {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SociallY</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SociallY.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              minLength={6}
              required
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="15px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password</span>
          </form>
          <button className="loginRegisterButton" disabled={isFetching}>
            {isFetching ? (
              <CircularProgress color="inherit" size="15px" />
            ) : (
              "Create a New Account"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
