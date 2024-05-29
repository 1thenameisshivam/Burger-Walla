import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isTokenExpired } from "../Utils/jwtExpiry";
import { setUserInfo } from "../redux/userSlice";

export const useSetUserData = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userInfo);
  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        const isExpired = await isTokenExpired(token);
        if (isExpired) {
          dispatch(setUserInfo(isExpired));
        }
      }
    };
    checkToken();
  }, [token]);
};
