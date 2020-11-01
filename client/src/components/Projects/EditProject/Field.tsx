import React, { useState } from "react";
import { EditFieldProps } from "../../../models/projects";
import EditOpen from "./EditOpen";
import EditClosed from "./EditClosed";

const Field = ({
  name,
  value,
  projectId,
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
          projectId={projectId}
          isExpanded={isExpanded}
          setExpanded={setExpanded}
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
        />
      )}
    </>
  );
};

export default Field;
