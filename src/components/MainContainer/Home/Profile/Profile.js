import React, { useContext } from "react";
import "./Profile.css";
import { ThemeContext } from "./../../MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Profile(props) {
  const darkTheme = useContext(ThemeContext);

  const style = {
    profileInfoStyle: {
      color: darkTheme ? "#cccccc" : "#404040",
    },
    iconStyle: {
      color: darkTheme ? "#cccccc" : "#404040",
    },
    lineStyle: {
      boderColor: darkTheme ? "#f9f9f9" : "#212529",
    },
    profilePicStyle: {
      boxShadow: darkTheme
        ? "0 1px 0px 0px rgb(249, 248, 248)"
        : "0 1px 0px 0px rgb(29, 27, 27)",
    },
    buttonStyle: {
      boxShadow: darkTheme
        ? "2px 5px 5px rgb(22, 21, 21)"
        : "2px 5px 5px rgb(156, 154, 154)",
    },
  };

  return (
    <div className="profile-container " style={style.profileContainerStyle}>
      <div className="profile">
        <div className="profile-pic" style={style.profilePicStyle}>
          <div className="profile-background"></div>
        </div>
        <div className="profile-info" style={style.profileInfoStyle}>
          <h1 className="profile-tagline">
            Hi! I am{" "}
            <b className="funky-name" style={style.profileInfoStyle}>
              Vikas Saini
            </b>
          </h1>
          <h1 className="profile-tagline">
            I am a{" "}
            <strong className="funky-name" style={style.profileInfoStyle}>
              Software/Web developer
            </strong>
          </h1>
          <hr className="line" style={style.lineStyle}></hr>
          <div className="social-media-icons">
            <a className="link" href="#">
              <i className="bi bi-instagram" style={style.iconStyle}></i>
            </a>
            <a className="link" href="#">
              <i className="bi bi-linkedin" style={style.iconStyle}></i>
            </a>
            <a className="link" href="#">
              <i className="bi bi-github" style={style.iconStyle}></i>
            </a>
            <a className="link" href="#">
              <i className="bi bi-twitter" style={style.iconStyle}></i>
            </a>
          </div>
          <div className="buttons">
            <a
              type="button"
              href={require("../../../../Assets/Vikas_Saini_CV.pdf")}
              className="rainbow-hover"
              style={style.buttonStyle}
            >
              <FontAwesomeIcon icon={faDownload} style={{ color: "#cfef00" }} />
              Resume
            </a>
            <button
              className="btn-about-me"
              onClick={() => props.onComponentClick(props.contactRef)}
            >
              <span>Contact Me</span>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  strokeWidth="3"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
