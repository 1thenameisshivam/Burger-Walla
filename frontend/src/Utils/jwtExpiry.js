import { jwtDecode } from "jwt-decode";
export const isTokenExpired = async (token) => {
  try {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    // console.log("Token expiry:", decodedToken.exp * 1000);
    // console.log("Current time:", Date.now());
    // console.log("Token not expired:", decodedToken.exp * 1000 > Date.now());

    if (decodedToken.exp * 1000 > Date.now()) {
      return { valid: true, ...decodedToken };
    }
    return false;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return true;
  }
};
