import { useEffect } from "react";
import { getCoins } from "../redux/actions/actions";
import { AppDispatch } from "../redux/store/store";
import { useDispatch } from "react-redux";
import { Axios } from "axios";

export const useGetCoins = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
     dispatch(getCoins());
  }, [dispatch]);
};


