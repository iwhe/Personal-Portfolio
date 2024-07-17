import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "./banner.css";
import github from "../images/social-icons/github.png";
import X from "../images/social-icons/x.png";
import linkedin from "../images/social-icons/linkedin1.png";
import gmail from "../images/social-icons/mail.png";
import profileImg from "../images/profile_pic.jpg";
import locationIcon from "../images/social-icons/location.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Software Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

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
      setDelta(100);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="profileContainer">
        <Row className="align-items-center">
          {/* <Col className="profile" xs={4} md={4} xl={5}>
            <div className="profileImage">
              <img className="pfp" src={profileImg} alt="ProfileImage" />
            </div>
          </Col> */}
          {/* xs={8} md={8} xl={7} */}
          <Col className="description">
            {/* <span className="tagline"> Welcome to my Portfolio</span> */}
            <h2>
              Hi, <br />
              I'm Bhupesh!
              <div className="wrap">
                {" "}
                {text ? <h2>{text}</h2> : <h2>&nbsp;</h2>}{" "}
              </div>
              {/* <div>{text}</div> */}
            </h2>

            <div className="location">
              <img src={locationIcon}></img>
              <h4>Kathmandu, Nepal</h4>
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
          <div className="profileLink">
            <ul>
              <li>
                <a href="https://www.github.com/iwhe">
                  <img src={github}></img>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bhupeshpaneru/">
                  <img src={linkedin}></img>
                </a>
              </li>
              <li>
                <a href="https://x.com/codewbhupesh">
                  <img src={X}></img>
                </a>
              </li>
              <li>
                <a href="mailto:bhupeshpaneru7@gmail.com">
                  <img src={gmail}></img>
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </div>
    </section>
  );
};
