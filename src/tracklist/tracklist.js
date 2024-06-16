import React from "react";
import styles from "./tracklist.module.css";
import Track from "../track/track.js";
function Tracklist(props) {
    return (
        <div className={styles.Tracklist}>
          {props.userSearchResults.map((track) => (
          <Track 
            track={track} 
            key={track.id} 
            isRemoved={props.isRemoved} 
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
            
          ))}
      </div>
    );
}

export default Tracklist;