import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleProcessProps } from "../../../models/token";
import qs from "qs";

const GoogleAuthorizationCode = ({ verifyAuthorizationCode }: GoogleProcessProps) => {
  const queryParameters = qs.parse(useLocation().search, { ignoreQueryPrefix: true });

  useEffect(() => {
    verifyAuthorizationCode(queryParameters);
  }, []);

  return <div></div>;
};

export default GoogleAuthorizationCode;
