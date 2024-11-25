import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { leadershipData } from "../shared/data";

function LeadershipSection() {
  return (
    <section className="sub-banner leadership-section who_we_are">
      <Container>
        <Row>
          <Col>
            <div className="choose-us-cnt">
              <h2>Our Leadership</h2>
            </div>
          </Col>
        </Row>
        <Row className="row-gap-7 mt-5 mt-md-5 pt-md-5 mb-5">
          {leadershipData.map((leader, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 && (
                <Col md={3}>
                  <Image src={leader.image} alt="leader" className="w-100" />
                </Col>
              )}
              <Col md={9}>
                <div className="leadership_card">
                  <p>
                    <span>{leader.name}</span>, {leader.description}
                  </p>
                  <div className="leader-info">
                    <h4>Mr.{leader.name}</h4>
                    <span>{leader.position}</span>
                  </div>
                </div>
              </Col>
              {index % 2 !== 0 && (
                <Col md={3}>
                  <Image src={leader.image} alt="leader" className="w-100" />
                </Col>
              )}
            </React.Fragment>
          ))}
        </Row>
      </Container>
      <div className="leadership-divider"></div>
    </section>
  );
}

export default LeadershipSection;
