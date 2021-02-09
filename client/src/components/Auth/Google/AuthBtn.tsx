import React from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../../environments/api";

const AuthBtn = () => {
  const onSuccess = (res: any): void => {
    console.log(res.getBasicProfile());
  };

  const onError = ({ error }: { error: string; details?: string }): void => {
    console.error("google auth error :  ", error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={"Login"}
      onSuccess={onSuccess}
      onFailure={onError}
    />
  );
};

export default AuthBtn;
