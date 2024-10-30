import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo3.png";
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="footer-col">
            <h4 className="footer-title">Stay Connected</h4>
            <p className="footer-text">
              Follow me on social media for updates on my latest projects and insights.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center footer-logo-col">
            <img src={logo} alt="Company logo" className="footer-logo" />
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center text-md-end">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/rejwanul-hoque-a55a63289/" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon linkedin is-medium"></i>
              </a>
              <a href="https://github.com/rejzzzz" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon github is-medium"></i>
              </a>
              <a href="https://www.instagram.com/rej.06/" target="_blank" rel="noopener noreferrer">
                <i className="nes-icon instagram is-medium"></i>
              </a>
            </div>
            <p className="footer-copy">&copy; {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
