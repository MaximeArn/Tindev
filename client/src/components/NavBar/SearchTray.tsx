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
  setSelectedContent,
}: SearchTrayProps) => {
  useEffect(() => {
    sendSearchPreview();
  }, [search]);

  return (
    <div tabIndex={-1} className="search-tray">
      <div className="search-tray-list-item">
        {results.length ? (
          results.map(({ _id, title, username, author }: any) => {
            const path = author
              ? `/project/${slugify(title)}`
              : `/user/${userify(username)}`;

            return (
              <div
                key={_id}
                onClick={() =>
                  setSelectedContent(author ? { project: title } : { user: username })
                }
              >
                <Link to={path} key={_id} className="search-tray-item">
                  <FontAwesomeIcon icon={faSearch} />
                  <span className="search-value">{title || username}</span>
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
