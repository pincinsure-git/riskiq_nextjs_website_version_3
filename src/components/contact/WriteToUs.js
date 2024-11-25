import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ContactForm from "../shared/form/ContactForm";
import { contactDetails, socialLinks } from "../shared/data";
import CardCircle from "../shared/CardCircle";

function WriteToUs({ title, para, formTitle }) {
  return (
    <section className="sub-banner ">
      <Container>
        <Row>
          <Col>
            <div className="card-wrapper write_to_us mt-5 p-0 d-flex rounded-3 ">
              <div style={{ padding: "44px 54px" }} className="flex-1">
                <div className=" d-flex flex-column bg-theme rounded-3 get-in-touch-card position-relative">
                  <h3> {title}</h3>
                  <p>{para}</p>
                  <ul className="contact">
                    {contactDetails.map((detail, index) => (
                      <li key={index}>
                        <Image src={detail.icon} alt="contact-icon" />{" "}
                        {detail.link ? (
                          <Link href={detail.link}>{detail.text}</Link>
                        ) : (
                          detail.text
                        )}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-auto mb-0 d-flex gap-44">
                    {socialLinks.map((social, index) => (
                      <li className="m-0" key={index}>
                        <Link href={social.link}>{social.icon}</Link>
                      </li>
                    ))}
                  </ul>
                  <CardCircle />
                </div>
              </div>
              <div style={{ padding: "44px 54px" }} className="flex-2 h-100">
                <h3>{formTitle}</h3>
                <ContactForm className="btn_position" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WriteToUs;
