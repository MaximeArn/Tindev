import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { GoogleProcessProps } from "../../../models/token";

const GoogleAccessToken = ({ authorize }: GoogleProcessProps) => {
  const uriFragment = qs.parse(useLocation().hash);

  useEffect(() => {
    authorize(uriFragment);
  }, []);

  return <div>GOOGLE AUTH PROCESSING</div>;
};

export default GoogleAccessToken;
