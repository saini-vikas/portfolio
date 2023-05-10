import { forwardRef, useContext } from "react";
import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import { ThemeContext } from "../MainContainer";

const Skills = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  const style = {
    backgroundColor: darkTheme ? "#262626" : "#e7f0f8ef",
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
      confidence: 65,
      icon: require("./../../../Assets/tf.png"),
    },
  ];

  return (
    <div className="skills-container" style={style}>
      <div className="skills-section">
        <div className="heading">
          <h1>Skills</h1>
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