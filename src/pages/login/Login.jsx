import React, { useState } from "react";
import "./login.css";
import { LoginSocialFacebook } from "reactjs-social-login";
import { ProfileData } from "./ProfileData";
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z"
                fill="#778899"
              />
            </svg>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="password">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 6.66667H16.25V4.7619C16.25 2.13333 13.45 0 10 0C6.55 0 3.75 2.13333 3.75 4.7619V6.66667H2.5C1.125 6.66667 0 7.52381 0 8.57143V18.0952C0 19.1429 1.125 20 2.5 20H17.5C18.875 20 20 19.1429 20 18.0952V8.57143C20 7.52381 18.875 6.66667 17.5 6.66667ZM10 15.2381C8.625 15.2381 7.5 14.381 7.5 13.3333C7.5 12.2857 8.625 11.4286 10 11.4286C11.375 11.4286 12.5 12.2857 12.5 13.3333C12.5 14.381 11.375 15.2381 10 15.2381ZM6.25 6.66667V4.7619C6.25 3.18095 7.925 1.90476 10 1.90476C12.075 1.90476 13.75 3.18095 13.75 4.7619V6.66667H6.25Z"
                fill="#778899"
              />
            </svg>
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="15.5"
                  fill="white"
                  stroke="#4268B3"
                />
                <path
                  d="M12.0114 22V10.3636H19.7159V12.392H14.4716V15.1648H19.2045V17.1932H14.4716V22H12.0114Z"
                  fill="#4268B3"
                />
              </svg>{" "}
            </LoginSocialFacebook>
          </span>
          <span className="icon2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                fill="white"
                stroke="#D72D20"
              />
              <path
                d="M17.7273 14.125C17.6477 13.8485 17.536 13.6042 17.392 13.392C17.2481 13.1761 17.072 12.9943 16.8636 12.8466C16.6591 12.6951 16.4242 12.5795 16.1591 12.5C15.8977 12.4205 15.608 12.3807 15.2898 12.3807C14.6951 12.3807 14.1723 12.5284 13.7216 12.8239C13.2746 13.1193 12.9261 13.5492 12.6761 14.1136C12.4261 14.6742 12.3011 15.3598 12.3011 16.1705C12.3011 16.9811 12.4242 17.6705 12.6705 18.2386C12.9167 18.8068 13.2652 19.2405 13.7159 19.5398C14.1667 19.8352 14.6989 19.983 15.3125 19.983C15.8693 19.983 16.3447 19.8845 16.7386 19.6875C17.1364 19.4867 17.4394 19.2045 17.6477 18.8409C17.8598 18.4773 17.9659 18.0473 17.9659 17.5511L18.4659 17.625H15.4659V15.7727H20.3352V17.2386C20.3352 18.2614 20.1193 19.1402 19.6875 19.875C19.2557 20.6061 18.661 21.1705 17.9034 21.5682C17.1458 21.9621 16.2784 22.1591 15.3011 22.1591C14.2102 22.1591 13.2519 21.9186 12.4261 21.4375C11.6004 20.9527 10.9564 20.2652 10.4943 19.375C10.036 18.4811 9.80682 17.4205 9.80682 16.1932C9.80682 15.25 9.94318 14.4091 10.2159 13.6705C10.4924 12.928 10.8788 12.2992 11.375 11.7841C11.8712 11.2689 12.4489 10.8769 13.108 10.608C13.767 10.339 14.4811 10.2045 15.25 10.2045C15.9091 10.2045 16.5227 10.3011 17.0909 10.4943C17.6591 10.6837 18.1629 10.9527 18.6023 11.3011C19.0455 11.6496 19.4072 12.0644 19.6875 12.5455C19.9678 13.0227 20.1477 13.5492 20.2273 14.125H17.7273Z"
                fill="#D72D20"
              />
            </svg>
          </span>
          <span className="icon3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                fill="white"
                stroke="#192734"
              />
              <path
                d="M13.3182 10.3636L15.6648 14.3295H15.7557L18.1136 10.3636H20.892L17.3409 16.1818L20.9716 22H18.142L15.7557 18.0284H15.6648L13.2784 22H10.4602L14.1023 16.1818L10.5284 10.3636H13.3182Z"
                fill="#192734"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <ProfileData name={profile.name} profileImage={profile.picture.data.url} />
  );
};
// 943018390513254
// 267247816186005
