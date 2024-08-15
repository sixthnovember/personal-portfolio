import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LottieAnimation from './LottieAnimation';
import './Home.css';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Hi, I am Nicole 👋</h1>
          <h2>Computer Science student at the University of Vienna</h2>
          <br />
          <div>
            <a href='https://github.com/sixthnovember' target="_blank" rel="noopener noreferrer">
            <LottieAnimation />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;