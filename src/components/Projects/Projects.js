import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolioDesing from "../../Assets/Projects/Portfolio Desing1.png"
import landingPage from "../../Assets/Projects/landingPage.png"
import musicFestival from "../../Assets/Projects/musicFestival.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioDesing}
              isBlog={false}
              title="Portfolio Desing"
              description="Welcome to my portfolio repository! Explore a collection of my diverse creative projects, highlighting my skills and accomplishments. From web development to graphic design, witness my passion and expertise in action. Let's collaborate and discuss opportunities for future endeavors. Enjoy the journey!"
              ghLink="https://github.com/DevKaranJ/MyPortfolio"
              demoLink="https://devkaranj.github.io/MyPortfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingPage}
              isBlog={false}
              title="LandingPage-AI_Powered_CX"
              description="This simple yet stylish HTML and CSS landing page project, known as the [AI-Powered Service], welcomes you to explore its repository. It showcases the seamless integration of HTML and CSS to create an engaging and visually appealing landing page."
              ghLink="https://github.com/DevKaranJ/LandingPage-AI_Powered_CX"
              demoLink="https://devkaranj.github.io/LandingPage-AI_Powered_CX/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicFestival}
              isBlog={false}
              title="Music-Festival-Website"
              description="The Music-Festival-Website is an artistic and technically impressive online experience that emulates the energy and excitement of a live music festival. With captivating visuals, interactive ticketing, and a seamless user interface, it combines the best of web development and creative design to transport visitors to a virtual music celebration."
              ghLink="https://github.com/DevKaranJ/Capstone-project-Music-Festival-Website"
              demoLink="https://devkaranj.github.io/Capstone-project-Music-Festival-Website/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
