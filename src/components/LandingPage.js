// src/components/LandingPage.js
import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container>
      <h1 className="my-4 text-center">PlaylistPro: Your Music, Perfectly Organized</h1>
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Music is Life</h3>
            <p>Feel the rhythm of life with every beat.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel1.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Curate Your World</h3>
            <p>Create playlists for every mood and occasion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Discover New Artists</h3>
            <p>Explore popular artists and their top hits.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Create Playlists</Card.Title>
              <Card.Text>
                Easily create and manage your playlists with just a few clicks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Discover Artists</Card.Title>
              <Card.Text>
                Explore new artists and genres to expand your musical horizons.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Organize Your Music</Card.Title>
              <Card.Text>
                Keep your music perfectly organized and easy to access.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
