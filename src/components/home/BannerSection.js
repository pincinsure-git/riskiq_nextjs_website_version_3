import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { bannerCards } from "../shared/data";

function BannerSection({ title }) {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <div className="card-container">
              {bannerCards.map(({ src, alt, title }) => (
                <div key={alt} className="banner-card">
                  <Image src={src} alt={alt} />
                  <h4>{title}</h4>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BannerSection;
