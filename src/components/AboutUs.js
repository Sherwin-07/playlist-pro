// src/components/AboutUs.js
import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <h2 className="my-4 text-center">About Us</h2>
      <p>
        PlaylistPro is a cutting-edge music playlist management application designed to help you organize your music effortlessly.
        With PlaylistPro, you can create and manage playlists for any mood or occasion, discover popular artists, and keep track
        of your favorite songs with ease. Our goal is to enhance your music experience by providing an intuitive and user-friendly
        platform to manage your music collection.
      </p>
      <p>
        Whether you are a music enthusiast or someone who just loves to have their music neatly organized, PlaylistPro is here to
        provide the perfect solution for your needs. Enjoy exploring new artists, creating your dream playlists, and sharing your
        musical journey with PlaylistPro.
      </p>
    </Container>
  );
}

export default AboutUs;
