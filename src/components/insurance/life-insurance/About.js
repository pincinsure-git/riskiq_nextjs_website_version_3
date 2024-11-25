import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <section className="sub-banner insurance-sec">
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center">What is the life insurance?</h2>
            <div className="wwa_card">
              <p className="m-0">
                Term insurance is the simplest and most affordable form of life
                insurance. Term plans provide peace of mind to you by ensuring
                that your family is financially secure and independent. in your
                absence. If you are the person insured, you pay a specific
                premium amount at fixed intervals during the policy term. In the
                event of your unfortunate demise during the policy term, your
                nominees will receive the ‘Sum Assured which you had selected
                while purchasing the plan.
                <br />
                Term insurance is a form of life insurance that is active for a
                fixed period of time (popularly referred to as the term). These
                plans are easy to understand and provide financial protection
                that your family will need if you are no longer around. New age
                term plans provide additional protection through optional
                benefits like Critical liness Cover and Accidental Death Cover.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
