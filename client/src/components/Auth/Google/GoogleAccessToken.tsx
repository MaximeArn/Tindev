import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { GoogleProcessProps } from "../../../models/token";

const GoogleAccessToken = ({ verifyAuthorizationCode }: GoogleProcessProps) => {
  const queryParameters = qs.parse(useLocation().search);

  useEffect(() => {
    verifyAuthorizationCode(queryParameters);
  }, []);

  return <div></div>;
};

export default GoogleAccessToken;
