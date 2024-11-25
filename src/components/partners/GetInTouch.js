import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import ContactForm from "../shared/form/ContactForm";

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

function GetInTouch() {
  return (
    <section className="sub-banner  pt-0">
      <Container>
        <Row>
          <Col xl={{ span: 10, offset: 1 }}>
            <div className="card-wrapper  p-0 d-flex">
              <div className="rounded-3 get-in-touch-card position-relative p-0 d-lg-block d-none">
                <Image
                  src="/images/get-in-touch.png"
                  alt="get-in-touch"
                  className="h-100"
                />
              </div>
              <div style={{ padding: "44px 54px" }} className="flex-2 h-100">
                <h3>Get In Touch</h3>
                <ContactForm />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GetInTouch;
