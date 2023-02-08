import { useEffect } from "react";
import { getCoins } from "../redux/actions/actions";
import { AppDispatch } from "../redux/store/store";
import { useDispatch } from "react-redux";

export const useGetCoins = (num: number) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
     dispatch(getCoins(num));
  }, [dispatch]);
};