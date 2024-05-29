/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { setBurgers } from "../redux/burgerSlice";
import { useEffect } from "react";
import { VITE_GET_BURGERS } from "../config/constant";
export const useSetAllBurger = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const response = await fetch(VITE_GET_BURGERS);
        const data = await response.json();
        dispatch(setBurgers(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchBurgers();
  }, []);
};
