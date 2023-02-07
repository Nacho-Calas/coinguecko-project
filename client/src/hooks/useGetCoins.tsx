import { useEffect } from "react";
import { getCoins } from "../redux/actions/actions";
import { getCoinDetail } from "../redux/actions/actions";	
import { AppDispatch } from "../redux/store/store";
import { useDispatch } from "react-redux";

export const useGetCoins = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);
};


