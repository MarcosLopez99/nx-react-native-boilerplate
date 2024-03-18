import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from '../app/app.slice';
import { RootState } from '@nx-monorepo-rn-boilerplate/models';
import { peopleReducer } from '../people/peoople.slice';

export const createRootReducer = () =>
  combineReducers<RootState>({
    app: appReducer,
    people: peopleReducer,
  });
