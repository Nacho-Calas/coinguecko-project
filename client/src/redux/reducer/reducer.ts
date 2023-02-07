import { GET_COINS } from "../actions/actions";
import { GET_COIN_DETAIL } from "../actions/actions";

import { Action } from "../../types/types";
import { State } from "../../types/types";

const initialState = {
  isLoading: false,
  coins: [],
  coinDetail: [],
};

function rootReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_COINS: {
      return {
        ...state,
        coins: action.payload,
      };
    }

    case GET_COIN_DETAIL: {
      return {
        ...state,
        coinDetail: action.payload,
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
