import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

const GoogleAccessToken = () => {
  const uriFragment = qs.parse(useLocation().hash);

  useEffect(() => {
    console.log(uriFragment);
  }, []);

  return <div>GOOGLE AUTH PROCESSING</div>;
};

export default GoogleAccessToken;
