import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { blogPosts } from "../shared/data";

function BlogSection({ title, para }) {
  return (
    <section className="sub-banner">
      <Container>
        <Row>
          <Col xl={{ span: 8, offset: 2 }}>
            <div className="blog-flex">
              <h3 className="m-0">{title}</h3>
              <div className="vertical-line"></div>
              <p className="m-0 theme-dark-text">{para}</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-md-5 row-gap-4">
          {blogPosts.map(({ src, alt, title, description }, index) => (
            <Col key={index} xl={4} lg={6}>
              <div className="blog-card">
                <Image src={src} alt={alt} />
                <div className="blog-card-cnt">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button className="theme-btn">VIEW MORE</Button>
        </div>
      </Container>
    </section>
  );
}

export default BlogSection;
