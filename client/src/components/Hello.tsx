import React from "react";

const Hello = ({ name }: any) => {
  return <div>Hello, {name || "Stranger"}</div>;
};

export default Hello;
