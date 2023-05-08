import React, { forwardRef, useContext, useEffect } from "react";
import "./AboutMe.css";
import { ThemeContext } from "../MainContainer";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const styles = {
    backgroundColor: darkTheme ? "#262626" : "#e7f0f8ef",
    textcolor: {
      color: darkTheme ? "#cccccc" : "#404040",
    },
  };
  return (
    <div
      data-aos="zoom-in"
      className="about-container"
      style={styles}
      id={props.id || ""}
      ref={ref}
    >
      <div className="heading">
        <h1 className="heading-title">About Me</h1>
      </div>
      <div id="section-aboutme" className="aboutme">
        <div className="blob"></div>
        <div className="blob2"></div>
        <div className="blob3"></div>
        <div className="blob4"></div>
        <div className="image">
          <div className="card">
            <div className="imgbox">
              <div className="img"></div>
            </div>
            <div className="details">
              <h2 className="title">Vikas Saini</h2>
              <span className="caption">Developer</span>
            </div>
          </div>
        </div>
        <div className="about" style={styles.textcolor}>
          <p>
            My name is Vikas and I am a software and web developer with a
            Bachelor's degree in Computer Science. With my expertise in various
            programming languages and frameworks, I have developed numerous
            websites, web applications and software solutions for clients across
            diverse industries. In my portfolio, you will find a showcase of my
            recent projects, which highlight my skills and capabilities as a
            developer. Each project comes with a brief description of the
            technology stack used, the challenges faced and the solutions
            implemented to overcome them. I strive to deliver high-quality,
            scalable and user-friendly solutions that exceed my clients'
            expectations. Feel free to explore my portfolio and contact me if
            you have any queries or project opportunities.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
