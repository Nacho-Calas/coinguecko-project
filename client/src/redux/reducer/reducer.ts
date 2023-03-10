import {
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_ERROR,
  GET_COIN_DETAIL,
  GET_COIN_DETAIL_SUCCESS,
  GET_COIN_DETAIL_ERROR,
  SET_PAGE_NUMBER,
} from "../actions/actions";

import { Action } from "../../types/ReducerTypes";
import { State } from "../../types/ReducerTypes";

const initialState = {
  isLoading: false,
  coins: [],
  coinDetail: null,
  page: 1,
};

function rootReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_COINS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_COINS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        coins: action.payload,
      };
    }
    case GET_COINS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case GET_COIN_DETAIL: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_COIN_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        coinDetail: action.payload,
      };
    }
    case GET_COIN_DETAIL_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SET_PAGE_NUMBER: {
      return {
        ...state,
        page: action.payload,
      };
    }

    default:
      return state;
  }
}
export default rootReducer;
