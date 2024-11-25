import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function WhoWeAre() {
  return (
    <section className="sub-banner who_we_are about_us">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h2 className="text-center">
              Who <span>we</span> are<span>?</span>
            </h2>
            <div className="wwa_card">
              <p className="m-0">
                At Risk IQ Insurance, we bring a wealth of experience and
                industry expertise to the table. Our team is composed of
                seasoned professionals who understand the complexities of risk
                management and insurance. With years of knowledge under our
                belt, we navigate the ever-changing landscape of insurance with
                precision, ensuring that our clients receive the most informed
                and strategic coverage possible.
                <br />
                We recognize that one size does not fit all when it comes to
                insurance. That’s why we pride ourselves on our ability to
                provide tailor-made solutions for each client. Our approach
                involves a thorough understanding of your specific needs, risk
                tolerance, and long-term goals. Whether you are an individual
                seeking personal coverage or a business looking for
                comprehensive risk management, Risk IQ Insurance crafts
                solutions that precisely align with your unique requirements.
                <br />
                Transparency is at the core of our values. We believe that
                informed clients make the best decisions. That’s why, at Risk IQ
                Insurance, you can expect clear communication, straightforward
                policy terms, and a commitment to keeping you informed at every
                step of the process. Our goal is to demystify insurance, making
                it accessible and understandable for our clients.
                <br />
                Our clients are our top priority. We understand that your needs
                evolve, and we are here to evolve with them. Our dedicated team
                is committed to providing exceptional customer service, offering
                support from policy inception through claims processing. You can
                trust that, with Risk IQ Insurance, you are not just a
                policyholder; you are a valued member of our community.
              </p>
            </div>
            <div className="h-divider"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhoWeAre;
