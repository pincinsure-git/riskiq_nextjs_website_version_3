import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function BannerSection({ title }) {
  return (
    <section className="sub-banner hero contact">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center sub-banner-title">{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BannerSection;
