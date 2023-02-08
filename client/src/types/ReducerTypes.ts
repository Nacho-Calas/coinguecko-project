import { Coin } from './coinType';

/* Reducer Types */
export interface Action {
    type: string;
    payload: any;
}
export interface State {
    isLoading: boolean;
    coins: any[];
    coinDetail: Coin | null;
    page: number;
}

