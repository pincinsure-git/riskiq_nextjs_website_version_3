import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function InsuranceTypes({
  title,
  data,
  containerClass = "",
  rowClass = "",
  colClass = "",
  cardClass = "",
  showBlurImage = true,
}) {
  return (
    <section className={`sub-banner types-sec pt-5 ${containerClass}`}>
      <Container>
        <Row>
          <Col xs={12}>
            <h4>{title}</h4>
          </Col>
        </Row>
        <Row className={rowClass}>
          {data.map((type, index) => (
            <Col lg={4} className={`p-0 ${colClass}`} key={index}>
              <div
                className={`${cardClass} types-card ${
                  index !== data.length - 1 ? "br-lg-0 bb-lg-0" : ""
                }`}
              >
                <h6>{type.title}</h6>
                <p>{type.description}</p>
                <Image src={type.image} />
                {showBlurImage && type.blurImage && (
                  <Image src={type.blurImage} className="blur-image" />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default InsuranceTypes;
