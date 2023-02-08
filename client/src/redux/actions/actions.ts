import axios from "axios";

export const GET_COINS = "GET_COINS";
export const GET_COIN_DETAIL = "GET_COIN_DETAIL";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COIN_DETAIL_SUCCESS = "GET_COIN_DETAIL_SUCCESS";
export const GET_COIN_DETAIL_ERROR = "GET_COIN_DETAIL_ERROR";

import { AppDispatch } from "../store/store";

export const getCoins = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: GET_COINS
    });

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
    );
    try {
      dispatch({
        type: GET_COINS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_COINS_ERROR,
        payload: error,
      });
      console.log(error)
    }
  };
};

export const getCoinDetail = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: GET_COIN_DETAIL,
      
    });
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false
` 
    );
    try {
      dispatch({
        type: GET_COIN_DETAIL_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_COIN_DETAIL_ERROR,
        payload: error,
      });
      console.log(error);
    }
  };
};

