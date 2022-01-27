import "./Register.css";

const Register = () => {
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
          <div className="registerBox">
            <input
              placeholder="Username"
              type="text"
              className="registerInput"
              required
            />
            <input
              placeholder="Email"
              type="email"
              className="registerInput"
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
              required
            />
            <input
              placeholder="Password Again"
              type="password"
              className="registerInput"
              required
            />
            <button className="registerButton">Sign Up</button>
            <button className="registerLoginButton">
              Already Have and Account? Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
