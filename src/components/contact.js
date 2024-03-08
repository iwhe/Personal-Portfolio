import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Col, Row } from "react-bootstrap";
import "./contact.css";

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
              <a href="https://www.linkedin.com/"> Linkedin</a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.github.com/"> Github</a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.x.com/"> X</a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/"> Email</a>{" "}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
