import React, { useState } from "react";
import { EditFieldProps } from "../../../models/projects";
import EditOpen from "./EditOpen";
import EditClosed from "./EditClosed";

const Field = ({
  name,
  value,
  inputValue,
  isLoading: { fieldName, loader },
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
        !(name === "author" && !contributors.length) && (
          <EditClosed
            name={name}
            value={value}
            isExpanded={isExpanded}
            setExpanded={setExpanded}
            projectOwnershipModal={projectOwnershipModal}
            setProjectOwnershipModal={setProjectOwnershipModal}
            author={author}
            loadingField={fieldName}
            updateProject={updateProject}
            loader={loader}
          />
        )
      )}
    </>
  );
};

export default Field;
