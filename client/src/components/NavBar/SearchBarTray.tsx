import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchTrayProps } from "../../models/search";
import slugify from "../../utils/slugify";
import userify from "../../utils/whiteSpaceRemover";

const SearchBarTray = ({
  search,
  results,
  sendSearchPreview,
}: SearchTrayProps) => {
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
        {results.map(({ _id, title, username, author }: any) => {
          const path = author
            ? `/project/${slugify(title)}`
            : `/user/${userify(username)}`;

          return (
            <div key={_id} className="search-tray-item">
              <FontAwesomeIcon icon={faSearch} />
              <Link to={path} className="search-value">
                results
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBarTray;
