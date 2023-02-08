import { useEffect } from "react";
import { getCoinDetail as actionGetCoinsDetail } from '../redux/actions/actions';	
import { AppDispatch } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types/ReducerTypes";

export const useGetDetail = () => {
    const coin = useSelector((state: State) => state.coinDetail);
    const isLoading = useSelector((state: State) => state.isLoading);
    const dispatch: AppDispatch = useDispatch();

    const getCoinDetail = (id: string) => {
      dispatch(actionGetCoinsDetail(id));
  }
  return {
    coin,
    isLoading,
    getCoinDetail,
  }
}