import React, { useContext } from "react";
import "./Profile.css";
import { ThemeContext } from "./../../MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Profile(props) {
  const darkTheme = useContext(ThemeContext);

  const style = {
    profileInfoStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    iconStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    lineStyle: {
      boderColor: darkTheme ? "#f8f8f8" : "#212529",
    },
    profilePicStyle: {
      boxShadow: darkTheme
        ? "0 1px 0px 0px rgb(249, 248, 248)"
        : "0 1px 0px 0px rgb(29, 27, 27)",
    },
    ResumeButtonStyle: {
      boxShadow: darkTheme
        ? "2px 5px 5px rgb(22, 21, 21)"
        : "2px 5px 5px rgb(180, 180, 180)",
      color: darkTheme ? "" : "",
    },
    downloadStyle: {
      color: darkTheme ? "#353535" : "#f9f9f9",
    },
    btnTheme: {
      color: darkTheme ? "light" : "dark",
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
            Hi! I am <b className="funky-name">Vikas Saini</b>
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
            <button
              href={require("../../../../Assets/Vikas_Saini_CV.pdf")}
              className={"btn btn-lg btn-" + style.btnTheme.color}
              style={style.ResumeButtonStyle}
            >
              <FontAwesomeIcon icon={faDownload} style={style.downloadStyle} />
              Resume
            </button>
            <button
              className={"btn btn-lg btn-outline-" + style.btnTheme.color}
              onClick={() => props.onComponentClick(props.contactRef)}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
