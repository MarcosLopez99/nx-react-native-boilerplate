import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppScreen from '../screens/AppScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  APP_FEATURE_KEY,
  createRootStore,
  transformEntityStateToPersist,
} from '@nx-monorepo-rn-boilerplate/store';

export const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [APP_FEATURE_KEY],
    transforms: [transformEntityStateToPersist],
  };

  const { store, persistor } = createRootStore(persistConfig);

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <AppScreen />
      </Provider>
    </PersistGate>
  );
};

export default App;
