import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { accordionItems } from "../shared/data";

function ChooseUsSection({ title }) {
  return (
    <section className="sub-banner choose-us">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="choose-us-cnt">
              <h2 className="text-center">{title}</h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mt-5 pt-md-5">
          <Col lg={5}>
            <Image
              src="/images/home_why_choose_us.png"
              alt="choose-us"
              className="w-100"
            />
          </Col>
          <Col lg={7}>
            <Accordion>
              {accordionItems.map(({ eventKey, header, body }) => (
                <Accordion.Item eventKey={eventKey} key={eventKey}>
                  <Accordion.Header>{header}</Accordion.Header>
                  <Accordion.Body>{body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ChooseUsSection;
