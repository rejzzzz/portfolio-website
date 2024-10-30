import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import githublogo from "./../../assets/img/github-logo.jpeg";

import './Projects.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects showcase a blend of creativity and exploration in diverse technologies, delivering engaging experiences through innovative design and functionality. From a dynamic portfolio website and an interactive Pac-Man game to a blockchain dApp, I embrace fun in every endeavor. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Pacman game</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tenders Dapp</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <div className="content-container">
                      <a href="https://github.com/rejzzzz/portfolio-website" target="_blank" rel="noopener noreferrer" class="github-card-first">
                        <div class="card-content">
                          <img src={githublogo} alt="GitHub Logo" />
                          <h3>Portfolio with React</h3>
                          <p className="github-p">Github</p>
                        </div>
                      </a>
                      <p>This React project features a dynamic portfolio website with smooth transitions 
                        and interactive elements to showcase skills and projects, creating an engaging user experience 
                        focused on design and functionality.</p>
                      </div>

                    </Tab.Pane> 
                      
                    <Tab.Pane eventKey="second">
                      <div className="content-container">
                        <a href="https://github.com/rejzzzz/pacman-game" target="_blank" rel="noopener noreferrer" className="github-card-second">
                          <div className="card-content">
                          <img src={githublogo} alt="GitHub Logo" />
                            <h3>Pacman Game in C</h3>
                            <p className="github-p">Github</p>
                          </div>
                        </a>
                        <p>This project is an ongoing development of a Pac-Man game, created using C and SDL. 
                          The goal is to implement a fully functional version of the classic Pac-Man game, 
                          featuring a playable character (Pac-Man) and AI-controlled ghosts. Currently, 
                          the ghost utilizes Dijkstra's Algorithm to navigate the maze and attempt to find the optimal path to Pac-Man.</p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <div className="content-container">
                        <a href="https://github.com/rejzzzz/TendersDapp" target="_blank" rel="noopener noreferrer" class="github-card-third">
                          <div class="card-content">
                            <img src={githublogo} alt="GitHub Logo" />
                            <h3>Tender's Dapp for Web3</h3>
                            <p className="github-p">Github</p>
                          </div>
                        </a>
                        <p>
                        This dApp streamlines bidding and tendering using Ethereum's 
                        blockchain and Solidity smart contracts. Built with React.js and Node.js, 
                        it integrates MetaMask for wallet connectivity and utilizes Hardhat for development, 
                        enhancing transparency and efficiency. </p>
                      </div>  
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
