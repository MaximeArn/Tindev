import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchTrayProps } from "../../models/search";

const SearchBarTray = ({ results, getResultUrlPath }: SearchTrayProps) => {
  return (
    <div tabIndex={-1} className="search-tray">
      <div className="search-tray-list-item">
        {results.length ? (
          results.map((result: any) => {
            getResultUrlPath(result);
            return (
              <div key={result._id}>
                <Link to={result.path} key={result._id} className="search-tray-item">
                  <FontAwesomeIcon icon={faSearch} />
                  <span className="search-value">
                    {result.title || result.username || result.name}
                  </span>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="search-tray-noresult">
            <FontAwesomeIcon icon={faSearch} />
            <span className="search-value">No results found</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBarTray;
