type AuthResType = { tokenObj: any; reloadAuthResponse: any };

export default (res: AuthResType) => {
  console.log("first token ", res.tokenObj);
  let refreshDelay: number = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const { expires_in } = await res.reloadAuthResponse();
    refreshDelay = (expires_in || 3600 - 5 * 60) * 1000;
    // call the function as soon as the token expire to generate a new one
    setTimeout(refreshToken, refreshDelay);
  };

  //first execution with initial expires_in timestamp
  setTimeout(refreshToken, refreshDelay);
  refreshToken();
};
