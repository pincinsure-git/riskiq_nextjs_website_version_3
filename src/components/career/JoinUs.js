import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CareerForm from "../shared/form/CareerForm";

const formFields = [
  {
    controlId: "formFullName",
    type: "text",
    placeholder: "Full Name",
    col: 12,
  },
  { controlId: "formEmail", type: "email", placeholder: "Email Id", col: 12 },
  {
    controlId: "formContact",
    type: "text",
    placeholder: "Contact No",
    col: 12,
  },
  { controlId: "formSubject", type: "text", placeholder: "Subject", col: 12 },
];

function JoinUs() {
  return (
    <>
      <div className="explore-wrapper">
        <p>Explore the areas of work where you can apply your unique skills.</p>
      </div>
      <section className="sub-banner join-us">
        <Container>
          <Row>
            <Col lg={5} xl={6}>
              <div className="iQ_cZx-card_pos">
                <div className="iQ_cZx-card">
                  <h2>Join Us</h2>
                </div>
                <div className="iQ_seperator"></div>
              </div>
            </Col>
            <Col lg={7} xl={6}>
              <div className="card-wrapper rounded-3 ">
                <CareerForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default JoinUs;
