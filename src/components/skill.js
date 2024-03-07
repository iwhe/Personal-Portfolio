/***************Images*********************/
import react from "../images/react.jpg";
import node from "../images/node.jpg";
import mongo from "../images/mongodb-removebg-preview.png";
import python from "../images/python.jpg";
import sql from "../images/mysql.jpg";
import java from  "../images/java.jpg"
import hcj from "../images/html-css-js.jpg"
import express from "../images/express.png"
/***************Images*********************/
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./skill.css";
import arrow1 from "../images/arrow1.svg";
import arrow2 from "../images/arrow2.svg";
import colorSharp from "../images/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  // import React, { useState, useEffect } from 'react';

  // const Carousel = ({ items }) => {
  //   const [activeIndex, setActiveIndex] = useState(0);
  
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setActiveIndex(prevIndex =>
  //         prevIndex === items.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 3000); // Change slide every 3 seconds
  
  //     return () => clearInterval(intervalId);
  //   }, [items.length]);
  
  //   return (
  //     <div className="carousel">
  //       {items.map((item, index) => (
  //         <div key={index} className={index === activeIndex ? 'slide active' : 'slide'}>
  //           {item}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  
  // export default Carousel;
  




  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={hcj} alt="Image" />
                                <h5>HTML, CSS & JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}