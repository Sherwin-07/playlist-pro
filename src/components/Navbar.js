// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">PlaylistPro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> {/* Use ms-auto for margin-start auto in Bootstrap 5 */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/popular-artists">Popular Artists</Nav.Link>
          <Nav.Link as={Link} to="/create-playlist">Create Playlist</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
