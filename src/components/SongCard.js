// src/components/SongCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SongCard = ({ song, onEdit, onDelete }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{song.song}</Card.Title>
        <Card.Text>Album: {song.album}</Card.Text>
        <Card.Text>Genre: {song.genre}</Card.Text>
        <Card.Text>Artist: {song.artist}</Card.Text>
        <Button variant="warning" className="mr-2" onClick={() => onEdit(song)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(song)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default SongCard;
