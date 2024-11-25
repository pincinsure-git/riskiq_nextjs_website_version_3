import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CarouselSection from "./CarouselSection";

function WhyChoose() {
  return (
    <section className="sub-banner why_choose">
      <Container fluid className="px-md-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <h3 className="m-0">
              Why Choose RiskIQ Insurance for <br />
              <span>Life Insurance</span>
            </h3>
          </Col>
          <Col lg={6}>
            <CarouselSection />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChoose;
