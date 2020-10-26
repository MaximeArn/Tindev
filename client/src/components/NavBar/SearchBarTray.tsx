import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchTrayProps } from "../../models/search";

const SearchBarTray = ({ search, sendSearchPreview }: SearchTrayProps) => {
  useEffect(() => {
    sendSearchPreview();
  }, [search]);

  return (
    <div className="search-tray">
      <div className="search-tray-list-item">
        {search && (
          <div className="search-tray-item">
            <FontAwesomeIcon icon={faSearch} />
            <span className="search-value">{search}</span>
          </div>
        )}
        <div className="search-tray-item">
          <FontAwesomeIcon icon={faSearch} />
          <span className="search-value">results</span>
        </div>
        <div className="search-tray-item">
          <FontAwesomeIcon icon={faSearch} />
          <span className="search-value">results 2</span>
        </div>
        <div className="search-tray-item">
          <FontAwesomeIcon icon={faSearch} />
          <span className="search-value">results 3</span>
        </div>
        <div className="search-tray-item">
          <FontAwesomeIcon icon={faSearch} />
          <span className="search-value">results 4</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBarTray;
