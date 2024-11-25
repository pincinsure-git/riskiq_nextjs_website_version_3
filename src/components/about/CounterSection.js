import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function CounterSection() {
  const countData = [
    {
      value: "2 Lakh+",
      label: "SOLD POLICIES",
    },
    {
      value: "7 Lakh+",
      label: "QUOTES COMPARED",
      color: "#2463EB",
    },
    {
      value: "12 Lakh+",
      label: "TRUSTED BY INDIANS",
    },
  ];

  return (
    <section className="sub-banner count-sec mt-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          {countData.map((counter, index) => (
            <Col md={6} lg={4} className="text-center" key={index}>
              <h2 style={{ color: counter.color, fontWeight: 700 }}>
                {counter.value}
              </h2>
              <p>{counter.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CounterSection;
