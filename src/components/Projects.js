import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "DevDuo Social Media Platform",
      description: "Full-stack social media app",
      imgUrl: projImg1,
      url: "https://github.com/butlerem/devduo"
    },
    {
      title: "Responsive Design Landing Page",
      description: "",
      imgUrl: projImg2,
      url: "https://github.com/butlerem/reverie-restaurant"
    },
    {
      title: "E Commerce Back-End",
      description: "",
      imgUrl: projImg3,
      url: "https://github.com/butlerem/E-commerce-Back-End"
    },
    {
      title: "Weather Dashboard",
      description: "",
      imgUrl: projImg4,
      url: "https://github.com/butlerem/weather-dashboard"
    },
    {
      title: "PWA Text Editor",
      description: "",
      imgUrl: projImg5,
      url: "https://github.com/butlerem/PWA-Text-Editor"
    },
    // ... other projects
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {projects.map((project, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`tab-${index + 1}`}>{project.title}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {projects.map((project, index) => (
                        <Tab.Pane eventKey={`tab-${index + 1}`} key={index}>
                          <Row>
                            <ProjectCard {...project} />
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
