import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Navigator } from './Navigator';
import rootReducer from './reducers';

const store: any = createStore(rootReducer, {
  samples: {
    currentStage: 1
  }
});

const AppNavigator = createAppContainer(Navigator);

export default function App () {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}