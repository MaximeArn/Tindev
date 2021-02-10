export default (res: any) => {
  let refreshDelay: number = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    console.log(newAuthRes);
    // refreshDelay = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshDelay);
  };
  setTimeout(refreshToken, refreshDelay);
};
