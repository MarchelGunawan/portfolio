import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, pjUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" className="ProjectImage" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
            {description}
            <br />
            <a href={pjUrl} className="urlRespository" target="_blank">
              Click here to visit the repository
            </a>
          </span>
        </div>
      </div>
    </Col>
  );
};
