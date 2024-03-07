import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import {Container, Row, Col} from "react-bootstrap";
import "./project.css"

export const Projects = () => {

    const projects = [
        {
            title: "Project Title",
            description:"This is a short project description.",
            imgUrl:' ',
        },
        {
            title: "Project Title",
            description:"This is a short project description.",
            imgUrl:' ',
        },
        {
            title: "Project Title",
            description:"This is a short project description.",
            imgUrl:' ',
        },
        {
            title: "Project Title",
            description:"This is a short project description.",
            imgUrl:' ',
        },
        {
            title: "Project Title",
            description:"This is a short project description.",
            imgUrl:' ',
        },

    ];
   
    return(
        <section className="projects">
            <Container>
                <h2> Project Experience</h2>
                <Row style={{ padding: '20px 5px' }}>
                    <Col xs = {12} md = {4} xl = {4}>
                        <div className="Card">
                            <h5> Project Name</h5>
                            <p> Project Details Project Details Project DetailsProject DetailsProject Details Project DetailsProject Details Project Details Project Details....
                            Project Details
                            </p>
                        </div>
                    </Col>
                    <Col xs = {12} md = {4} xl = {4}>
                        <div className="Card">
                            <h5> Project Name</h5>
                            <p> Project Details Project Details Project DetailsProject DetailsProject Details Project DetailsProject Details Project Details Project Details....
                            Project Details
                            </p>
                        </div>
                    </Col>
                    <Col xs = {12} md = {4} xl = {4}>
                        <div className="Card">
                            <h5> Project Name</h5>
                            <p> Project Details Project Details Project DetailsProject DetailsProject Details Project DetailsProject Details Project Details Project Details....
                            Project Details
                            </p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>

    )
}