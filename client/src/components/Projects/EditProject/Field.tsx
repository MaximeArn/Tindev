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

  return <>{isExpanded ? <EditOpen /> : <EditClosed />}</>;
};

export default Field;

// <div className="field">
//   {name === "image" ? (
//     <img
//       className="field-edit-image"
//       src={`${url}/uploads/${value}`}
//       alt="image"
//     />
//   ) : name === "categories" ? (
//     <>
//       <div className="field-edit-categories">
//         <MultipleCategories />
//       </div>
//       <div>
//         <button className="field-edit-button" type="submit">
//           Confirm
//         </button>
//         <button
//           className="field-edit-button"
//           type="button"
//           onClick={() => setExpanded(!isExpanded)}
//         >
//           Close
//         </button>
//       </div>
//     </>
//   ) : (
//     <form className="field-edit-form">
//       <div className="field-edit-form-infos">
//         <label>{capitalize(name)}</label>
//         <input
//           className={
//             name === "description"
//               ? "field-edit-textarea"
//               : "field-edit-input"
//           }
//           type={typeChecker(name)}
//           name={name}
//           placeholder={`New ${capitalize(name)}...`}
//         />
//       </div>

//       <div>
//         <button className="field-edit-button" type="submit">
//           Confirm
//         </button>
//         <button
//           className="field-edit-button"
//           type="button"
//           onClick={() => setExpanded(!isExpanded)}
//         >
//           Close
//         </button>
//       </div>
//     </form>
//   )}
// </div>
