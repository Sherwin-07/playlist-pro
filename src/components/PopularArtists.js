// src/components/PopularArtists.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const PopularArtists = () => {
  const artists = [
    { name: 'Eminem', description: 'Eminem, also known as Marshall Mathers, is a groundbreaking American rapper renowned for his complex lyrics and intense delivery. With albums like "The Slim Shady LP" and "The Marshall Mathers LP," he is a defining figure in hip-hop.', image: '/images/artist1.jpg' },
    { name: 'Lana Del Rey', description: 'Lana Del Rey is an American singer-songwriter known for her cinematic sound and melancholic lyrics. Her distinctive voice and nostalgic themes are showcased in hits like "Video Games" and "Born to Die."', image: '/images/artist2.jpg' },
    { name: 'Justin Bieber', description: 'A Canadian pop sensation, Justin Bieber rose to fame as a teenager with his catchy melodies and smooth voice. Known for hits like "Baby" and "Sorry," he is a global icon in contemporary pop and R&B.', image: '/images/artist3.jpg' },
  ];

  return (
    <Container>
      <h2 className="my-4 text-center">Popular Artists</h2>
      <Row>
        {artists.map((artist, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={artist.image} />
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text>{artist.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PopularArtists;
