import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBarTray = () => {
  return (
    <div className="search-tray">
      <div className="search-tray-list-item">
        <div className="search-tray-item">
          <FontAwesomeIcon icon={faSearch} />
          <span className="search-value">SEARCH TRY</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBarTray;
