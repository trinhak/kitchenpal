/* eslint-disable */
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducers from '@reducers';

let composeEnhancers = compose;

const rootPersistConfig = {
  key: 'root',
  storage,
  debug: true
};

if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools

  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || require('remote-redux-devtools').composeWithDevTools)({
      name: Platform.OS,
      ...require('../package.json').remotedev
    });
}

const middlewares = [
  thunk
];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const reducers = persistCombineReducers(rootPersistConfig, rootReducers);

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    })
  }

  return { store, persistor };
}
