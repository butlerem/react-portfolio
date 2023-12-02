import React from 'react';
import { Row, Col } from 'react-bootstrap';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const ProjectCard = ({ title, description, imgUrl, url, navIcon3 }) => {
  return (
    <Row>
      {/* Image Column */}
      <Col md={6} sm={12}>
        <img src={imgUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
      </Col>

      {/* Description Column */}
      <Col md={6} sm={12} style={{ textAlign: 'left' }}>
        <div>
          <h4>
            {title}{" "}
            <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={navIcon3} alt="GitHub" style={{ marginBottom: '5px' }} />
            </a>
          </h4>
          <p>{description}</p>
        </div>
      </Col>
    </Row>
  );
};
