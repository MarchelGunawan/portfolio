import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MattelLogo from "../assets/img/Mattel-Logo.png";
import danamonLogo from "../assets/img/danamonLogo.png";

export const Experience = () => {
  // the items still 2 because of my experience start by 2
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 300 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Experience</h2>
              <p>My working Experience</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={MattelLogo} alt="Image" className="imgExperience" />
                  <h5>
                    Web Development & Digital Transformation Intern <br /> at
                    Mattel, Inc
                  </h5>
                  <span>May 2022 - Apr 2023 · 1 yr</span>
                </div>
                <div className="item">
                  <img
                    src={danamonLogo}
                    alt="Image"
                    className="imgExperience"
                  />
                  <h5>
                    Application Support at <br /> PT Bank Danamon Indonesia, Tbk
                  </h5>
                  <span>May 2023 - Present · 6 mos</span>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
