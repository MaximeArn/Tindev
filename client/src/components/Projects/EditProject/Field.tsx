import React, { useState } from "react";
import { EditFieldProps } from "../../../models/projects";
import EditOpen from "./EditOpen";
import EditClosed from "./EditClosed";

const Field = ({
  name,
  value,
  inputValue,
  isLoading: { fieldName, loader },
  contributors,
  getProjectEditInputValues,
  setNewProjectImage,
  updateProject,
}: EditFieldProps) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      {isExpanded ? (
        <EditOpen
          name={name}
          value={value}
          isExpanded={isExpanded}
          setExpanded={setExpanded}
          contributors={contributors}
          inputValue={inputValue}
          getProjectEditInputValues={getProjectEditInputValues}
          setNewProjectImage={setNewProjectImage}
          updateProject={updateProject}
        />
      ) : (
        !(name === "author" && !contributors.length) && (
          <EditClosed
            name={name}
            value={value}
            isExpanded={isExpanded}
            setExpanded={setExpanded}
            loadingField={fieldName}
            loader={loader}
          />
        )
      )}
    </>
  );
};

export default Field;
