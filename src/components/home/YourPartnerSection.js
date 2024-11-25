import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { countItems } from "../shared/data";

function YourPartnerSection({ title, para }) {
  return (
    <section className="sub-banner your-partner">
      <Container>
        <Row className="row-gap-4">
          <Col xl={12}>
            <div className="text-center your-partner-cnt">
              <h2 className="text-center">{title}</h2>
              <p>{para}</p>
            </div>
          </Col>
          <div className="your-partner-count">
            {countItems.map(({ count, description }, index) => (
              <div key={index}>
                <h2>{count}</h2>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default YourPartnerSection;
