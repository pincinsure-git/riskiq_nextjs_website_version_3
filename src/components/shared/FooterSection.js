import Link from "next/link";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { companyLinks, serviceLinks, socialLinksFooter } from "./data";

function FooterSection() {
  return (
    <>
      <section className="sub-banner footer-sec">
        <Container>
          <Row className="row-gap-5">
            <Col md={6} xl={4} className="">
              <Image
                src="/images/logo-square.svg"
                alt="Logo"
                className="ms-lg-5"
              />
              <ul className="mt-4">
                <li>Email: info@riskiqinsurance.com</li>
                <li>Phone: +91 9045550000</li>
              </ul>
            </Col>
            <Col md={6} xl={2}>
              <ul>
                {companyLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6} xl={2}>
              <ul>
                {serviceLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6} xl={4}>
              <h5>Newsletter</h5>
              <InputGroup className="mb-3 news_letter position-relative">
                <Form.Control
                  placeholder="Enter Your Email"
                  aria-label="Enter Your Email"
                  aria-describedby="mail"
                />
                <Button variant="bg-white" className="bg-white" id="mail">
                  Submit
                </Button>
                <div className="layer"></div>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="py-3">
        <Container>
          <Row>
            <Col>
              <div className="follow-us d-flex align-items-center">
                <div className="d-flex gap-4">
                  <p className="m-0 follow-us-para">Follow us</p>
                  <ul>
                    {socialLinksFooter.map(({ href, src, alt }) => (
                      <li key={alt}>
                        <Link href={href}>
                          <Image src={src} alt={alt} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="copy-right ms-auto mb-0">
                  Copyright© Risk IQ Insurance | All Rights Reserved. Design By
                  Firoj Saifi
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterSection;
