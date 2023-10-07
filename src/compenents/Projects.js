import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/recommendation-book.png";
import projImg2 from "../assets/img/othello.png";

export const Projects = () => {
  const projects = [
    {
      title: "Recommendation Book System using Collaborative Filtering",
      description: "Collaborative Filtering using Tensorflow",
      imgUrl: projImg1,
      pjUrl: "https://github.com/MarchelGunawan/Final_Project.git",
    },
    {
      title: "Othello AI by using Minmax algorithm",
      description: "AI player on Othello game board by using minmax algorithm",
      imgUrl: projImg2,
      pjUrl: "https://github.com/MarchelGunawan/Othello-Minimax-Algorithm.git",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>My Project that I did on University</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h2>Coming Soon</h2>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h2>Coming Soon</h2>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
