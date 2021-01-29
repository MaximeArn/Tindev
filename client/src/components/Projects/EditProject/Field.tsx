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
        <EditClosed
          name={name}
          value={value}
          isExpanded={isExpanded}
          setExpanded={setExpanded}
          fieldName={fieldName}
          loader={loader}
          contributors={contributors}
        />
      )}
    </>
  );
};

export default Field;
