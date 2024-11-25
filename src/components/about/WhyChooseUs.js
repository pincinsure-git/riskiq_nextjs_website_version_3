import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { aboutUsWhyChooseUsCard } from "../shared/data";

function WhyChooseUs() {
  return (
    <section className="sub-banner why-choose-us">
      <Container>
        <Row>
          <Col>
            <h3>WHY CHOOSE US?</h3>
            <p>
              As your insurance brokers, we strive to offer you the best
              insurance experience. We try to bring to you the cheapest
              insurance plans, suitable for your needs. You can compare and
              choose plans of leading insurance companies.
            </p>
          </Col>
        </Row>
        <Row className="row-gap-4">
          {aboutUsWhyChooseUsCard.map((card, index) => (
            <Col lg={6} key={index}>
              <div className="why-choose-us_card">
                <div>
                  <Image src={card.imgSrc} alt={card.altText} />
                </div>
                <div>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
