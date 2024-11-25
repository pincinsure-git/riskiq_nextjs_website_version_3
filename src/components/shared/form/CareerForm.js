import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FileUpload from "./FileUpload";

function CareerForm() {
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };
  return (
    <Form className="mt-40">
      <Form.Group controlId="formFullName" className="mb-3">
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control type="email" placeholder="Email Id" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formContact" className="mb-3">
            <Form.Control type="text" placeholder="Contact No" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formSubject" className="mb-3">
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>
      <FileUpload />
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextMessage">
        <Col sm="12">
          <Form.Control as="textarea" rows={5} placeholder="Message..." />
        </Col>
      </Form.Group>
      <div className="mt-5 d-flex justify-content-end">
        <Button className="theme-btn">SUBMIT</Button>
      </div>
    </Form>
  );
}

export default CareerForm;
