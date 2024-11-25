import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Map() {
  return (
    <section className="sub-banner ">
      <Container fluid>
        <Row>
          <Col>
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9272742803873!2d72.95213807583973!3d19.198378548118036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90f06d9b0e7%3A0xec55697ff3ab4670!2s5XX3%2B9V9%20Ashar%20IT%20park%2C%20Neheru%20Nagar%2C%20Wagle%20Industrial%20Estate%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400604!5e0!3m2!1sen!2sin!4v1731479543952!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Map;
