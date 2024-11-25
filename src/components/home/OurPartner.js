import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { partnerLogos, partnerLogosXs } from "../shared/data";

function OurPartner({ title, para }) {
  return (
    <section className="sub-banner our-partner">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="our-partner-cnt">
            <h3>{title}</h3>
            <Image src="/images/wave.png" alt="wave" />
            <p className="mb-5 mb-lg-0">{para}</p>
          </Col>
          <Col lg={8}>
            <div className="xs-block">
              {partnerLogos.map((logoRow, index) => (
                <div
                  key={index}
                  className="partner-logo-wrapper"
                  style={{ marginTop: index === 0 ? "0" : "34px" }}
                >
                  {logoRow.map((logo, idx) => (
                    <div key={idx} className="partner-logo-card">
                      <Image src={logo} alt="partners" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="xs-none">
              {partnerLogosXs.map((logoRow, index) => (
                <div
                  key={index}
                  className="partner-logo-wrapper"
                  style={{ marginTop: index === 0 ? "0" : "34px" }}
                >
                  {logoRow.map((logo, idx) => (
                    <div key={idx} className="partner-logo-card">
                      <Image src={logo} alt="partners" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurPartner;
