import React, {useState} from 'react';
import styles from './App.module.css';
import SearchResults from "./searchResults/searchResults.js";
import SearchBar from './search/search.js';
import Playlist from './playlist/playlist.js';
import {Spotify} from './spotify/spotify.js';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
    name: "example track name 1",
    artist: "example track artist 1",
    album: "example track album 1",
    id: 1,
  },
  {
    name: "example track name 2",
    artist: "example track artist 2",
    album: "example track album 1",
    id: 2,
  },]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "example Playlist name 1",
      artist: "example Playlist artist 1",
      album: "example Playlist album 1",
      id: 11,
    },
    {
      name: "example Playlist name 2",
      artist: "example Playlist artist 2",
      album: "example Playlist album 2",
      id: 12,
    },
    {
      name: "example Playlist name 3",
      artist: "example Playlist artist 3",
      album: "example Playlist album 3",
      id: 13,
    },
  ]);
  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id)
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  };
  function removeTrack(track) {
    const existingTrack= playlistTracks.filter((t) => t.id !== track.id)
    setPlaylistTracks(existingTrack);
  }
  function updatePlaylistName(name) {
    setPlaylistName(name);
  }
  function savePlaylist() {
    const trackUris = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      updatePlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }
  function search(term) {
    Spotify.search(term).then(result => setSearchResults(result));
    console.log(term);
  }
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search}/>
        <div className={styles['App-playlist']}>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
          <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
