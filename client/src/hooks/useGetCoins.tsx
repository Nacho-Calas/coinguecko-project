import { useEffect } from "react";
import { getCoins as actionGetCoins } from "../redux/actions/actions";
import { AppDispatch } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types/ReducerTypes";


export const useGetCoins = () => {
  const coins = useSelector((state: State) => state.coins);
  const isLoading = useSelector((state: State) => state.isLoading);
  const dispatch: AppDispatch = useDispatch();

  const getCoins = (page: number) => {
    dispatch(actionGetCoins(page));
  } 

  return {
    coins,
    isLoading,
    getCoins,
  } 
};