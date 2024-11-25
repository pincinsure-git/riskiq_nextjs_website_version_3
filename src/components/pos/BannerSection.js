import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function BannerSection() {
  return (
    <section className="sub-banner pos-sec bg-light">
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Image src="/images/undraw.svg" alt="page" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BannerSection;
