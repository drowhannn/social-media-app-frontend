import "./Login.css";

const Login = () => {
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
          <div className="loginBox">
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
