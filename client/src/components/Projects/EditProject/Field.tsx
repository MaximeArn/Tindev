import React, { useState } from "react";
import { url } from "../../../environments/api";
import capitalize from "../../../utils/capitalizeFirstLetter";
import typeChecker from "../../../utils/projectEditTypeChecker";
import MultipleCategories from "../../containers/MultipleCategories";
import { EditFieldProps } from "../../../models/projects";
import EditOpen from "./EditOpen";
import EditClosed from "./EditClosed";

const Field = ({ name, value }: EditFieldProps) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      {isExpanded ? (
        <EditOpen
          name={name}
          value={value}
          isExpanded={isExpanded}
          setExpanded={setExpanded}
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
