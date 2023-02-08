import { useEffect } from "react";
import { getCoins } from "../redux/actions/actions";
import { AppDispatch } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types/ReducerTypes";


export const useGetCoins = () => {
  const coins = useSelector((state: State) => state.coins);
  const isLoading = useSelector((state: State) => state.isLoading);
  const dispatch: AppDispatch = useDispatch();

  const disCoins = (page: number) => {
    dispatch(getCoins(page));
  } 

  return {
    coins,
    isLoading,
    disCoins,
  } 
};