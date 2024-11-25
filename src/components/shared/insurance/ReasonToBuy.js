import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ReasonToBuySection = ({
  title,
  data,
  backgroundStyle,
  containerStyle,
  imageSrc,
  imageAlt,
  listClassName,
}) => {
  return (
    <section className="sub-banner reason-to-choose">
      <div className="iQ_cZx-card" style={backgroundStyle}>
        <h2>{title}</h2>
      </div>
      <Container fluid style={containerStyle}>
        <Row>
          <Col md={12}>
            <ul className={`why-choose-us-li mt-5 ${listClassName}`}>
              {data.map((item, index) => (
                <li key={index}>
                  <h4>{item.title}</h4>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="boxes-card d-none d-xl-block"
      />
    </section>
  );
};

export default ReasonToBuySection;
