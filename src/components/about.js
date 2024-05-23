import { Container } from "react-bootstrap";
import "./about.css";
import React from "react";
export const About = () => {
  return (
    <div className="about_me" id="about">
      <Container className="new_container">
        <h1>About Me</h1>
        <p>
          My name is{" "}
          <strong>Bhupesh Paneru, a computer engineer based in Nepal</strong>.
          <br></br>I am recently graduated in Computer Science Engineering from{" "}
          <strong>
            BMS Institute of Technology(Under VTU), Bengaluru, India, Class of
            2024
          </strong>
          . My academic journey has equipped me with a broad understanding of
          various technical domains, and I am passionate about continuous
          learning and growth. While I have not yet mastered a specific skill
          set, I possess a beginner to intermediate level of proficiency in
          multiple areas, embodying the "jack of all trades, master of none"
          philosophy.
          <br></br>
          <br></br>
          <strong>My skillset includes:</strong>
          <ul>
            <li>
              Programming Languages: C, C++, Python, PHP, Java, and JavaScript.
            </li>
            <li>Web Development: HTML, CSS, React, and Node.js.</li>
            <li>
              Software Development: Fundamentals of OOP, data structures, and
              algorithms.
            </li>
            <li>Database Management: SQL and MongoDB.</li>
            <li>Tools and Platforms: Git, UIPath, VMWare and AWS.</li>
          </ul>
          I am driven by a strong motivation to excel in the field of computer
          engineering. My goal is to leverage my broad skill set as a foundation
          for continuous improvement and specialization. I believe that with
          enough dedication and hard work, I can achieve significant milestones
          and make meaningful contributions to the industry. Collaboration and
          teamwork are essential to my approach, as I believe they lead to the
          best innovative solutions. Looking forward, I aim to explore and
          contribute to fields such as artificial intelligence, cybersecurity,
          and web development. By working with like-minded professionals, I hope
          to harness the power of technology to solve real-world problems and
          drive positive change. Beyond my professional interests, I enjoy
          participating in coding challenges, exploring open-source projects,
          and staying updated with the latest tech trends. In my free time, I
          love hiking, photography, and exploring the great outdoors.
        </p>
      </Container>
    </div>
  );
};
