import React from "react";
import styles from "./playlist.module.css";
import Tracklist from "../tracklist/tracklist.js";
function Playlist(props) {
  function handleNameChange({target}) {
    props.onNameChange(target.value)
  }
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      <Tracklist 
        userSearchResults={props.playlistTracks} 
        isRemoved={true} 
        onRemove={props.onRemove}
        />
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;