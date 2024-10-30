import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css';
import logo from '../../assets/img/logo3.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="REJ" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4"> {}
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>

          <div className="social-icon me-4"> {}
            <a href="https://www.linkedin.com/in/rejwanul-hoque-a55a63289/" target="_blank" rel="noopener noreferrer">
              <i className="nes-icon linkedin is-medium" style={{ margin: '0 10px' }}></i>
            </a>
            <a href="https://github.com/rejzzzz" target="_blank" rel="noopener noreferrer">
              <i className="nes-icon github is-medium" style={{ margin: '0 10px' }}></i>
            </a>
            <a href="https://www.instagram.com/rej.06/" target="_blank" rel="noopener noreferrer">
              <i className="nes-icon instagram is-medium" style={{ margin: '0 10px' }}></i>
            </a>
          </div>

          <span className="navbar-text ms-4"> {}
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Router>
  )
}
