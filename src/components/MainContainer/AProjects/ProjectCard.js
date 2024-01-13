import React, { useContext } from "react";
import { ThemeContext } from "../MainContainer";
import "./Project-Card.css";
import StackPill from "./StackPill";

const ProjectCard = (props) => {
  const darkTheme = useContext(ThemeContext);
  const style = {};
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-info">
        <h6 className="project-title">{props.title}</h6>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow={props.completion}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar  bg-success"
            style={{ width: `${props.completion}%` }}
          >
            {props.completion}%
          </div>
        </div>
        <div className="project-stack">
          {props.stack.map((n) => (
            <StackPill key={n} name={n} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
