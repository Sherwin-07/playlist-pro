// src/components/CreatePlaylist.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import SongCard from './SongCard';

const CreatePlaylist = () => {
  const [song, setSong] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [artist, setArtist] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const addSong = () => {
    if (!song || !album || !genre || !artist) {
      alert('Please fill out all fields.');
      return;
    }

    const newSong = { song, album, genre, artist };

    if (editingIndex !== null) {
      // Edit existing song
      const updatedPlaylist = playlist.map((s, index) =>
        index === editingIndex ? newSong : s
      );
      setPlaylist(updatedPlaylist);
      setEditingIndex(null);
    } else {
      // Add new song
      setPlaylist([...playlist, newSong]);
    }

    // Reset form fields
    setSong('');
    setAlbum('');
    setGenre('');
    setArtist('');
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const editSong = (index) => {
    const songToEdit = playlist[index];
    setSong(songToEdit.song);
    setAlbum(songToEdit.album);
    setGenre(songToEdit.genre);
    setArtist(songToEdit.artist);
    setEditingIndex(index);
  };

  const deleteSong = (songToDelete) => {
    setPlaylist(playlist.filter((s, index) => s !== songToDelete));
  };

  return (
    <Container>
      <h2 className="my-4 text-center">Create Playlist</h2>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Song successfully {editingIndex !== null ? 'updated' : 'added'}!
        </Alert>
      )}

      <Form>
        <Form.Group>
          <Form.Label>Song</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter song name"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Album</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter album name"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Form.Control
            as="select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre</option>
            <option>Rock</option>
            <option>Pop</option>
            <option>Hip-Hop</option>
            <option>Jazz</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={addSong}>
          {editingIndex !== null ? 'Update Song' : 'Add Song'}
        </Button>
      </Form>

      <div className="mt-4">
        {playlist.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            onEdit={() => editSong(index)}
            onDelete={() => deleteSong(song)}
          />
        ))}
      </div>
    </Container>
  );
}

export default CreatePlaylist;
