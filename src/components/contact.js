import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Col, Row } from "react-bootstrap";
import "./contact.css";
import github from "../images/social-icons/github.png";
import X from "../images/social-icons/x.png";
import linkedin from "../images/social-icons/linkedin.png";
import gmail from "../images/social-icons/gmail.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4b0j1tr", "template_5x77qf2", form.current, {
        publicKey: "NYlg3mkhiNNF0hoiL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <Container className="contact-container">
        <h2> Get in touch with me</h2>
        <Row className="getintouch">
          <Col xs={12} md={5} xl={5} className="message">
            <h2> Message me</h2>

            <form ref={form} onSubmit={sendEmail}>
              <div className="name">
                <label>Name</label>
                <input type="text" name="from_name" />
              </div>

              <div className="email">
                <label>Email</label>
                <input type="email" name="from_email" />
              </div>

              <div className="type-text">
                <label>Message</label>
                <textarea name="message" />
              </div>

              <input type="submit" value="Send" />
            </form>
          </Col>

          <Col xs={12} md={5} xl={5} className="connect">
            <h2> Connect with me</h2>
            <ul>
              <li>
                {" "}
                <img src={linkedin}></img>
                <a href="https://www.linkedin.com/bhupeshpaneru">
                  {" "}
                  Linkedin
                </a>{" "}
              </li>
              <li>
                {" "}
                <img src={github}></img>
                <a href="https://www.github.com/iwhe"> Github</a>{" "}
              </li>
              <li>
                {" "}
                <img src={X}></img>
                <a href="https://twitter.com/codewbhupesh"> X</a>{" "}
              </li>
              <li>
                {" "}
                <img src={gmail}></img>
                <a href="mailto:bhupeshpaneru7@gmail.com"> Email</a>{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
