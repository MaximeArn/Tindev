import React, { useState } from "react";
import { EditFieldProps } from "../../../models/projects";
import EditOpen from "./EditOpen";
import EditClosed from "./EditClosed";

const Field = ({
  name,
  value,
  inputValue,
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
          inputValue={inputValue}
          getProjectEditInputValues={getProjectEditInputValues}
          setNewProjectImage={setNewProjectImage}
        />
      ) : (
        <EditClosed
          name={name}
          value={value}
          isExpanded={isExpanded}
          setExpanded={setExpanded}
        />
      )}
    </>
  );
};

export default Field;
