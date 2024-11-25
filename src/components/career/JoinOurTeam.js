import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

const InfoSection = ({ title, text, image, reverse }) => (
  <Row
    className={`align-items-center mt-5 pt-md-5 ${reverse ? "flex-reverse" : ""}`}
  >
    {reverse ? (
      <>
        <Col lg={{ span: 5, offset: 1 }}>
          <Image
            src={image}
            alt={title.toLowerCase().replace(/\s+/g, "-")}
            className="w-100"
          />
        </Col>
        <Col lg={5}>
          <h4>{title}</h4>
          <p className="git-para">{text}</p>
        </Col>
      </>
    ) : (
      <>
        <Col lg={{ span: 5, offset: 1 }}>
          <h4>{title}</h4>
          <p className="git-para">{text}</p>
        </Col>
        <Col lg={5}>
          <Image
            src={image}
            alt={title.toLowerCase().replace(/\s+/g, "-")}
            className="w-100"
          />
        </Col>
      </>
    )}
  </Row>
);

function JoinOurTeam() {
  const sections = [
    {
      title: "Professional Development Opportunities",
      text: "We invest in our team’s growth with access to ongoing training, certifications, and skill-building workshops, empowering you to excel in your career and stay ahead in the insurance industry.",
      image: "/images/professional-development-opportunities.png",
      reverse: false,
    },
    {
      title: "Comprehensive Health Coverage",
      text: "RiskIQ provides robust health benefits, including full medical and wellness support for you and your family. Our plans are designed to ensure peace of mind, with preventive care, mental health resources, and financial protection for critical healthcare needs.",
      image: "/images/health-coverage.png",
      reverse: true,
    },
    {
      title: "Flexible Work Environment",
      text: "Enjoy the flexibility you need to balance work and life. With remote work options, flexible hours, and generous leave policies, we support a positive work-life balance that fits your unique lifestyle.",
      image: "/images/work-environment.png",
      reverse: false,
    },
  ];

  return (
    <section className="sub-banner join-our-team">
      <Container>
        <Row>
          <Col>
            <h2>Join Our Team: Building Careers, Shaping Futures</h2>
            <p style={{ marginTop: "28px" }}>
              Welcome to the career hub of Risk IQ Insurance, where we believe
              in the power of individuals to drive innovation, growth, and
              success. As a dynamic and forward-thinking company, we are on a
              mission to shape the future, and we invite you to be a part of
              this journey. We understand that your career is a journey, not a
              destination. That’s why we prioritize your professional growth and
              development. Our commitment to continuous learning, mentorship
              programs, and opportunities for advancement ensures that you are
              equipped with the skills and knowledge to reach new heights in
              your career.
            </p>
          </Col>
        </Row>
        {sections.map((section, index) => (
          <InfoSection key={index} {...section} />
        ))}
      </Container>
    </section>
  );
}

export default JoinOurTeam;
