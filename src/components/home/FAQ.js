import React from "react";
import { Accordion, Button, Col, Container, Image, Row } from "react-bootstrap";
import { faqItems } from "../shared/data";

function FAQ({ title }) {
  return (
    <section className="sub-banner faq">
      <Container>
        <Row
          className="position-relative mt-lg-5 pt-lg-5"
          style={{ zIndex: "999" }}
        >
          <Col>
            <h2 className="text-white">{title}</h2>
          </Col>
        </Row>
        <Row
          className="position-relative mt-5  row-gap-4"
          style={{ zIndex: "999" }}
        >
          <Col lg={5}>
            <Image src="/images/faq.png" alt="faq" />
          </Col>
          <Col lg={7}>
            <div className="ms-lg-5">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                {faqItems.map(({ eventKey, question, answer }) => (
                  <Accordion.Item eventKey={eventKey} key={eventKey}>
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>{answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
              <div className="text-center mt-5">
                <Button className="theme-btn">READ MORE</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FAQ;
