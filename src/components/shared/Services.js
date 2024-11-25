import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RightArrow from "../shared/icon/RightArrow";

function Services({ title, services, showSeparator = true }) {
    return (
        <section className="sub-banner our_services pt-2">
            <div className="d-table">
                <div className="iQ_cZx-card is">
                    <h2>{title}</h2>
                </div>
                {showSeparator && <div className="iQ_seperator"></div>}
            </div>
            <Container fluid style={{ marginTop: "70px" }}>
                <Row className="row-gap-4">
                    {services.map((service, index) => (
                        <Col key={index} lg={4} xxl={4}>
                            <div className={`insurance-card ${service.className}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="m-0">{service.id}</h2>
                                    <div className="chip">{service.type}</div>
                                </div>
                                <div className="mt-48">
                                    <p>{service.description}</p>
                                    <Link href={service.link} className="mt-60 d-flex">
                                        <RightArrow />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;
