import React, { useState } from "react";
import { EditFieldProps } from "../../../models/projects";
import EditOpen from "./EditOpen";
import EditClosed from "./EditClosed";

const Field = ({
  name,
  value,
  inputValue,
  getProjectEditInputValues,
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
        />
      ) : (
        <EditClosed
          name={name}
          value={value}
          isExpanded={isExpanded}
          setExpanded={setExpanded}
          getProjectEditInputValues={getProjectEditInputValues}
        />
      )}
    </>
  );
};

export default Field;
