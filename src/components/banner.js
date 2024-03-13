import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "./banner.css";
import profileImg from "../images/sunset.jpg";
import locationIcon from "../images/social-icons/location.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Software Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={6} md={6} xl={5}>
            <img className="pfp" src={profileImg} alt="ProfileImage" />
          </Col>

          <Col className="description" xs={6} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              Hi, <br />
              I'm Bhupesh!,
              <div className="wrap">
                {" "}
                {text ? <h2>{text}</h2> : <h2>&nbsp;</h2>}{" "}
              </div>
              {/* <div>{text}</div> */}
            </h1>

            <div className="location">
              <img src={locationIcon}></img>
              <h4> Bengaluru, India.</h4>
            </div>

            <p>
              Graduating in 2024 with a B.Tech in Computer Science Engineering,
              I'm skilled in modern technologies and adept at creating
              innovative digital solutions. My portfolio highlights diverse
              projects, demonstrating technical proficiency and dedication. I'm
              eager to apply my expertise and enhance digital experiences in new
              opportunities.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
