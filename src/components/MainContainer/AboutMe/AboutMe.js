import React, { forwardRef, useContext } from "react";
import "./AboutMe.css";
import { ThemeContext } from "../MainContainer";

const AboutMe = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  const imageStyle = {
    
  }

  const styles = {
    backgroundColor: darkTheme ? "#292929" : "#e7f0f8ef",
    textcolor: {
      color: darkTheme ? "#f5f5f5" : "#212529",
    },
    tagLine: {
      color: darkTheme ? "#ACBCFF" : "#4C4C6D",
    },
    pStyle: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
  };
  return (
    <div
      className="about-container"
      style={styles}
      id={props.id || ""}
      ref={ref}
    >
      <div className="about-heading">
        <h1 className="about-heading-title" style={styles.tagLine}>
          About Me
        </h1>
        <p className="about-tagline" style={styles.tagLine}>
          {props.tagline}
        </p>
      </div>
      <div id="section-aboutme" className="aboutme">
        <div className="blob"></div>
        <div className="blob2"></div>
        <div className="blob3"></div>
        <div className="blob4"></div>
        <div className="image">
          <section id="card1" className="card">
            <img
              src={require("./../../../Assets/about-photo.jpeg")}
              alt="Not found!"
            ></img>
            <div className="card__content">
              <p className="card__title">Vikas Saini</p>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae justo vel lorem tincidunt ultrices at non nunc. Donec in
                sapien viverra, tincidunt augue id, efficitur massa.
              </p>
              <button className="btn btn-dark btn-lg info-btn">
                More Info
              </button>
            </div>
          </section>
        </div>
        <div className="about" style={styles.textcolor}>
          <p style={styles.pStyle}>
            My name is Vikas and I am a Software, Machine Learning, and
            Full-stack developer with a Bachelor's degree in Computer Science
            and Artificial Intelligence and Machine Learning stream. With my
            expertise in various programming languages and frameworks, I have
            developed numerous websites, web and mobile applications and
            software solutions during my studies and co-op. In the ever-evolving
            landscape of technology, my passion lies at the intersection of
            Machine Learning and Artificial Intelligence. Having learnt about
            neural networks and various machine learning algorithms, my journey
            now extends into the captivating realms of Natural Language
            Processing (NLP), Large Language Models (LLM), and Artificial
            General Intelligence (AGI). This exploration represents a natural
            progression, fueled by a curiosity to understand and harness the
            nuances of language understanding and generation. Feel free to
            explore my portfolio and contact me if you have any queries or
            project opportunities.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
