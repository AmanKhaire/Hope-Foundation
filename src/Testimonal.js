import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import './Testimonal.css';

const testimonials = [
  {
    name: "Marty Kamson",
    role: "Project Manager",
    text: "Working with this organization has been a life-changing experience. Their dedication and passion inspire everyone around them.",
    image: "./img6.jpg",
  },
  {
    name: "Lexi Sandolv",
    role: "Project Manager",
    text: "I've witnessed firsthand the positive impact this charity has on communities. It's truly heartwarming to see the difference they make.",
    image: "./img7.jpg",
  },
  {
    name: "Sadio Mane",
    role: "Social Worker",
    text: "Being a part of this journey has been rewarding. The support and care provided to those in need are remarkable.",
    image: "./img8.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="section-title text-center">
          <span className="highlight"><h6>Testimonials</h6></span>
          <br />
          Happy People Says
        </h2>
        {testimonials.map((testimonial, index) => (
          <Row key={index} className={`testimonial-row ${index % 2 === 0 ? "normal-layout" : "reverse-layout"}`}>
            <Col md={4} className="image-container">
              <Image src={testimonial.image} rounded className="testimonial-img" alt={testimonial.name} />
            </Col>
            <Col md={7} className="text-container">
              <Card className="testimonial-card">
                <Card.Body>
                  <h5 className="testimonial-name">{testimonial.name}</h5>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <Card.Text className="testimonial-text">
                    “{testimonial.text}”
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Testimonials;
