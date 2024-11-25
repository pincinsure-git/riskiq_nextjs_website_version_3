import Link from "next/link";
import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import MailIcon from "../shared/icon/MailIcon";
import PhoneIcon from "../shared/icon/PhoneIcon";
import ContactForm from "../shared/form/ContactForm";

function GetInTouch() {
  return (
    <section className="sub-banner get-in-touch">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="card-wrapper">
              <h3>Get In Touch</h3>
              <ContactForm />
            </div>
          </Col>
          <Col xl={6}>
            <div className="ms-xl-5">
              <h2>Let's Protect Your Business, Life And Much More</h2>
              <p>
                Eget lacinia vulputate diam tempor. Porttitor consequat mattis
                nunc tellus in quisque rhoncus accumsan. Sit pellentesque ut est
                id nunc amet convallis. Dui odio quis arcu leo at turpis.
              </p>
              <ul className="get_in_touch_li">
                <li>
                  <MailIcon />
                  <Link href="mailto:info@riskinsurance.com">
                    info@riskinsurance.com
                  </Link>
                </li>
                <li>
                  <PhoneIcon />
                  <Link href="tel:+919045550000">+91 9045550000</Link>
                </li>
              </ul>
              <Image src="/images/building.png" className="building" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GetInTouch;
