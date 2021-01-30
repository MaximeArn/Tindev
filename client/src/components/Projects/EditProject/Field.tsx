import React, { useState } from "react";
import { EditFieldProps } from "../../../models/projects";
import EditOpen from "./EditOpen";
import EditClosed from "./EditClosed";

const Field = ({
  name,
  value,
  inputValue,
  isLoading,
  projectOwnershipModal,
  contributors,
  author,
  getProjectEditInputValues,
  setProjectOwnershipModal,
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
          setProjectOwnershipModal={setProjectOwnershipModal}
          updateProject={updateProject}
        />
      ) : (
        <EditClosed
          name={name}
          value={value}
          isExpanded={isExpanded}
          setExpanded={setExpanded}
          projectOwnershipModal={projectOwnershipModal}
          setProjectOwnershipModal={setProjectOwnershipModal}
          author={author}
          isLoading={isLoading}
          updateProject={updateProject}
        />
      )}
    </>
  );
};

export default Field;
