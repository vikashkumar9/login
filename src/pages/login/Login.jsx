import React, { useState } from "react";
import "./login.css";
import { LoginSocialFacebook } from "reactjs-social-login";

import { Home } from "../homePage/Home";
import emailicon from "../../assets/emailicon.svg";
import passicon from "../../assets/passicon.svg";
import facebookicon from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import twiter from "../../assets/twiter.svg";
export const Login = () => {
  const [profile, setProfile] = useState(null);
  return !profile ? (
    <div className="container">
      <div className="login-container">
        <img src="logo192.png" alt="Profile" className="profile_image" />

        <p className="login_name">Login</p>
        <p className="login_details">Enter your login details</p>
        <div className="inputs-fields">
          <div className="email">
            <img src={emailicon} alt="emailicon" />
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="password">
            <img src={passicon} alt="password" />
            <input type="password" placeholder="Enter password" />
          </div>

          <button className="login_btn">Login</button>

          <div className="sign_forget">
            <button className="forget">Forgot password?</button>
            <button className="sign">Sign up!</button>
          </div>
        </div>
        <span className="login_account">Login using account!</span>
        <div className="icons">
          <span className="icon1">
            <LoginSocialFacebook
              appId="267247816186005"
              onResolve={(response) => {
                console.log(response);
                setProfile(response.data);
              }}
              onReject={(error) => {
                console.log(error);
              }}
            >
              <img src={facebookicon} alt="facebook" />
            </LoginSocialFacebook>
          </span>
          <span className="icon2">
            <img src={google} alt="google" />
          </span>
          <span className="icon3">
            <img src={twiter} alt="twiter" />
          </span>
        </div>
      </div>
    </div>
  ) : (
    <Home name={profile.name} profileImage={profile.picture.data.url} />
  );
};
// 943018390513254
// 267247816186005
