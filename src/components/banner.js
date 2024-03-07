import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import {Container, Row, Col} from "react-bootstrap";
import './banner.css'
import profileImg from "../images/sunset.jpg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick  = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
         
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);   
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md = {6} xl = {5}>
                        <img className="pfp" src={profileImg} alt="ProfileImage" />

                    </Col>

                    <Col className = "description" xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1> Hi, <br />
                            I'm Bhupesh!,
                        <div className="wrap">{text}</div>
                            {/* <span className="wrap">{text}</span> */}
                        </h1>
                        <p>loremipsumThis specifies the column width for extra large screen sizes. The column takes up 7 out of 12 available columns, meaning it occupies more than half of the container's width on extra large screens (screen widths equal to or greater than 1200 pixels)</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}