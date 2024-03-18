import {
  createSlice,
} from '@reduxjs/toolkit';

import { AppEntity } from '@nx-monorepo-rn-boilerplate/models';

export const APP_FEATURE_KEY = 'App';

export interface AppState extends AppEntity {
  loading: boolean;
}

export const initialAppState: AppState = {
  loading: false,
};

export const appSlice = createSlice({
  name: APP_FEATURE_KEY,
  initialState: initialAppState,
  reducers: {
    onLoadApp: state => {
      state.loading = true;
    },
    onLoadAppEnd: state => {
      state.loading = false;
    },
  },
});

export const appReducer = appSlice.reducer;

export const appActions = appSlice.actions;
