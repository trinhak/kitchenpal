import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

import configureStore from './configureStore';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
