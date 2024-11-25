import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function BannerSection() {
  return (
    <section className="sub-banner hero about">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center sub-banner-title">About Us</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BannerSection;
