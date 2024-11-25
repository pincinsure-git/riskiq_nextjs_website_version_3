import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function VisionMission() {
  return (
    <section className="sub-banner vision-mission-sec">
      <Container>
        <Row className="row-gap-5">
          <Col md={5}>
            <h3 className="mt-md-5 pt-lg-5">Vision and Mission</h3>
            <div className="vm-card p-4">
              <Image src="/images/icon/goal.png" alt="goal" />
              <h4>Our Vision</h4>
              <p>
                At Risk IQ Insurance, we envision a world where individuals and
                businesses navigate life’s uncertainties with confidence,
                knowing that their futures are secure. We strive to be the
                leading force in innovative risk management solutions,
                empowering our clients to pursue their dreams without the burden
                of worry.
              </p>
              <Image
                src="/images/icon/mission.png"
                alt="mission"
                className="mt-4"
              />
              <h4>Our Mission</h4>
              <p>
                At Risk IQ Insurance, we envision a world where individuals and
                businesses navigate life’s uncertainties with confidence,
                knowing that their futures are secure. We strive to be the
                leading force in innovative risk management solutions,
                empowering our clients to pursue their dreams without the burden
                of worry.
              </p>
            </div>
          </Col>
          <Col md={7}>
            <Image
              src="/images/vision_mission.png"
              alt="vision-mission"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default VisionMission;
