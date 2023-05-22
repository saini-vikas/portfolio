import { forwardRef, useContext } from "react";
import skillImage from "./../../../Assets/skills2.svg";
import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import { ThemeContext } from "../MainContainer";

const Skills = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  const style = {
    backgroundColor: darkTheme ? "#262626" : "#e7f0f8ef",
    textStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
  };
  const skills = [
    {
      name: "React.js",
      confidence: 67,
      icon: require("./../../../Assets/react.png"),
    },
    {
      name: "Node.js",
      confidence: 80,
      icon: require("./../../../Assets/node.png"),
    },
    {
      name: "Python",
      confidence: 90,
      icon: require("./../../../Assets/python.png"),
    },
    {
      name: "ML",
      confidence: 68,
      icon: require("./../../../Assets/ml.png"),
    },
    {
      name: "AI",
      confidence: 73,
      icon: require("./../../../Assets/ai.png"),
    },
    {
      name: "Javascript",
      confidence: 80,
      icon: require("./../../../Assets/js.png"),
    },
    {
      name: "Java",
      confidence: 75,
      icon: require("./../../../Assets/java.png"),
    },
    { name: "C", confidence: 65, icon: require("./../../../Assets/c.png") },
    { name: "C++", confidence: 67, icon: require("./../../../Assets/c++.png") },
    {
      name: "Haskell",
      confidence: 80,
      icon: require("./../../../Assets/haskell.png"),
    },
    { name: "SQL", confidence: 90, icon: require("./../../../Assets/sql.png") },
    {
      name: "Swift",
      confidence: 80,
      icon: require("./../../../Assets/swift.png"),
    },
    {
      name: "Django",
      confidence: 75,
      icon: require("./../../../Assets/dj.png"),
    },
    {
      name: "Tensorflow",
      confidence: 63,
      icon: require("./../../../Assets/tf.png"),
    },
    {
      name: "Dart",
      confidence: 65,
      icon: require("./../../../Assets/dart.png"),
    },
    {
      name: "MongoDB",
      confidence: 82,
      icon: require("./../../../Assets/mongodb.png"),
    },
  ];

  return (
    <div className="skills-container" style={style}>
      <div className="skills-heading">
        <h1 className="skills-heading-title" style={style.textStyle}>
          Skills
        </h1>
      </div>
      <div className="skills-section">
        <div className="illustration">
          <img src={skillImage} alt=""></img>
        </div>
        <div className="skill-container" id={props.id || ""} ref={ref}>
          <div className="skills">
            {skills.map((skill) => (
              <Skill
                name={skill.name}
                icon={skill.icon}
                key={skill.name}
                confidence={skill.confidence}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
