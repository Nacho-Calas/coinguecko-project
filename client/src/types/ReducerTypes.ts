
/* Reducer Types */
export interface Action {
    type: string;
    payload: any;
}
export interface State {
    isLoading: boolean;
    coins: any[];
    coinDetail: any[];
}

