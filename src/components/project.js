import { useState, useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "./project.css";
import { CAlert } from "@coreui/react";
import image from "../images/html.jpg";
import MediBlock from "../images/projects/mediblock.png";
import funkiats from "../images/projects/funkiats.png";

export const Projects = () => {
  const projects = [
    {
      title: "MediBlock: Decentralized Health Record System",
      description:
        "MediBlock is a Blockchain-based Electronic health Record Storage and Retrieval System which leverages Ethereum Virtual Network to provide safety for maintaining records utilizing technology such as ReactJS, Ganache, IPFS and Smart Contracts",
      image: MediBlock,
      // <img src="../images/projects/mediblock.png" alt="MediBlock" />,
      link: "https://github.com/iwhe/MediBlock---Decentralized-Health-Record-System",
    },
    {
      title: "FUNKIATS: Emotion Based Music System",
      description:
        "FUNKIATS is a Emotion-based music system with recommendations which uses user camera to detect emotion, run through data processing and detect the human emotion in real-time and suggest the various list of playlist to the user's as per their specific need.",
      image: funkiats,
      // <img src="../images/projects/mediblock.png" alt="MediBlock" />,
      link: "https://github.com/iwhe/FUNKIATS-EMOTION-BASED-MUSIC-SYSTEM",
    },
    {
      title: "MediBlock: Decentralized Health Record System",
      description:
        "MediBlock is a Blockchain-based Electronic health Record Storage and Retrieval System which leverages Ethereum Virtual Network to provide safety for maintaining records utilizing technology such as ReactJS, Ganache, IPFS and Smart Contracts",
      image: MediBlock,
      link: "https://github.com/iwhe/MediBlock---Decentralized-Health-Record-System",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container className="project-container">
        <h2> Project Experience</h2>
        <Row className="project-tiles">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={4} xl={4}>
              <div className="Card">
                <h5>{project.title}</h5>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </a>
                <p>{project.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        {/* <Row style={{ padding: "20px 5px" }}>
          <Col xs={12} md={4} xl={4}>
            <div className="Card">
              <h5> Project Name</h5>
              <img
                src="../images/html.jpg"
                alt="project banner"
                style={{ width: "100px", height: "auto" }}
              ></img>
              <p>
                {" "}
                Project Details Project Details Project DetailsProject
                DetailsProject Details Project DetailsProject Details Project
                Details Project Details.... Project Details
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <div className="Card">
              <h5> Project Name</h5>
              <p>
                {" "}
                Project Details Project Details Project DetailsProject
                DetailsProject Details Project DetailsProject Details Project
                Details Project Details.... Project Details
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <div className="Card">
              <h5> Project Name</h5>
              <p>
                {" "}
                Project Details Project Details Project DetailsProject
                DetailsProject Details Project DetailsProject Details Project
                Details Project Details.... Project Details
              </p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};
