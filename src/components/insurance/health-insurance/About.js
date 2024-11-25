import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <section className="sub-banner insurance-sec">
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center">What is the health insurance?</h2>
            <div className="wwa_card about">
              <p className="m-0">
                Health insurance is a type of insurance coverage that covers the
                cost of an insured individual's medical and surgical expenses.
                Depending on the type of health insurance coverage, either the
                insured pays costs out-of-pocket and is then reimbursed, or the
                insurer makes payments directly to the provider.
                <br />
                <br />
                In health insurance terminology, the "provider" is a clinic,
                hospital, doctor, laboratory, health care practitioner, or
                pharmacy. The "insured" is the owner of the health insurance
                policy; the person with the health insurance coverage.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
