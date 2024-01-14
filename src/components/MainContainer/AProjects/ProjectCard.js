import React, { useContext } from "react";
import { ThemeContext } from "../MainContainer";
import "./Project-Card.css";
import StackPill from "./StackPill";

const ProjectCard = (props) => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    text: {
      color: props.color,
    },
    bg: {
      backgroundColor: darkTheme ? "#303030" : "#f2f2f2",
    },
    shadow: {
      boxShadow: darkTheme ? "5px 10px 10px #111111" : "5px 10px 10px #aaaaaa",
    },
  };
  return (
    <a className="project-link" href={props.link} style={style.text}>
      <div className="project-card" style={style.shadow}>
        <div className="project-image" style={style.bg}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className="project-info">
          <h6 className="project-title" style={style.text}>
            {props.title}
          </h6>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow={props.completion}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar"
              style={{
                width: `${props.completion}%`,
                backgroundColor: `${props.color}`,
              }}
            >
              {props.completion}%
            </div>
          </div>
          <div className="project-stack">
            {props.stack.map((n) => (
              <StackPill key={n} name={n} color={props.color} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
