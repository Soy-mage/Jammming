import React from "react";
import Tracklist from "../tracklist/tracklist.js";
import styles from "./searchResults.module.css";
function SearchResults (props) {
    return (
        <div className={styles.searchResults}>
        <Tracklist userSearchResults={props.userSearchResults}/>
      </div>
        );
}

export default SearchResults;