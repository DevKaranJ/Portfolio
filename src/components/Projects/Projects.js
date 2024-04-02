import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolioDesing from "../../Assets/Projects/Portfolio Desing1.png"
import landingPage from "../../Assets/Projects/landingPage.png"
import musicFestival from "../../Assets/Projects/musicFestival.png"
import awesomeBooks from "../../Assets/Projects/awesomeBooks.png"
import toDoList from "../../Assets/Projects/toDoList.png"
import mathmagicians from "../../Assets/Projects/math-magicians.png"
import Leaderboard from "../../Assets/Projects/Leaderboard.png"
import MelodyVerse from "../../Assets/Projects/MelodyVerse.png"
import TaskTracker from "../../Assets/Projects/TaskTracker.png"
import BudgetApp from "../../Assets/Projects/BudgetApp.png"
import Bookify from "../../Assets/Projects/Bookify.png"

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
              imgPath={MelodyVerse}
              isBlog={false}
              title="Melody Verse Posts"
              description="It is a full stack application, utilizing Node.js, Express.js, React.js, and PostgreSQL as the database. It includes features such as user signup with validation, JWT authentication, a paginated post list screen with infinite scroll, and responsive design using Tailwind CSS. The project aims to provide a visually appealing and consistent user experience under the MelodyVerse theme. Code submission includes API endpoints for user registration and post retrieval, along with JWT token generation and validation for user authentication."
              ghLink="https://github.com/DevKaranJ/melody_verse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bookify}
              isBlog={false}
              title="Bookify App"
              description="It is a simple book reserve App where User Can add remove their favorite book items from different category. This App is build on Rails + React framework."
              ghLink="https://github.com/DevKaranJ/Bookify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BudgetApp}
              isBlog={false}
              title="Rail Budget app"
              description="Rail-Budget-app: The Budget app is a mobile web application where user can manage the budget."
              ghLink="https://github.com/DevKaranJ/Budget-app"
              demoLink="https://budget-app-n4di.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskTracker}
              isBlog={false}
              title="React Task Tracker"
              description="Efficiently manage team tasks with our React-powered Task Tracker web application. Seamlessly track tasks with essential properties such as title, description, start and end dates, status, assignee, and priority. Sort and filter tasks by priority, date, assignee, or status, ensuring easy organization. The responsive design ensures usability across devices. Add and delete tasks effortlessly, with companion apps available for Android and iOS. Utilizing in-memory state management for data storage, our project emphasizes good coding practices and includes error handling mechanisms. Simplify task management and boost productivity with our intuitive Task Tracker solution."
              ghLink="https://github.com/DevKaranJ/react-task-tracker"
              demoLink="https://github.com/DevKaranJ/react-task-tracker"
            />
          </Col>

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awesomeBooks}
              isBlog={false}
              title="Awesome Books"
              description="Awesome-Books is a user-friendly website powered by JavaScript ES6, designed for book enthusiasts to easily manage their collections. With a clean and intuitive interface, you can add, remove, and edit book details effortlessly. The site offers real-time updates, data persistence, and a responsive design, ensuring your library is always at your fingertips. "
              ghLink="https://github.com/DevKaranJ/AwesomeBooks-ES6"
              demoLink="https://devkaranj.github.io/AwesomeBooks-ES6/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDoList}
              isBlog={false}
              title="Todo List"
              description="Experience seamless task management with our To-Do list project. Add your daily tasks to the list and effortlessly remove them when completed. Enjoy the convenience of modern features like dynamic rendering, easy styling, and organized structure. Stay productive and in control of your tasks with this user-friendly web-based solution. "
              ghLink="https://github.com/DevKaranJ/ToDo-list"
              demoLink="https://todo-list-t5r6.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mathmagicians}
              isBlog={false}
              title="Math Magicians"
              description="Math Magicians is an educational web application built using React, designed for math enthusiasts. It features a versatile calculator for basic math operations and offers random math-related quotes for inspiration. The project provides hands-on learning in web development, divided into projects covering setup, component creation, event handling, data fetching, website structure, and testing. It aims to make math learning engaging and serves as a practical React development exercise."
              ghLink="https://github.com/DevKaranJ/math-magicians"
              demoLink="https://math-magicians-dnk4.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                Leaderboard}
              isBlog={false}
              title="
              Leaderboard"
              description="The Leaderboard project is an interactive web application designed to showcase and manage leaderboards for various competitions, games, or activities. It provides users with a clear and organized view of rankings, scores, and participants. Leveraging modern web development technologies such as ES6, modular JavaScript, and Webpack, the project aims to deliver a seamless user experience with a focus on functionality and code maintainability. In subsequent phases, the project will evolve to incorporate API integration and enhanced styling."
              ghLink="https://github.com/DevKaranJ/Leaderboard"
              demoLink="https://leaderboard-lpwr.onrender.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
