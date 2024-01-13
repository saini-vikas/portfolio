import React, { useContext } from "react";
import "./Stack.css";
import { ThemeContext } from "../MainContainer";

const StackPill = (props) => {
  const darkTheme = useContext(ThemeContext);
  const style = {
    bg: {
      backgroundColor: darkTheme ? "#f2f2f2" : "#f5f5f5",
    },
  };
  return (
    <div className="stack-pill" style={style.bg}>
      <p className="stack-name">{props.name}</p>
    </div>
  );
};

export default StackPill;
