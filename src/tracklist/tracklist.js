import React from "react";
import styles from "./tracklist.module.css";
import Track from "../track/track.js";
function Tracklist (props) {
    // function renderAction() {
      // return <button className="Track-action">{props.isRemoval ? "-" : "+"}</button>
      // if (props.isRemoval) {
      //   return <button className="Track-action">-</button>
      // } else {
      // return <button className="Track-action">+</button>
      // }
    // }
    return (
        <div className={styles.tracklist}>
        {props.userSearchResults.map((track) => (
            <Track />
        ))}
      </div>
    );
}

export default Tracklist;