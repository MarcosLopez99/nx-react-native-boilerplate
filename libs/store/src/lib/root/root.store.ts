import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

import { initialRootState } from './root-state';
import { createRootReducer } from './root.reducer';
import { RootState } from '@nx-monorepo-rn-boilerplate/models';

export const createRootStore = (
  persistConfig: PersistConfig<RootState>,
) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const rootReducer = createRootReducer();
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        serializableCheck: false,
      });
      return isDevelopment
        ? defaultMiddleware.concat(logger as any)
        : defaultMiddleware;
    },
    devTools: isDevelopment,
    preloadedState: initialRootState,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
