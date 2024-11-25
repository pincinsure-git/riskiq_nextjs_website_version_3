import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function OurPartners() {
  const data = [
    {
      imgSrc: "/images/partners/aegonlife.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/partner.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/hdfcergo.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/star.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/kotak.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/hdfclife.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/RelianceGeneralInsurance.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/royal_sundaram.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/max-life.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/Star_Union_Dai-ichi_Life.png",
      altText: "partner",
    },
    {
      imgSrc: "/images/partners/religare.png",
      altText: "partner",
    },
  ];
  return (
    <section className="sub-banner our-partner-sec">
      <Container>
        <Row className="row-gap-5">
          <Col lg={6} className="pe-lg-5">
            <h3>
              Our <span>Partners</span>
            </h3>
            <p  className="pe-lg-4">
              We welcome partnerships across a spectrum of industries and
              sectors. Whether you are a technology provider, a business
              consultancy, a startup, or an established enterprise, there’s a
              place for you in our diverse ecosystem of partners. Together, we
              can explore new opportunities, tackle challenges, and create value
              for our shared stakeholders.
            </p>
            <Button className="theme-btn-primary mt-4">Read More</Button>
          </Col>
          <Col lg={6}>
            <div className="partners-list">
              {data.map((card, index) => (
                <div key={index}>
                  <Image src={card.imgSrc} alt={card.altText} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurPartners;
