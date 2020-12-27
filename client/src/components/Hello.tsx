import React from "react";

const Hello = ({ name }: any) => {
  return <>{name && <div>Hello, {name}</div>}</>;
};

export default Hello;
