import "./Register.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      password.current.setCustomValidity("Passwords Don't Match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">SociallY</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on SociallY.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              type="text"
              className="registerInput"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="registerInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
              ref={password}
              minLength={6}
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              className="registerInput"
              ref={passwordAgain}
              minLength={6}
              required
            />
            <button className="registerButton">Sign Up</button>
          </form>
          <Link to="/login">
            <button className="registerLoginButton">
              Already Have and Account? Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
