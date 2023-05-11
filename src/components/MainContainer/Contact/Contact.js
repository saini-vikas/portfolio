import "./Contact.css";
import React, { useRef, forwardRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../MainContainer";

const Contact = forwardRef((props, ref) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const darkTheme = useContext(ThemeContext);

  const style = {
    btnStyle: {
      color: darkTheme ? "light" : "dark",
    },
    iconStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    textStyle: {
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
    lineStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
      backgroundColor: darkTheme ? "#f8f8f8" : "#212529",
    },
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      emailjs
        .sendForm(
          "service_mm7qqrl",
          "template_vyycaew",
          form.current,
          "i51sJEAvcglS60HoG"
        )
        .then(
          (result) => {
            console.log(result.status);
            if (result.status === 200) {
              window.alert("Email sent successfully!");
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
      setEmail("");
      setMessage("");
      setName("");
    } else {
      window.alert("Please fill in all the fields in the form.");
    }
  };

  return (
    <div className="contact-container" id={props.id || ""} ref={ref}>
      <div className="contact-heading">
        <h1 className="contact-heading-title" style={style.textStyle}>
          Contact Me{" "}
        </h1>
      </div>
      <div className="Contact" id={props.id || ""}>
        <div className="contact-form" style={style.shadowStyle}>
          <div className="social-media-icons-2">
            <a className="link-2" href="#">
              <i className="bi bi-instagram" style={style.iconStyle}></i>
            </a>
            <a className="link-2" href="#">
              <i className="bi bi-linkedin" style={style.iconStyle}></i>
            </a>
            <a className="link-2" href="#">
              <i className="bi bi-github" style={style.iconStyle}></i>
            </a>
            <a className="link-2" href="#">
              <i className="bi bi-twitter" style={style.iconStyle}></i>
            </a>
          </div>
          <hr className="line-2" style={style.lineStyle}></hr>
          <form
            id="contactForm"
            className="col"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact-form-info">
              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                  style={style.textStyle}
                >
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="user-name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                    id="inputName"
                  ></input>
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                  style={style.textStyle}
                >
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="user-email"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="inputEmail"
                  ></input>
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="inputTextArea"
                  className="col-sm-2 col-form-label"
                  style={style.textStyle}
                >
                  Message:
                </label>
                <div className="col-sm-10">
                  <textarea
                    type="text"
                    placeholder="Enter your message"
                    name="user-message"
                    className="form-control"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id="inputTextArea"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className={"btn btn-" + style.btnStyle.color}
              >
                Send <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="line-3" style={style.iconStyle}></hr>
    </div>
  );
});

export default Contact;
