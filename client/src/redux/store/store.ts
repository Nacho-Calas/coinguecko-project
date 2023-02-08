import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducer/reducer';
import { Action, State } from '../../types/ReducerTypes';

const middleware = [thunk];

export type AppDispatch = ThunkDispatch<State, null, any>;

export type AppThunk = ThunkAction<
  Promise<void>,
  State,
  unknown,
  Action
>;


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

