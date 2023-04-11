import React, { useState } from "react";
import logo from "../assets/logo.png";
import login from "../assets/login.jpg";
import right_arrow_angle from "../assets/right-arrow-angle.png";
import SignupScreen from "./SignupScreen";
import "../style/loginScreen.scss";


const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="LoginScreen">
      <div className="loginscreen_bg">
        <img
          className="loginBackgroundImage"
          src={login}
          centre
          no-repeat
          alt="login screen"
        />
        <div className="loginscreen_gradient" />
        <button
          className="loginscreen_button"
          onClick={() => {
            setSignIn(true);
          }}
        >
          Sign In
        </button>
        <img className="loginscreen_logo" src={logo} alt="" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited Movies, Tv </h1>
            <h1 className="bottomh1"> Shows and more...</h1>
            <h2>Watch Anywhere. Cancel at any time. </h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.{" "}
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => {
                    setSignIn(true);
                  }}
                >
                  GET STARTED
                  <img
                    src={right_arrow_angle}
                    style={{
                      height: "20px",
                      position: "relative",
                      width: "20px",
                      bottom: "-4px",
                      // marginTop: "10px",
                      // display:"flex",
                      // // justifyContent:"center",
                      // alignItems:"center",
                    }}
                    alt=""
                  />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
