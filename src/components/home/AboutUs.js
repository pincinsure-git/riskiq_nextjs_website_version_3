import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { about_images } from "../shared/data";

function AboutUs({ style, title, subTitle, btnText }) {
  return (
    <section className="sub-banner about-us-home-banner" style={style}>
      <div className="radial-bg">
        <Image src="/images/JARING.png" alt="jaring" />
      </div>
      <Container className="position-relative">
        <Row className="row-gap-5">
          <Col lg={5}>
            <div className="d-flex gap-3">
              {[0, 2].map((i) => (
                <div key={i} className="about-image-grid gap-3">
                  <Image src={about_images[i]} />
                  <Image src={about_images[i + 1]} />
                </div>
              ))}
            </div>
          </Col>
          <Col lg={7}>
            <div className="ms-lg-5">
              <div className="about-us-gradient">{title}</div>
              <h2>{subTitle}</h2>
              <p>
                Choosing Risk IQ Insurance is not just a transaction; it’s a
                partnership in securing your future. We go beyond being your
                insurance provider; we aim to be your trusted partner in
                navigating the complexities of risk and protecting what matters
                most to you.
              </p>
              <p className="mt-4">
                Embark on the path to a more secure and confident future with
                Risk IQ insurance. Our insurance solutions are built on a
                foundation of trust, reliability, and a commitment to your
                well-being. Explore our offerings, and let us be your guide in
                navigating life’s unpredictable moments.
              </p>
              <Button className="theme-btn mt-4">{btnText}</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
