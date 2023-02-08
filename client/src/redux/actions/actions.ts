import axios from "axios";

export const GET_COINS = "GET_COINS";
export const GET_COIN_DETAIL = "GET_COIN_DETAIL";

import { AppDispatch } from "../store/store";

export const getCoins = (num: number) => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    try {
      dispatch({
        type: GET_COINS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCoinDetail = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false
` 
    );
    try {
      dispatch({
        type: GET_COIN_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

