import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { GoogleProcessProps } from "../../../models/token";

const GoogleAccessToken = ({ authorize }: GoogleProcessProps) => {
  const queryParameters = qs.parse(useLocation().search);
  console.log(queryParameters);

  useEffect(() => {
    authorize(queryParameters);
  }, []);

  return <div></div>;
};

export default GoogleAccessToken;
