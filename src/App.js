import styles from './App.module.css';
import SearchResults from "./searchResults/searchResults.js";
import SearchBar from './search/search.js';
import Playlist from './playlist/playlist.js';
import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([
  {
    name: "example track name 1",
    artist: "example track artist 1",
    album: "example track album",
    id: 1,
  },
  {
    name: "example track name 1",
    artist: "example track artist 1",
    album: "example track album",
    id: 2,
  },
]);
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <Search /> */}
        <div className={styles['App-playlist']}>
          <SearchResults userSearchResult={searchResults}/>
          {/* <Playlist /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
