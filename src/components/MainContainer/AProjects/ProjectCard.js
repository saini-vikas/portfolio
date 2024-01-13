import React, { useContext } from "react";
import { ThemeContext } from "../MainContainer";
import "./Project-Card.css";

const ProjectCard = (props) => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    year: {
      backgroundColor: "#ffc106",
      color: "#212529",
    },
    textColor: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    shadowStyle: {
      boxShadow: darkTheme
        ? "5px 5px 10px rgba(2, 2, 2, 0.6)"
        : "5px 5px 10px rgba(156, 154, 154 0.6)",
    },
    info: {
      backgroundColor: darkTheme ? "#212529" : "#ffffff",
    },
  };
  return (
    <div className="project-card" style={style.shadowStyle}>
      <div className="project-year" style={style.year}>
        <h6 className="pro-year">
          <strong>{props.date}</strong>
        </h6>
      </div>
      <div className="project-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-info" style={style.info}>
        <h6 className="project-title">{props.title}</h6>
        <p style={style.textColor}>{props.completion}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
