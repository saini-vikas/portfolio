import React, { useContext } from "react";
import "./Stack.css";
import { ThemeContext } from "../MainContainer";

const StackPill = (props) => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    bg: {
      color: props.color,
      border: "1px solid" + props.color,
      backgroundColor: "#ffffff",
    },
  };
  return (
    <div className="stack-pill" style={style.bg}>
      <p className="stack-name">
        <strong>{props.name}</strong>
      </p>
    </div>
  );
};

export default StackPill;
