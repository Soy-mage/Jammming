import React from "react";
import Tracklist from "../tracklist/tracklist.js";
import styles from "./searchResults.module.css";
function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
          {/*<h1>test searchresults</h1>*/}
        <Tracklist 
          userSearchResults={props.userSearchResults} 
          isRemoved={false}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
        />
      </div>
        );
}

export default SearchResults;