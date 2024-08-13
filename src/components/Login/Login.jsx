import React from "react";
import "./Login.css";

const Login = ({ setShowLoginPage }) => {
  const loginScaleDown = [
    { transform: "translateX(-50%) scale(1)" },
    { transform: "translateX(-50%) scale(0)" },
  ];
  const Timing = {
    duration: 1000,
    iterations: 1,
  };
  const handleMinimize = () => {
    const value = document.querySelector(".login-main-container");
    value.animate(loginScaleDown, Timing);
    setTimeout(() => {
      setShowLoginPage(false);
    }, 800);
  };
  return (
    <div>
      <div
        className="login-fullscreen-container"
        onClick={handleMinimize}
      ></div>
      <div className="login-main-container">
        <div className="login-title">
          <h1 className="login-header">LOGIN</h1>
        </div>
        <div className="login-input-container">
          <div className="login-username-container">
            <label className="login-username-label">Username:</label>
            <input
              className="login-username-input"
              type="text"
              name="username"
              placeholder="Enter Username"
            />
          </div>
          <div className="login-password-container">
            <label className="login-password-label">Password:</label>
            <input
              className="login-password-input"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="login-button-container">
            <button className="login-button" type="button" name="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
