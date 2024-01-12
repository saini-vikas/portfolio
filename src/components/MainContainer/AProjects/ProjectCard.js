import React, { useRef, forwardRef, useContext } from "react";
import { ThemeContext } from "../MainContainer";
import "./Project-Card.css";

const ProjectCard = (props) => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    textColor: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    shadowStyle: {
      boxShadow: darkTheme
        ? "5px 5px 10px rgba(2, 2, 2, 0.6)"
        : "5px 5px 10px rgba(156, 154, 154 0.6)",
      border: darkTheme
        ? "1px solid rgba(136, 130, 122, 0.3)"
        : "1px solid rgba(40, 40, 40, 0.2)",
    },
  };
  return (
    <div className="project-card" style={style.shadowStyle}>
      <h4>{props.title}</h4>
      <p>{props.completion}</p>
    </div>
  );
};

export default ProjectCard;
